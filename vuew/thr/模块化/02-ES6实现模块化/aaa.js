let name = '夏明'
let age = 22
let flag = true

if(flag){
	console.log('我是夏明');
}

function sum(num1, num2){
	console.log(num1 + num2);
}


class Person{
	run(){
		console.log("夏明在跑步")
	}
}

// 1.导出属性
export {name, age, flag}

// 2.直接导出属性
export let height = 1.88;

// 3.利用default导出，一个js中只能有一个default
export default function mul(num1, num2){
	console.log(num1 * num2);
}


// 4.导出函数和类
export {sum, Person} 
