const rimraf = require("rimraf");
let dir = "clean/";
rimraf.sync(dir, {}, () => console.log("clear complete"));