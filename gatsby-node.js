/* eslint-disable prefer-import/prefer-import-over-require */

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const SvgStorePlugin = require('external-svg-sprite-loader')

module.exports.onCreateWebpackConfig = ({ actions, getConfig, stage }) => {
  let config = getConfig()

  // Name for non-entry chunk files. E.g. dynamic imports
  config.output.chunkFilename = '[name].[chunkhash].js'

  // Fix Gatsby setting `resolve.modules` to `path.resolve(__dirname, "node_modules")`
  // which causes module resolution errors when the npm tree is deduped
  // See both https://github.com/webpack/webpack/issues/6538#issuecomment-367324775 and
  // https://github.com/gatsbyjs/gatsby/blob/a0cbbcb5519e53d2358a06be2c1a6ca0688280b7/packages/gatsby/src/utils/webpack.config.js#L363
  // Furthermore, we add the `src` folder so that we can import internal modules without having to use relative paths
  config.resolve.modules = ['node_modules', path.join(__dirname, 'src')]

  // Some of our dependencies have `browser` field in their package.json that should be interpreted as aliases
  config.resolve.aliasFields = ['browser']

  // Shrink CSS module class names in production
  if (stage === 'build-css' || stage === 'build-javascript' || stage === 'build-html') {
    const oneOfConfig = (config.module.rules.find((rule) => Boolean(rule.oneOf))).oneOf
    const cssLoaders = (oneOfConfig.find((rule) => rule.test.test('.module.css'))).use
    const cssLoader = cssLoaders.find((loader) => loader.loader.includes('css-loader'))
    cssLoader.options = {
      ...cssLoader.options,
      localIdentName: '[hash:base64:10]'
    }
  }

  // SVGs (standard + inline + external)
  {
    // Ensure that the Gatsby's default SVG handling doesn't mess with the following declarations
    const defaultImageLoader = config.module.rules.find((rule) => /\bsvg\b/.test(rule.test.toString()))
    defaultImageLoader.exclude = /\.svg$/

    config.module.rules.push({
      // Standard SVGs referenced by a URL
      test: /\.svg$/,
      exclude: [/\.sprite\.svg$/, /\.inline\.svg$/],
      use: [
        {
          loader: 'file-loader',
          options: {
            name: 'static/[name]-[hash].[ext]'
          }
        },
        {
          loader: require.resolve('svgo-loader'),
          options: {
            plugins: [
              { inlineStyles: { onlyMatchedOnce: false } },
              { removeAttrs: { attrs: 'class' } }
            ]
          }
        }
      ]
    })

    // Inline SVGs
    config.module.rules.push({
      test: /\.inline\.svg$/,
      use: [
        require.resolve('raw-loader'),
        {
          loader: 'svgo-loader',
          options: {
            plugins: [
              { removeDimensions: true },
              { cleanupIDs: false }
            ]
          }
        },
        // Uniquify classnames and ids so they don't conflict with eachother
        {
          loader: require.resolve('svg-css-modules-loader'),
          options: {
            transformId: true
          }
        }
      ]
    })

    // External SVGs - sprite for performance
    config.module.rules.push({
      test: /\.sprite\.svg$/,
      use: [
        {
          loader: require.resolve(SvgStorePlugin.loader),
          options: {
            name: 'static/svg-sprite.[hash].svg',
            svgoOptions: {
              plugins: [
                { removeViewBox: false },
                { removeDimensions: true },
                { inlineStyles: { onlyMatchedOnce: false } },
                { removeAttrs: { attrs: 'class' } }
              ]
            }
          }
        }
      ]
    })

    config.plugins.push(new SvgStorePlugin())
  }

  actions.replaceWebpackConfig(config)
}