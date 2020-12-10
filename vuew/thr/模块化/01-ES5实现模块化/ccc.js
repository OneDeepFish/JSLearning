// 想在这个js里面使用aaa.js里面定义的函数，需要使用匿名函数

;(function(){
	var result = moduleA.sum(24,33);
	console.log('ccc:'+result);
})()


// CommonJs的导入
// let {flag, sum} =require(./aaa.js);