var fun = function (obj) {

    Object.defineProperty(obj, "prop", { value: 21 });

    obj.prop2 = obj.metadata = void 0;

    console.log(obj)
}

fun(new Object());

console.log(Object.prototype);


console.log(typeof (Object.prototype))
