// object表示一个js对象
let a: object; // 一般不这样使用
a = {};
a = function() {};

// {} 用来指定对象中可以包含哪些属性
// 语法：{属性名: 属性值, 属性名: 属性值}
// 在属性名后边加上?， 表示属性是可选的
let b: {name: string, age?: number};
b = {name: 'zz'}
b = {name: 'zz', age: 18}

// [propName: string]: any 表示任意类型的属性
let c: {name: string, [propName: string]: any}
c = {name: 'zz', age: 18, gender: 'female'}
c = {name: 'zz', 10: 'hello'}

/**
 * 设置函数结构的类型声明
 * 语法：
 * (形参: 类型，形参: 类型 ...) => 返回值
 */
// let d: (a: number, b: number) => number
let d: (a: number, b: number) => number
d = function(a: number, b: number): number {
    return a+b
}

/**
 * 数组的类型声明：
 *  类型[]
 *  Array<类型>
 */
// string[] 表示字符串数组
let e: string[];
e = ['a', 'b'];
// number[] 表示数值类型的数组
let f: number[];
f = [1,2,3]

// 数组类型的另外一种写法
let g: Array<number>;
g = [1, 2, 3]

/**
 * 元组：固定长度的数组
 * 语法：[类型, 类型, 类型]
 */
let h: [string, string]
h = ['hello', 'world']

/**
 * enum 枚举
 */

enum Gender {
    male = 0,
    female = 1
};

let i: {name: string, gender: Gender}

i = {
    name: 'zz',
    gender: Gender.male
}

console.log(i.gender === Gender.male);

// & 表示同时
let j: {name: string} & {age: number}
j = {
    name: 'zz',
    age: 20
}

// 类型别名
type strType = string;
let k: strType;
k = 'hello';

type myType = 1 | 2 | 3 | 4 | 5;
let l: myType;
l = 1;
l = 2;
l = 3;
l = 4;
l = 5;

