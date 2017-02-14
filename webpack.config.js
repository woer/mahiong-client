var path = require('path')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var customProperties = require("postcss-custom-properties")
module.exports = {
    watch: true,
    entry: {
        'pages/test': './source/pages/test/index.js'
    },
    output: {
        path: 'assets',
        filename: '[name]/index.js'
    },
    resolve: {
        extensions: ['.js', '.json'],
        modules: [
            resolve('src'),
            resolve('node_modules')
        ]
    },
    module: {
        rules: [{
            test: /\.css$/,
            loaders: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?-autoprefixer!postcss-loader'
                })
        }, {
            test: /\.js$/,
            loader: 'babel-loader'
        }]
    },
    plugins: [new ExtractTextPlugin("[name]/style/index.css")]
}
