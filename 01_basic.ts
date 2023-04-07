// 可以直接使用字面量进行类型声明
let a: 10;
a = 10;

// 可以使用 | 来连接多个类型（联合类型）
let b: 'male' | 'female';
b = 'male';
b = 'female';

let c: string | boolean;
c = 'hello';
c = true;

// any 表示任意类型， 一个变量设置类型为any后，相当于对该变量关闭了TS的类型检测
let d: any;
d = 10;
d = 'hello';
d = true;

// 声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any（隐式的any）
let e;
e = 10;
// e = 'hello';
// e = true;

// 这种声明后直接复制的情况， TS解析器会将变量类型设置成初始复制的类型
let f = 10;

// unknown 表示未知类型的值
let g: unknown;
g = 10;
g = true;
g = 'hello';

/**
 * any和unknown的区别
 * d是any类型，它可以赋值给任意变量
 * 
 * g是unknown类型，不能直接赋值给其他变量
 */

// let s: string;
// s = d;
// s = g;

// 类型断言：可以用来告诉解析器变量的实际类型
/**
 * 语法：
 * 变量 as 类型
 * <类型> 变量
 */
// 上面的赋值用类型断言可以写成
let s: string;
s = g as string;
s = <string>g;

// void用来表示空，以函数为例void就表示没有返回值的函数（或者返回值是undefined）
function fn():void {}

// never 表示永远不会返回结果
function foo(): never { throw new Error('报错了!') }