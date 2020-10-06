const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // production development
  // 入口
  entry: {
    app: './src/App.tsx'
  },
  // devtool: "source-map", // 启用源映射
  // 开发服务器相关配置
  devServer: {
    contentBase: './public', // 开发服务器内容的基本路径
    historyApiFallback:true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // 将 JS 字符串生成为 style 节点
        }, {
          loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
        }, {
          loader: "sass-loader" // 将 Sass 编译成 CSS
        }]
      },
      {
        test: /\.(png|jpe?g)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          esModule: false,
          limit: 10000
        }
      },
    ],
  },
  // 解析扩展，添加了这个东西。我们就可以直接 import { a } from 'index'; 了，而不用必须 import { a } from 'index.ts' 这样输入了，因为 webpack 会自动帮我们搜索查询并添加
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  // 输出
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins:[
    new HtmlWebpackPlugin({
        title:'React',
        filename: 'index.html',
        template:'./public/index.html',
        chunks:['component']
    })
]
};