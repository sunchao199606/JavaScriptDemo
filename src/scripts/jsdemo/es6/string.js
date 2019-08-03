// unicode字符
let char1 = "\u0061";
console.log(char1)

let char2 = "\uD842\uDFB7";
console.log(char2)

let char3 = "\u20BB7";
console.log(char3)
// 表示字符的方法

'\z' === 'z'  // true
'\172' === 'z' // true
'\x7A' === 'z' // true
'\u007A' === 'z' // true
'\u{7A}' === 'z' // true

// 遍历字符串
for (let codePoint of 'foolish') {
    console.log(codePoint)
}

console.log(JSON.stringify({ name: 'sunchao', age: 23 }))

// 模板字符串 字符串中嵌入变量
let name = "Bob", time = "today";

console.log(`Hello ${name}, how are you ${time}?`)

