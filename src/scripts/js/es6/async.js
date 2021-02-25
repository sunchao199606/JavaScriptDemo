// async function testAsync() {
//     return;
// }
//
// const result = testAsync()
// testAsync().then(v => {
//     console.log(v);    // 输出 hello async
// });
// console.log(result);
//
// function getSomething() {
//     return "something";
// }
//
// async function testAsync() {
//     return Promise.resolve("hello async");
// }
//
// async function test() {
//     const v1 = await getSomething();
//     const v2 = await testAsync();
//     console.log(v1, v2);
// }
//
// test();

async function takeLongTime(n) {
    return new Promise(resolve => {
        setTimeout(() => resolve(n + 200), n);
    });
}
function step1(n) {
    console.log(`step1 with ${n}`);
    return takeLongTime(n);
}

function step2(n) {
    console.log(`step2 with ${n}`);
    return takeLongTime(n);
}

function step3(n) {
    console.log(`step3 with ${n}`);
    return takeLongTime(n);
}

function promise() {
    console.time("doIt");
    const time1 = 300;
    step1(time1)
        .then(time2 => step2(time2))
        .then(time3 => step3(time3))
        .then(result => {
            console.log(`result is ${result}`);
            console.timeEnd("doIt");
        });
}

async function async() {
    console.time("doIt");
    const time1 = 300;
    const time2 = await step1(time1);
    console.log("step1")
    const time3 = await step2(time2);
    console.log("step2")
    const result = await step3(time3);
    console.log("step3")
    console.log(`result is ${result}`);
    console.timeEnd("doIt");
}

promise()




