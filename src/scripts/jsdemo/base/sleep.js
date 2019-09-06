// 主线程所有的函数执行完毕才会从任务队列中拿出任务来执行 任务即回调函数
function stopMianThread(interval) {
    let date = new Date();
    let endInstant = date.getTime() + interval;
    while (new Date().getTime() < endInstant) {

    }
}
// 主线程卡住 还没执行完毕 该异步任务不会
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // 返回异步任务的执行结果
        reject('500ms');
    }, 500);
}
);
p1.then((val) => {
    console.log(val);
}).catch((val) => {
    console.log('reject' + val);
});

setTimeout(() => {
    console.log('6000ms callback')
}, 6000);

stopMianThread(3000);

console.log('end')