
function* sum(num) {
    let sum = 0;
    for (let i = 0; i < num; i++) {
        sum += i;
    }
    yield sum;
    return sum;
}

// 主程序
let ref = sum(10);

console.log(ref.next());
console.log(ref.next());