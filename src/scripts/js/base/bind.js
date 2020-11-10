// bind函数用来将函数体里面的this指向绑定到某个对象中
let add = function (a, b) {
    console.log(this)
    return a + b
}
// 绑定之前this指向全局对象
add(10, 20)
let obj = {
    name: "dad"
}
let fun = add.bind(obj)
// 绑定后this指向所绑定的对象
fun(10, 20)