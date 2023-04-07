// object表示一个js对象
var a; // 一般不这样使用
a = {};
a = function () { };
// {} 用来指定对象中可以包含哪些属性
// 语法：{属性名: 属性值, 属性名: 属性值}
// 在属性名后边加上?， 表示属性是可选的
var b;
b = { name: 'zz' };
b = { name: 'zz', age: 18 };
// [propName: string]: any 表示任意类型的属性
var c;
c = { name: 'zz', age: 18, gender: 'female' };
c = { name: 'zz', 10: 'hello' };
/**
 * 设置函数结构的类型声明
 * 语法：
 * (形参: 类型，形参: 类型 ...) => 返回值
 */
// let d: (a: number, b: number) => number
var d;
d = function (a, b) {
    return a + b;
};
/**
 * 数组的类型声明：
 *  类型[]
 *  Array<类型>
 */
// string[] 表示字符串数组
var e;
e = ['a', 'b'];
// number[] 表示数值类型的数组
var f;
f = [1, 2, 3];
// 数组类型的另外一种写法
var g;
g = [1, 2, 3];
/**
 * 元组：固定长度的数组
 * 语法：[类型, 类型, 类型]
 */
var h;
h = ['hello', 'world'];
/**
 * enum 枚举
 */
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
})(Gender || (Gender = {}));
;
var i;
i = {
    name: 'zz',
    gender: Gender.male
};
console.log(i.gender === Gender.male);
