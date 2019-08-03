let [a, b, c] = [1, 2, 3];

let [foo, [[bar], baz]] = [1, [[2], 3]];
foo // 1
bar // 2
baz // 3

let [, , third] = ["foo", "bar", "baz"];
third // "baz"

let [x, , y] = [1, 2, 3];
x // 1
y // 3

let [head, ...tail] = [1, 2, 3, 4];
head // 1
tail // [2, 3, 4]

let [x, y, ...z] = ['a'];
x // "a"
y // undefined
z // []

// 交换变量的值
let x = 1;
let y = 2;

[x, y] = [y, x];

// 返回一个数组

function example() {
    return [1, 2, 3];
}
let [a, b, c] = example();

// 返回一个对象
function example() {
    return {
        foo: 1,
        bar: 2
    };
}
let { foo, bar } = example();

// 提取json串

let json = {
    number: 1,
    string: "sting",
    object: {},
    function: () => { },
    array: [],
    undefined: undefined,
    null: null
}

let { number,
    string,
    object,
    fun,
    array,
    undefined,
    none } = json;