const path              = require('path'),
      webpack           = require('webpack'),
      autoprefixer      = require('autoprefixer'),
      ExtractTextPlugin = require('extract-text-webpack-plugin');

const postCSSLoader = {
    loader: "postcss-loader",
    options: {
      plugins: () => [
          autoprefixer({
            browsers: ["Android 4.1", "iOS 7.1", "Chrome > 31", "ff > 31", "ie >= 8"]
          })
      ]
    }
};

const LoaderOptionsPlu  = new webpack.LoaderOptionsPlugin({
  options: {
    postcss: [
      autoprefixer({ remove: false, browsers: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ie >= 9', '> 1% in CN'] })
    ],
    vue: {
      loaders: {
        js: {
          loader: 'babel-loader',
          options: {
            "presets": [ "es2015", "stage-0" ],
            "plugins": [
              ["component", [
                {
                  "libraryName": "mint-ui",
                  "style": true
                }]
              ]
            ]
          }
        },
        css: ExtractTextPlugin.extract({
          fallback: 'vue-style-loader',
          use: [ "css-loader" ]
        }),
        less: ExtractTextPlugin.extract({
          fallback: 'vue-style-loader',
          use: [ "css-loader", "less-loader" ]
        })
      },
    }
  }
});

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/index.js'),
    vendor: [
      'vue',
      'vue-router',
      'mint-ui',
      'axios'
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name].[hash:6].js',
    chunkFilename: '[id].[chunkhash].js'
  },
  externals: {
    // vue: "Vue",
    // // vuex: "Vuex",
    // "vue-router": "VueRouter"
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [path.resolve(__dirname, '../src')],
        options: {
          fix: true
        }
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          "presets": [ ["es2015", {"modules": false}], "stage-0" ],
          "plugins": [
              ["component", [
                {
                  "libraryName": "mint-ui",
                  "style": true
                }]
              ]
            ]
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [ "css-loader", postCSSLoader ]
        })
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [ "css-loader", postCSSLoader, "less-loader" ]
        })
      },
      {
        test: /\.(eot|ttf|woff|woff2|svg)(\?\S*)?$/,
        loader: "url-loader",
        options: { name: "fonts/[name].[ext]" }
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: "url-loader",
        options: { name: "images/[name].[ext]", limit: 1000 }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ filename: "[name].[hash:6].css", allChunks: true }),
    LoaderOptionsPlu,
    new webpack.ProvidePlugin({
      $http: path.resolve(__dirname, '../src/utils/http'),
      $param: path.resolve(__dirname, '../src/utils/param')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['common', 'vendor'],
      // filename: 'js/[name].js',
      miniChunks: 2
    }),
    new webpack.DefinePlugin({
      __DEV__: process.env.NODE_ENV.trim() === 'development',
      __PROD__: process.env.NODE_ENV.trim() === 'production'
    })
  ],
  resolve: {
    modules: [ path.resolve(__dirname, "src"), "node_modules" ],
    extensions: [ '.js', '.vue' ],
    alias: {
      '@components': path.join(process.cwd(), 'src/components'),
      '@pages': path.join(process.cwd(), 'src/pages'),
      '@utils': path.join(process.cwd(), 'src/utils'),
      '@assets': path.join(process.cwd(), 'src/assets'),

      //webConfig
      '@webConfig': path.join(process.cwd(), 'src/webConfig.js'),
    }
  }
}