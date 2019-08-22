import { readFile } from 'fs'

let callback = (err, data) => {
    if (err) {
        throw err
    }
    console.log(data)
}

let promise = new Promise((resolved, reject) => {
    // 异步操作
    readFile('‪E:\\1.txt', callback)

    if (reject) {

    }
});