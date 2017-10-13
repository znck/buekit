module.exports = (config) => {
  config.resolve = config.resolve || {}
  config.resolve.alias = config.resolve.alias || {}
  config.resolve.alias.vue$ = 'vue/dist/vue.js'

  config.module.rules.forEach(
    rule => {
      if (rule.test.toString() === '/\\.vue$/') {
        rule.options.cssModules = rule.options.cssModules || {}
        rule.options.cssModules.localIdentName = '[local]'
      }
    }
  )

  config.module.rules.push({
    test: /\.sass$/,
    use: ['style-loader', 'css-loader', 'sass-loader?indentedSyntax']
  })

  return config
}
