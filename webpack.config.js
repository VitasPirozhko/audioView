const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //...
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    entry: './js/main.js',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.mp3$/,
                loader: 'file-loader'
            }
        ]
    }
};