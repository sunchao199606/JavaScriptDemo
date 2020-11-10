// bind函数用来将函数体里面的this指向绑定到某个对象中
let add = function (a, b) {
    console.log(this)
    return a + b
}
add(10, 20)
let obj = {
    name: "dad"
}
let fun = add.bind(obj)
fun(10, 20)