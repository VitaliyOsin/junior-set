const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './index.js',
        analytics: './analytics.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'Webpack',
            template: './index.html'
        }),
        new CleanWebpackPlugin()
    ],
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpeg|jpg|svg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[contenthash].[ext]',
                        outputPath: 'images',
                        esModule: false
                    }
                }
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[contenthash].[ext]',
                        outputPath: 'fonts',
                        esModule: false    
                    }
                }
            },
            {
                test: /\.xml$/,
                use: ['xml-loader']
            }
        ]
    }
}