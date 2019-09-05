var fun = function (obj) {

    Object.defineProperty(obj, "prop", { value: 21 });

    obj.prop2 = obj.metadata = void 0;

    console.log(obj)
}

fun(new Object());

console.log(Object.prototype);


console.log(typeof (Object.prototype))
const obj1 = {
    name: 'JeremyLin'
}
Object.defineProperty(obj1, 'age', {
    configurable: true | false,
    enumerable: true | false,
    value: 32,
    writable: false
});

obj1.age = 30;

console.log(obj1)
