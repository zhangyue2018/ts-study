import {hi} from './m1';

function foo(a: number, b: number): number {
    return a + b;
}

let a: number = foo(11, 22);
const obj = {name: '孙悟空', age: 500};

// console.log(Promise.resolve(66))

class Person {
    /**
     * TS可以在属性前添加属性修饰符
     * public 修饰的属性可以在任意位置访问（修改） --默认值
     * private 私有属性，私有属性只能在类内部进行访问（修改）
     *      --通过在类内部添加方法是的私有属性可以被外部访问
     */
    public name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    get name1() {
        return this.name;
    }

    set name1(value) {
        this.name = value;
    }

    get age1() {
        return this.age;
    }

    set age1(value) {
        this.age = value;
    }

    // getName() {
    //     return this.name;
    // }

    // setName(value: string) {
    //     this.name = value;
    // }

    // getAge() {
    //     return this.age
    // }

    // setAge(value: number) {
    //     if(value > 0 ) this.age = value;
    // }

}

let per = new Person('zz', 19);
per.name1 = 'yy';
per.age1 = 28;

console.log(per);

class A {
    protected num: number;
    constructor(num: number) {
        this.num = num;
    }
}

class B extends A {
    test() {
        console.log(this.num);
    }
}

const b = new B(123);
// console.log(b.num); // 有错误提示


// 属性简写形式
class C {
    // 1 创建出的对象会有name和age属性
    constructor(public name: string, public age: number) {
        this.name = name + 'hh';
        this.age = age * 2;
    }

    // 2 构造出的对象会自动有name，age属性
    // constructor(public name: string, public age: number) {}
}

let c = new C('zy', 20);
console.log('----cc-----', c)