
const glob = require('glob');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const setMPA = () => {
  const htmlWebpackPlugins = [];

  const entryFiles = glob.sync(path.join(__dirname, './test/*/index.html'));

  Object.keys(entryFiles)
  .map(index => {
    const entryFile = entryFiles[index];

    const match = entryFile.match(/test\/(.*)\/index\.html/);
    const pageName = match && match[1];
    htmlWebpackPlugins.push(
      new HtmlWebpackPlugin({
        template: path.join(__dirname, `test/${pageName}/index.html`),
        filename: `${pageName}.html`,
        chunks: ['real-name-pc'],
        inject: false
      }),
    );
  })

  return htmlWebpackPlugins;
}

const htmlWebpackPlugins = setMPA();


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
    // splitChunks: {
    //   cacheGroups: {
    //     vendor: {
    //       test: /(react|react-dom|redux)/,
    //       name: 'vendors',
    //       chunks: 'all'
    //     }
    //   }
    // }
  },
  plugins: htmlWebpackPlugins,
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
      },
      '/api/user/mg_fcm': {
        target: 'http://pay-demo.wan.360.cn',
        changeOrigin: true,
        secure: false,
        logLevel: 'debug',
        headers: {
          referer: 'https://pay.wan.360.cn/',
          origin: 'https://pay.wan.360.cn/'
        }
      }
    }
  },
  devtool: 'inline-source-map'
}