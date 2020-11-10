// 只有两个参数，第二个参数为数组
let add = function (a, b) {
    console.log(this)
    return a + b
}
add(10, 20)
let obj = {
    name: "AAA"
}
add.apply(obj, [10, 20])