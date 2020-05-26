for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1)
}

for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1)
}

const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2
    },
    // 箭头函数中的this指向被调用时的上级作用域
    perimeter: () => 2 * Math.PI * this.radius
}
//this.radius = 100;
console.log(this);
console.log(shape.diameter());
console.log(shape.perimeter());