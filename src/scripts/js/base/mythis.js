// 类的函数里面的this指向函数的调用对象
class Person {
    constructor(name = 'default') {
        console.log(arguments[0]);
        this.name = name;
    }
    // 普通函数
    getName() {
        return this.name;
    }
}
let p1 = new Person('1111');
console.log(p1.getName());

// 最外层函数里面的this指向全局对象
(function fun() {
    console.log(this)
})()

// 对象内的this
const obj = {
    name: 'Jokic',
    // 箭头函数中的this
    arrowFun: () => {
        return console.log(this)
    },
    getName() {
        return this.name;
    }
}
console.log(obj)
console.log(obj.getName())
console.log(obj.arrowFun())