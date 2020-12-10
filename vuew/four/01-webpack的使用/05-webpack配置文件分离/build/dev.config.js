const {merge} = require('webpack-merge')  // webpack合并js的插件
const baseConfig = require('./base.config.js')
module.exports = merge(baseConfig, {
	devServer:{
		contentBase: './dist',  // 为哪一个文件夹提供服务
		inline: true            // 页面实时刷新
	}
})