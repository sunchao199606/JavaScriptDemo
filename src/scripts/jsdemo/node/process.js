console.log(process)
for (let key in process.env) {
    let value;
    try {
        value = process.env[key].toString();
    } catch (error) {
        continue;
    }
    console.log(`${key} : ${value}`)
}