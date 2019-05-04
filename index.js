module.exports = {
  overrideWebpackConfig: ({ webpackConfig, pluginOptions }) => {
    // Check plugin options
    if (!pluginOptions || !pluginOptions.resources) {
      throw new Error('craco-sass-resources-loader error: require plugin options resources');
    }
    
    // Check webpack config
    if (
      !webpackConfig || 
      !webpackConfig.module || 
      !webpackConfig.module.rules ||
      typeof webpackConfig.module.rules !== 'object'
    ) {
      throw new Error('craco-sass-resources-loader error: no valid webpackConfig.module.rules');
    }

    // Add the loader rule where needed
    const output = {...webpackConfig};
    Object.keys(output.module.rules).forEach((ruleKey, ruleIndex) => {
      const rule = output.module.rules[ruleKey];
      if (Object.prototype.hasOwnProperty.call(rule, 'oneOf')) {
        rule.oneOf.forEach((oneOf, oneOfIndex) => {
          if (
            oneOf.test && oneOf.use &&
            (`${oneOf.test}`.includes('scss') || `${oneOf.test}`.includes('sass'))
          ) {
            output.module.rules[ruleIndex].oneOf[oneOfIndex].use.push({
              loader: 'sass-resources-loader',
              options: {
                resources: pluginOptions.resources
              },
            })
          }
        })
      }
    })
    return output;
  }
};