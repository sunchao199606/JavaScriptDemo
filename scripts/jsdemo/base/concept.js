// Immediately Invoked Function Expression
(function() {
    var variable1 = 2;
    var variable2 = {
        name: 'sunchao',
        age: 23
    }
})()

// closure
function f1() {
    var N = 0; // N是f1函数的局部变量

    function f2() // f2是f1函数的内部函数，是闭包
    {
        N += 1; // 内部函数f2中使用了外部函数f1中的变量N
        console.log(N);
    }
    return f2;
}
var result = f1();
result(); // 输出1
result(); // 输出2
result(); // 输出3

// 闭包定义私有变量
function Product() {
    var name;
    this.setName = function(value) {
        name = value;
    };
    this.getName = function() {
        return name;
    };
}
var p = new Product();
p.setName("Fundebug");
console.log(p.name); // 输出undefined
console.log(p.getName()); // 输出Fundebug

//  prototype
function Rectangle(x, y) {
    this._length = x;
    this._breadth = y;
}
Rectangle.prototype.getDimensions = function() {
    return {
        length: this._length,
        breadth: this._breadth
    };
};
var x = new Rectangle(3, 4);
var y = new Rectangle(4, 3);
console.log(x.getDimensions()); // { length: 3, breadth: 4 }
console.log(y.getDimensions()); // { length: 4, breadth: 3 }

// 模块化
var module = (function() {
    var N = 5;

    function print(x) {
        console.log("The result is: " + x);
    }

    function add(a) {
        var x = a + N;
        print(x);
    }
    return {
        description: "This is description",
        add: add
    };
})();
console.log(module.description); // 输出"this is description"
module.add(5); // 输出“The result is: 10”

// call 
var user = {
    name: "Rahul Mhatre",
    whatIsYourName: function() {
        console.log(this.name);
    }
};
user.whatIsYourName(); // 输出"Rahul Mhatre",
var user2 = {
    name: "Neha Sampat"
};
user.whatIsYourName.call(user2); // 输出"Neha Sampat"

// apply
var user = {
    greet: "Hello!",
    greetUser: function(userName) {
        console.log(this.greet + " " + userName);
    }
};
var greet1 = {
    greet: "Hola"
};
user.greetUser.call(greet1, "Rahul"); // 输出"Hola Rahul"
user.greetUser.apply(greet1, ["Rahul"]); // 输出"Hola Rahul"

// bind
var user = {
    greet: "Hello!",
    greetUser: function(userName) {
        console.log(this.greet + " " + userName);
    }
};
var greetHola = user.greetUser.bind({ greet: "Hola" });
var greetBonjour = user.greetUser.bind({ greet: "Bonjour" });
greetHola("Rahul") // 输出"Hola Rahul"
greetBonjour("Rahul") // 输出"Bonjour Rahul"

// Memoization
function memoizeFunction(func) {
    var cache = {};
    return function() {
        var key = arguments[0];
        if (cache[key]) {
            return cache[key];
        } else {
            var val = func.apply(this, arguments);
            cache[key] = val;
            return val;
        }
    };
}
var fibonacci = memoizeFunction(function(n) {
    return (n === 0 || n === 1) ? n : fibonacci(n - 1) + fibonacci(n - 2);
});
console.log(fibonacci(100)); // 输出354224848179262000000
console.log(fibonacci(100)); // 输出354224848179262000000

// 函数重载
function addMethod(object, name, f) {　　
    var old = object[name];　　
    object[name] = function() {
        // f.length为函数定义时的参数个数
        // arguments.length为函数调用时的参数个数　　　　
        if (f.length === arguments.length) {　　
            return f.apply(this, arguments);　　　　
        } else if (typeof old === "function") {
            return old.apply(this, arguments);　　　　
        }　　
    };
}
// 不传参数时，返回所有name
function find0() {　　
    return this.names;
}
// 传一个参数时，返回firstName匹配的name
function find1(firstName) {　　
    var result = [];　　
    for (var i = 0; i < this.names.length; i++) {　　　　
        if (this.names[i].indexOf(firstName) === 0) {　　　　　　
            result.push(this.names[i]);　　　　
        }　　
    }　　
    return result;
}
// 传两个参数时，返回firstName和lastName都匹配的name
function find2(firstName, lastName) {　
    var result = [];　　
    for (var i = 0; i < this.names.length; i++) {　　　　
        if (this.names[i] === (firstName + " " + lastName)) {　　　　　　
            result.push(this.names[i]);　　　　
        }　　
    }　　
    return result;
}
var people = {　　
    names: ["Dean Edwards", "Alex Russell", "Dean Tom"]
};
addMethod(people, "find", find0);
addMethod(people, "find", find1);
addMethod(people, "find", find2);
console.log(people.find()); // 输出["Dean Edwards", "Alex Russell", "Dean Tom"]
console.log(people.find("Dean")); // 输出["Dean Edwards", "Dean Tom"]
console.log(people.find("Dean", "Edwards")); // 输出["Dean Edwards"]

const user = {
    name: 'John',
    surname: 'Doe',
    details: {
        email: 'john@doe.com',
        displayName: 'SuperCoolJohn',
        joined: '2016-05-05',
        image: 'path-to-the-image',
        followers: 45
    }
}

const printUserInfo = (user) => {
    const text = `The user is ${user.name} ${user.surname}. Email: ${user.details.email}. Display Name: ${user.details.displayName}. ${user.name} has ${user.details.followers} followers.`
    console.log(text);
}

printUserInfo(user);
// outputs 'The user is John Doe. Email: john@doe.com. Display Name: SuperCoolJohn. John has 45 followers.'