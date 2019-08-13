const devConfig = require('./config/webpack.dev'); // 引入dev环境配置
const prodConfig = require('./config/webpack.prod'); // 引入prod环境配置

const isProd = process.env.NODE_ENV === 'production'; // 判断是否是prod环境
const current = isProd ? prodConfig : devConfig;

module.exports = current;