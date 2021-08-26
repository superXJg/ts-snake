const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
    // 入口
    mode: 'development',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        environment: {
            arrowFunction: false,
            const: false
        }
    },
    devServer: {
        // contentBase: path.resolve(__dirname, './src/index.html')
    },
    // 打包的时候使用的模块
    module: {
        // 指定加载规则
        rules: [
            {
                // 规则生效的文件
                test: /\.ts$/,
                // 需要使用的loader
                use: [
                    // 配置babel
                    {
                        // 指定加载器
                        loader: 'babel-loader',
                        // 设置babel
                        options: {
                            // 设置环境
                            presets: [
                                [
                                    // 环境插件
                                    "@babel/preset-env",
                                    {
                                        targets: {
                                            "chrome": '58',
                                            "ie": '11'
                                        },
                                        // 指定版本
                                        "corejs": "3",
                                        // 按需加载
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],
                // 排除文件
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers: 'last 2 versions'
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader"
                ],
                exclude: /node_modules/
            }
        ]
        
    },
    // 用来设置引用模块
    resolve: {
        extensions: ['.ts', '.js', '.jsx']
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            // title: '自定义title'
            template: './src/index.html'
        })
    ],
    
}