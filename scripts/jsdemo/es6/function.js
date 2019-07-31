// 参数默认值
"use strict";
let a = 1;
this.prop = 111;
function fun1(arg1 = 10, agr2 = 'eeee') {
    console.log(this);
    console.log(arg1 + "--" + agr2);
}

console.log(this);
fun1(undefined, undefined);