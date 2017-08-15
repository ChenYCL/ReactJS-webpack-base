var webpack = require('webpack'); // 导入webpack
var path = require('path');

module.exports = {
    context: __dirname + '/src',
    entry:"./js/index.js",  //入口文件
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /(node_modules)/,  //忽略文件夹
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }]

    },
    output: {
        path: __dirname + "/src/",
        filename: "bundle.js"
    }

}