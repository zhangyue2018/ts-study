System.register("hello/hello", [], function (exports_1, context_1) {
    "use strict";
    var b;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            console.log('---aaaaa----');
            b = 20;
            exports_1("b", b);
        }
    };
});
System.register("app", ["hello/hello"], function (exports_2, context_2) {
    "use strict";
    var hello_1, a;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (hello_1_1) {
                hello_1 = hello_1_1;
            }
        ],
        execute: function () {
            console.log('hello');
            console.log('how are you');
            console.log('i am fine');
            a = 10;
            console.log(hello_1.b);
        }
    };
});
console.log('haha~~~');
console.log('heihei');
