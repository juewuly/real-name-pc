
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');


module.exports = {
  entry: {
    'real-name-pc': ['@babel/polyfill', './src/index.js'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    library: 'RealNamePc',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            cacheDirectory: true,
            sourceMaps: 'inline'
          }
        }
      },
      {
        test: /\.(css|less)$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|jpeg|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /(react|react-dom|redux|immutable)/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, `test/index.html`),
      filename: 'index.html',
      chunks: ['vendors', 'real-name-pc'],
      inject: false
    }),
    // new HtmlWebpackExternalsPlugin({
    //   externals: [
    //     {
    //       module: 'react',
    //       entry: 'https://unpkg.com/react@16/umd/react.production.min.js',
    //       global: 'React',
    //     },
    //     {
    //       module: 'react-dom',
    //       entry: 'https://unpkg.com/react-dom@16/umd/react-dom.production.min.js',
    //       global: 'ReactDOM',
    //     },
    //     {
    //       module: 'redux',
    //       entry: 'https://unpkg.com/redux@4.0.5/dist/redux.min.js',
    //       global: 'Redux'
    //     },
    //     {
    //       module: 'immutable',
    //       entry: 'https://unpkg.com/immutable@4.0.0-rc.12/dist/immutable.min.js',
    //       global: 'Immutable'
    //     }
    //   ]
    // })
  ],
  resolve: {
    extensions: ['.js'],
    alias: {
      components: path.resolve(__dirname, './src/components'),
      request: path.resolve(__dirname, './src/request'),
      src: path.resolve(__dirname, './src'),
      utils: path.resolve(__dirname, './src/utils'),
      views: path.resolve(__dirname, './src/views'),
    },
    mainFields: ['main'],
    // 在模块中添加 src, 当导入文件时，可以将 src 作为相关路径
    modules: ['src', 'node_modules']
  },
  
  devServer: {
    port: 3000,
    hot: true,
    contentBase: './dist',
    disableHostCheck: true,
    proxy: {
      '/user/open_check_auth': {
        target: 'https://mpay.mgame.360.cn',
        changeOrigin: true,
        secure: false,
        logLevel: 'debug',
        headers: {
          referer: 'https://pay.wan.360.cn/',
          origin: 'https://pay.wan.360.cn/'
        }
      },
      '/user/open_auth': {
        target: 'https://mpay.mgame.360.cn',
        changeOrigin: true,
        secure: false,
        logLevel: 'debug',
        headers: {
          referer: 'https://pay.wan.360.cn/',
          origin: 'https://pay.wan.360.cn/'
        }
      },
      '/api/order/check': {
        target: 'https://h5.wan.360.cn',
        changeOrigin: true,
        secure: false,
        logLevel: 'debug',
        headers: {
          referer: 'https://h5.wan.360.cn/',
          origin: 'https://h5.wan.360.cn/'
        }
      }
    }
  },
  devtool: 'inline-source-map'
}