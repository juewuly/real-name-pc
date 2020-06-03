
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack4QCDNPlugin = require('@q/webpack4-qcdn-plugin');

const getCdnPlugin = () => {
  return new Webpack4QCDNPlugin({
    // qcdn 配置，详见 http://qnpm.qiwoo.org/package/@q/qcdn
    qcdnOption: {
      https: true
    },

    // 文件上传并发数量
    concurrency: 5,

    // 上传出错后允许重试的次数
    maxRetryCount: 5,

    // 缓存文件地址，默认为  `${process.cwd()}/node_modules/.cache/qcdn_cache.json`
    // 如果传 `false` 则不使用缓存
    cachePath: 'node_modules/.cache/qcdn_cache.json',

    // 是否在本地保留 webpack 生成的文件
    keepLocalFiles: true,
    // 是否在本地保留 webpack 生成的 sourcemap
    keepSourcemaps: true,
    // 是否在本地备份 url 替换前的 HTML文件
    backupHTMLFiles: true,

    async preUpload ({ file, content, hash, extname }) {
      // C. 只有明确返回 true 才会进行下一步 qcdn 上传!!!
      return true
    },

    // 只有 preUpload 返回 true 才会执行到这里
    async postUpload (url) {
      // 注意 url 可能为 undefined （qcdn 上传失败）
      if (!url) {
        return false
      }

      // C. 使用 url
      return url
    },
  });
}

const cdnPlugin = getCdnPlugin();

module.exports = {
  entry: {
    'real-name-pc': ['@babel/polyfill', './src/index.js'],
    'real-name-pc.min': ['@babel/polyfill', './src/index.js']
  },
  output: {
    path: path.join(__dirname, 'cdn'),
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
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'test/index.html'),
      filename: 'index.html',
      chunks: ['real-name-pc'],
      inject: true
    }),
    cdnPlugin
  ],
  resolve: {
    extensions: ['.js'],
    alias: {
      src: path.resolve(__dirname, './src'),
      utils: path.resolve(__dirname, './src/utils'),
      sdk: path.resolve(__dirname, './src/sdk'),
      components: path.resolve(__dirname, './src/components'),
      request: path.resolve(__dirname, './src/request'),
    },
    mainFields: ['main'],
    // 在模块中添加 src, 当导入文件时，可以将 src 作为相关路径
    modules: ['src', 'node_modules']
  },
}