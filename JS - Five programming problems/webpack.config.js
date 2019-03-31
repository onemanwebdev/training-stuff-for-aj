var Path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
//var CleanWebpackPlugin = require('clean-webpack-plugin');
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: Path.resolve(__dirname, 'dist'),
        filename: './index.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: /src/,
                use: 'babel-loader'
            },
            {
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/i,
                use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 8000,
                            name: 'images/[name].[ext]'
                        }
                    }]
            },
            {
                test: /\.woff2?$/,
                use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 8000,
                            name: 'fonts/[name].[ext]'
                        }
                    }]
            }
        ]
    },
    devServer: {
        contentBase: Path.join(__dirname, 'dist'),
        compress: true,
        open: true,
        stats: "errors-only"
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'style.css'}),
        new HtmlWebpackPlugin({
            hash: true,
            minify: {
                collapseWhitespace: true
            },
            template: "./src/index.html"
        }),
        //new CleanWebpackPlugin(['dist']),
        new WebpackNotifierPlugin({ title: "PTL" })
    ]
}
