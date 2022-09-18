const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: path.resolve(__dirname, './src/index.tsx'),
    },
    resolve: {
        extensions: ['.tsx', 'ts', '.js'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
            filename: 'index.html',
            template: 'src/template.html',
        }),
    ],
    output: {
        filename: '[name].[hash].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        //指定開啟port為9000
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /.ts$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/typescript', '@babel/preset-env'],
                    },
                },
            },
            {
                test: /.tsx$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};
