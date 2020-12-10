// ；可有可无
var moduleA = (function(){
	
	var obj = {};
	
	
	var name = '小明';
	var age = 22;
	var flag = true;
	
	
	function sum(num1, num2) {
		return num1 + num2;
	}
	
	if (flag) {
		console.log('aaa:'+sum(40, 20));
	}
	obj.name = name;
	obj.sum = sum;
	return obj;
})()


// Commonjs的模块化导出，需要底层node.js的支撑
// export module = {
// 	flag: flag,
// 	sum: sum
// }

