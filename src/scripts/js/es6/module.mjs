// CommonJS模块
// let { stat, exists, readFile } = require('fs');
// 等同于
// let _fs = require('fs');
// let stat = _fs.stat;
// let exists = _fs.exists;
// _fs.readFile("C:\\Users\\89754\\Desktop\\UCP\\Frame\\Login\\Button_登录_OnClick.lfc", (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });


// ES6模块
function add(a, b) {
    return a + b;
}

var description = "a module";

export { add, description }