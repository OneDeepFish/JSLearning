// 1.导入属性
import {flag, name, age} from './aaa.js'
console.log(name);

// 2.导入属性
import {height} from './aaa.js'
console.log('我是小明，身高是:'+height);

// 3.接收默认的default导出,可以自己起别名了，默认对应的是aaa.js的mul
import cheng from './aaa.js'
cheng(10, 20);

// 4.接收所有的导出信息
import * as info from './aaa.js'
console.log('我的年龄是:'+info.age)

// 5.接收函数和类
import {sum, Person} from './aaa.js'
console.log('两数之和是:'+sum(10, 20));
const person = new Person();
person.run();