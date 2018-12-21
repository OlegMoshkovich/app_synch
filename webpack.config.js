const path = require('path');//to include the build in node module path -- and put it into the path variable
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: ['babel-polyfill','./src/js/index.js'],
  output:{
    path: path.resolve(__dirname,'dist'),
    filename:'js/bundle.js'
  },
  devServer:{
    contentBase:'./dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
       // filename:'index.html',
       template: './src/index.html'
    }) //function constructor -- which is the new class
  ],
  module :{
    rules:[
      {
        test: /\.js$/,
        exclude:/node_modules/,
        use:{
          loader: 'babel-loader'
        }
      }
    ]
  }


}
