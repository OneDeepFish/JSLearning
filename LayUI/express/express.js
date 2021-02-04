// 1.引入express
const express = require('express')
var bodyParser = require('body-parser');

// 2.创建应用对象
const app = express()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 3.创建路由规则,接收所有请求
app.all("/index", (request, response) => {
	// 服务端设置响应头，允许跨域
	response.setHeader("Access-Control-Allow-Origin", "*")
	response.setHeader('Access-Control-Allow-Headers', '*')
	// send方法只能发送字符串，所以data对象转为字符串
	response.send(JSON.stringify(data))
})

// 3.增加数据的路由
app.post("/post/addData.action", (request, response) => {
	// 服务端设置响应头，允许跨域
	response.setHeader("Access-Control-Allow-Origin", "*")
	response.setHeader('Access-Control-Allow-Headers', '*')
	
	// 获取请求的数据
	let newData = request.body
  // 在原数据的最前面添加新数据
	data.data.unshift(newData)
	// 给浏览器返回数据，只能返回字符串
	response.send(JSON.stringify(data))


})


// 4.启动服务
app.listen('8000', () => {
	console.log('8000端口准备就绪......')
})





let data = {
	"code": 0,
	"msg": "",
	"count": 102,
	"data": [{
		"id": "10001",
		"username": "杜甫",
		"email": "xianxin@layui.com",
		"sex": "男",
		"city": "浙江杭州"
	}, {
		"id": "10002",
		"username": "李白",
		"email": "xianxin@layui.com",
		"sex": "男",
		"city": "浙江杭州",
		"LAY_CHECKED": true
	}, {
		"id": "10003",
		"username": "王勃",
		"email": "xianxin@layui.com",
		"sex": "男",
		"city": "浙江杭州"
	}, {
		"id": "10004",
		"username": "李清照",
		"email": "xianxin@layui.com",
		"sex": "女",
		"city": "浙江杭州"
	}, {
		"id": "10005",
		"username": "冰心",
		"email": "xianxin@layui.com",
		"sex": "女",
		"city": "浙江杭州"
	}, {
		"id": "10006",
		"username": "贤心",
		"email": "xianxin@layui.com",
		"sex": "男",
		"city": "浙江杭州"
	}, {
		"id": "10007",
		"username": "贤心",
		"email": "xianxin@layui.com",
		"sex": "男",
		"city": "浙江杭州"
	}, {
		"id": "10008",
		"username": "贤心",
		"email": "xianxin@layui.com",
		"sex": "男",
		"city": "浙江杭州"
	}, {
		"id": "10008",
		"username": "贤心",
		"email": "xianxin@layui.com",
		"sex": "男",
		"city": "浙江杭州"
	}, {
		"id": "10008",
		"username": "贤心",
		"email": "xianxin@layui.com",
		"sex": "男",
		"city": "浙江杭州"
	}, {
		"id": "10008",
		"username": "贤心",
		"email": "xianxin@layui.com",
		"sex": "男",
		"city": "浙江杭州"
	}, {
		"id": "10008",
		"username": "贤心",
		"email": "xianxin@layui.com",
		"sex": "男",
		"city": "浙江杭州"
	}]
}
