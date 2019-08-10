const path = require('path');

const fs = require('fs');

fs.readFile(path.resolve(__dirname, '../../../files/111.txt'), { encoding: 'utf-8' }, (err, data) => {

    console.log(data)
})