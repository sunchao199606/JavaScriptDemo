// 原型

function Person(name, age) {
    this.name = name;
    this.age = age;
}

// 定义被继承的方法

Person.prototype.getName = function () {
    return name;
}

Person.prototype.father = "James";

let person = new Person("sunchao", 24)
console.log(person)
console.log(Person.prototype);

// let p1 = new Person("James jr", 14);
// p1.father = void 0;
// console.log(p1.father);
// console.log(p1);
// p1.nation = "USA";
// p1.name = "Lebron";
//
// console.log(p1);;
//
// let p2 = { name: "Curry", age: 30 };
