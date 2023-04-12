const hi: number = 100;

/**
 * 在定义函数或是类时，如果遇到类型不明确就可以使用泛型
 * 
 */

function foo<T>(a: T): T {
    return a;
}


// 可以直接调用具有泛型的函数
foo(22); // 不指定泛型，TS可以自动对类型进行推断
let a1 = foo<number>(33); // 指定泛型
let a2 = foo<string>('hello');

// 泛型可以同时指定多个
function fn2<T ,K>(a: T, b: K): T {
    console.log(b);
    return a;
}

fn2<string, number>('world', 44);


interface Inter {
    length: number;
}
// T extends Inter 表示泛型T必须是Inter实现类（子类）
function fn3<T extends Inter>(a: T): number {
    return a.length;
}

class MyClass<T> {
    name: T;
    constructor(name: T) {
        this.name = name;
    }
}

const mc = new MyClass<string>('zz');


export {hi};

