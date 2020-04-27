
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  entry: {
    'real-name-pc': './src/index.js',
    'real-name-pc.min': './src/index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].js',
    library: 'RealNamePc',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /(\.min|vendors)\.js$/
      })
    ],
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
  module: {
    rules: [
      {
        test: /.js$/,
        include: path.resolve(__dirname, 'src'),
        use: 'babel-loader'
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
        test: /.(png|jpg|gif|jpeg|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]_[hash:8].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          },
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    // new BundleAnalyzerPlugin(),
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
      src: path.resolve(__dirname, './src'),
      components: path.resolve(__dirname, './src/components'),
      views: path.resolve(__dirname, './src/views'),
      utils: path.resolve(__dirname, './src/utils')
    },
    mainFields: ['main'],
    // 在模块中添加 src, 当导入文件时，可以将 src 作为相关路径
    modules: ['src', 'node_modules']
  },
}