function asyncFun(flag) {
    return new Promise((resolve, reject) => {
        if (flag)
            resolve("success")
        else {
            reject("error")
        }
    })
}


asyncFun(true)
    .then(result => console.log(result))
    .then(result => {
        console.log(result)
        throw new Error("then2 error")
    })
    .catch(error => console.log("catch :", error))
//asyncFun(false).then(result => console.log("then1 :", result)).catch(error => console.log("catch1 :", error))

//1 then与catch都写了error处理函数只会执行then里面的error处理函数
//2 即使你不手动reject，promise executor执行过程中出现了异常也会自动reject
//3 catch处理 1reject时候的异常 2executor执行过程中出现的异常 2onFulfill函数执行过程中出现的异常

const resolveMap = new Map()
const rejectMap = new Map()

let p1 = new Promise((resolve, reject) => {
    resolveMap.set("1", resolve);
    rejectMap.set("1", reject);
})
p1.then(result => console.log("result", result)).catch(err => console.log("err", err))
let p2 = new Promise((resolve, reject) => {
    resolveMap.set("2", resolve);
    rejectMap.set("2", reject);
})
p2.then(result => console.log("result2", result)).catch(err => console.log("err2", err))
setTimeout(() => {
    let resolve = resolveMap.get("1")
    resolve("result1.....")
    let reject = rejectMap.get("2")
    reject("reject2222222")
}, 3000)