// 箭头函数的this
let name = 'nameeee';
function origin(arg1, callback) {
    this.arg2 = 2222;
    callback(arg1, arg2);
}
var agr2 = "sasss";
origin(11111, () => {
    console.log(this);
    console.log(this.agr2);
});

// setTimeOut
function Timer() {
    this.s1 = 0;
    this.s2 = 0;
    // 箭头函数
    setInterval(() => this.s1++, 1000);
    // 普通函数
    setInterval(function () {
        this.s2++;
    }, 1000);
}

var timer = new Timer();

setTimeout(() => console.log('s1: ', timer.s1), 3100);
setTimeout(() => console.log('s2: ', timer.s2), 3100);

// DOM 事件的回调函数封装在一个对象里面
var handler = {
    id: '123456',

    init: function () {
        document.addEventListener('click',
            event => this.doSomething(event.type), false);
    },

    doSomething: function (type) {
        console.log('Handling ' + type + ' for ' + this.id);
    }
};

// 将一个对象作为call和apply的第一个参数，this会被绑定到这个对象。
var obj = { a: 'Custom' };

// 这个属性是在global对象定义的。
var a = 'Global';

function whatsThis(arg) {
    return this.a;  // this的值取决于函数的调用方式
}

console.log(whatsThis());          // 'Global'
console.log(whatsThis.call(obj));  // 'Custom'
console.log(whatsThis.apply(obj)); // 'Custom'