let fun = function (x, y) {
    return x + y
}

let obj = {}
console.log(fun.call(obj, 10, 20))