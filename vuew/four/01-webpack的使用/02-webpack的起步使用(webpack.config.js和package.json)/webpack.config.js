const path = require('path')
module.exports = {
	// 打包的入口，可以是一个字符串、数组和对象。这里我们只有一个main.js文件
	entry: "./src/main.js",
	// 打包的出口，通常是一个对象，至少包含path和filename两个属性
	// dist表示dist文件夹
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	}
}