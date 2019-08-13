/// webpack.dev.config
const
    commonConfig = require('./webpack.common'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    merge = require('webpack-merge'),
    path = require('path'),
    webpack = require('webpack');

function resolve(...dir) {
    return path.join(__dirname, '..', ...dir);
}

const devConfig = merge(commonConfig, {
    mode: 'development',
    devServer: {
        contentBase: resolve('dist'), // 静态文件地址
        compress: true, // gzip压缩
        host: 'localhost',
        hot: true, // 是否热更新
        open: false, // 自动打开浏览器
        // progress: true, // 内存中打包的时候将度打印在控制台(很傻)
        port: 3000, // 端口号
    },
    devtool: 'cheap-eval-source-map', // 使用调试工具(cheap-eval最节省资源以提升构建效能)
    output: {
        // 输出配置
        filename: '[name].[hash:8].js', // main.f2190acd.js
        path: resolve('dist'), // 必须使用绝对路径
    },
    plugins: [
        new HtmlWebpackPlugin({ // 加载html插件
            favicon: resolve('public/favicon.ico'), // 图标路径
            filename: 'index.html', // 输出文件名
            template: resolve('public/index.html'), // 模版路径
            title: 'development', // html标题
        }),
        new webpack.HotModuleReplacementPlugin(), // 热更新插件
        new webpack.NamedChunksPlugin(), // 显示修改文件的名字 
    ]
});

module.exports = devConfig;
