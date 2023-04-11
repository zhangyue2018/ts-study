const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// webpack所有配置信息都应该卸载module.exports中
module.exports = {
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, 'dist'),
        // 打包后的文件
        filename: "bundles.js",
        // 告诉webpack，打包时不用箭头函数
        // 这样经webpack打包后的代码，在最外层不是由箭头函数包裹，而是由一个普通函数包裹
        environment: {
            arrowFunction: false
        }
    },
    // 指定webpack打包时要使用的模块(如何打包)
    module: {
        // 指定要加载的规则
        rules: [
            {
                // test指定的是规则生效的文件
                test: /\.ts$/,
                // 要使用的loader
                use: [
                    // 配置babel
                    {
                        // 指定加载器
                        loader: 'babel-loader',
                        // 设置babel
                        options: {
                            // 设置预定义的环境
                            presets: [
                                [
                                    // 指定环境的插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 要兼容的目标浏览器
                                        targets: {
                                            "chrome": "88",
                                            "ie": "11"
                                        },
                                        // 指定corejs的版本
                                        "corejs": "3",
                                        // 使用corejs的方式  "usage" 表示按需加载
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],
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