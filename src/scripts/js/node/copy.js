const path = require('path');
const fs = require('fs');
const src = path.resolve(__dirname, './file/src.txt');
const outputDir = path.resolve(__dirname, './file/output');

// copyFile
// fs.copyFile(src, path.resolve(outputDir, './copyFile.txt'), (err) => {
//     if (err) console.log('copy error')
//     else console.log('copyFile copy success');
// })

// readFile and writeFile
fs.readFile(src, (err, data) => {
    if (err) throw new Error('copy error');
    fs.writeFile(path.resolve(outputDir, './writeFile.txt'), data, function (err) {
        if (err) throw new Error('copy error');
    })
    console.log('readFile and writeFile copy success')
})