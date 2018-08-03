const rewireSvgReactLoader = require('react-app-rewire-svg-react-loader');

module.exports = function override(config, env) {
  config = rewireSvgReactLoader(config, env);

  const rewireScss = require('react-app-rewire-scss')
  config = rewireScss(config, env)

  const path = require('path')
  // For import with absolute path
  config.resolve.modules = [path.resolve('src')].concat(config.resolve.modules)

  return config
}