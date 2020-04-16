
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'real-name-pc': './src/index.js',
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
          test: /[\\/]node_modules[\\/]/,
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
    })
  ],
  resolve: {
    extensions: ['.js'],
    alias: {
      src: path.resolve(__dirname, './src'),
      components: path.resolve(__dirname, './src/components'),
      views: path.resolve(__dirname, './src/views')
    },
    mainFields: ['main'],
    // 在模块中添加 src, 当导入文件时，可以将 src 作为相关路径
    modules: ['src', 'node_modules']
  },
  
  devServer: {
    port: 3000,
    hot: true,
    contentBase: './dist',
    disableHostCheck: true
  },
  devtool: 'inline-source-map'
}