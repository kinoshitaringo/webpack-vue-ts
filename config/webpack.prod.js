/// webpack.prod.config
const
    commonConfig = require('./webpack.common'),
    merge = require('webpack-merge'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    package = require('../package'),
    path = require('path');

function resolve(...dir) {
    return path.join(__dirname, '..', ...dir);
}

const prodConfig = merge(commonConfig, {
    mode: 'production',
    output: {
        // 输出配置
        filename: '[name].[chunkhash:8].js',
        path: resolve('dist'), // 必须使用绝对路径
    },
    plugins: [
        new HtmlWebpackPlugin({ // 加载html插件
            favicon: resolve('public/favicon.ico'), // 图标路径
            filename: 'index.html', // 输出文件名
            minify: { // 压缩html文件
                collapseWhitespace: true, // 压缩空行
                removeComments: true, // 却除comment
                removeAttributeQuotes: true, // 去除属性逗号
                removeRedundantAttributes: true, // 去除多余的属性
                removeScriptTypeAttributes: true, // 去除script type
                removeStyleLinkTypeAttributes: true, // 去除stylelink的type属性
                useShortDoctype: true, // 使用短的属性
            },
            template: resolve('public/index.html'), // 模版路径
            title: package.name, // html title
        }),
    ]
});

module.exports = prodConfig;
