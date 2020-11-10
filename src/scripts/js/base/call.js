// call方法将函数中的this绑定到第一个参数中，并返回函数执行的返回值,变长参数
let fun = function (x, y) {
    console.log(this)
    return x + y
}
console.log(fun(10, 20))

let obj = {
    name: "AAAA"
}

console.log(fun.call(obj, 10, 20))