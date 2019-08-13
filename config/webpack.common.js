const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

function resolve(...dir) {
    return path.resolve(__dirname, '..', ...dir);
}

const commonConfig = {
    mode: 'none',
    entry: {
        main: resolve('src/main.ts'),
    },
    module: {
        rules: [
            {
                test: /\.(vue)$/,
                loader: 'vue-loader',
            },
            {
                test: /\.(tsx?)$/,
                exclude: /(node_modules)/,
                loader: 'ts-loader',
            },
            {
                test: /(plugins)/,
                exclude: /(node_moudles)/,
                loader: resolve('src/plugins', 'modularized-loader.js')
            },
            {
                test: /\.(less|css)$/,
                loader: 'vue-style-loader!css-loader!less-loader'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader?limit=8096',
            }
        ]
    },
    plugins: [ // 启用插件
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        // new TSLintPlugin({ files: ['./src/**/*.ts'] }),

    ],
    resolve: {
        alias: { // 设置路径别名
            '@': resolve('src'),
            '@assets': resolve('src/assets'),
            '@img': resolve('src', 'assets', 'img'),
            '@less': resolve('src', 'assets', 'less'),
        },
        // 处理的文件后缀
        extensions: ['.css', '.html', '.js', '.jsx', '.json', '.less', '.ts', '.tsx'],
    }
};

module.exports = commonConfig;
