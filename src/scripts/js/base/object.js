// object 方法测试

// 1 defineProperty方法 用于给某个obj添加属性
console.log("####################################");
(function () {
    var fun = function (obj) {
        Object.defineProperty(obj, "prop", {value: 21});
        obj.prop2 = obj.metadata = void 0;
        console.log(obj)
    };
    fun(new Object());
    console.log(Object.prototype);
    console.log(typeof (Object.prototype));

    const obj1 = {
        name: 'JeremyLin'
    };
    Object.defineProperty(obj1, 'age', {
        configurable: true | false,
        enumerable: true | false,
        value: 32,
        writable: false
    });
    obj1.age = 30;
    console.log(obj1);
})();
console.log("####################################");
// 2 freeze 冻结对象使对象不可改变
(function () {
    const obj2 = {name: "Jordan"};
    Object.freeze(obj2);
    obj2.name = "Pippin";
    console.log(obj2)
})();
console.log("####################################");

//3 Object.assign方法
(function () {
    let dialogForm = {
        userName: "",
        name: "",
        password: "",
        roleNames: [],
        checkedRoleNames: [],
        telephone: "",
        email: ""
    }
    const target = Object.assign({}, dialogForm, {roleNames: ["aa"]})
    console.log(target)
})();

