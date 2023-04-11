import {hi} from './m1';

function foo(a: number, b: number): number {
    return a + b;
}

let a: number = foo(11, 22);
const obj = {name: '孙悟空', age: 500};
console.log(obj);
console.log(a);
console.log('hi----', hi);

// console.log(Promise.resolve(66))