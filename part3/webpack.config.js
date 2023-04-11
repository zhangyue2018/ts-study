const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// webpack所有配置信息都应该卸载module.exports中
module.exports = {
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, 'dist'),
        // 打包后的文件
        filename: "bundles.js"
    },
    // 指定webpack打包时要使用的模块(如何打包)
    module: {
        // 指定要加载的规则
        rules: [
            {
                // 指定规则生效的文件
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_module/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            // title: '这是一个自定义的title',
            template: './src/index.html'
        })
    ],
    resolve: {
        extensions: ['.js', '.ts']
    },
    // mode: "development"
    mode: "production"
}