console.log('script start')

// 第二个异步任务
let p = new Promise((resolve, reject) => {
    reject("error")
})

p.then(() => {
}, (err) => {
    console.log(err)
})

console.log('script end')