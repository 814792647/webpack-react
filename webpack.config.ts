const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // production development
  entry: {
    app: './src/App.tsx'
  },
  // devtool: "source-map",
  devServer: {
    contentBase: './public',
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
        test: /\.(s[ac]ss|css)$/i,
        use: [{
          loader: "style-loader"
        }, {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[local]',
            },
          }
        }, {
          loader: "sass-loader"
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
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
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