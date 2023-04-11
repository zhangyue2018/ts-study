import {hi} from './m1';

function foo(a: number, b: number): number {
    return a + b;
}

let a: number = foo(11, 22);
console.log(a);
console.log('hi----', hi);