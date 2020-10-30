const {task, dest, src, series} = require("gulp");
const tsc = require("gulp-typescript");
const {resolve, join} = require("path");
const rootDir = resolve(__dirname);
const babel = require('gulp-babel');
task("tsc", () => {
    let sourceCodeFiles = rootDir + "/src/scripts/ts/**/**/**/*.ts";
    let outputPath = rootDir + "/src/scripts/ts/build"
    return src(sourceCodeFiles).pipe(tsc()).pipe(dest(outputPath))
})

task("default", series("tsc", async () => console.log("done")));


const replace = require('gulp-replace');

task('replace', function () {
    return src(['file.txt'])
        // See http://mdn.io/string.replace#Specifying_a_string_as_a_parameter
        .pipe(replace("define(", 'define("App", '))
        .pipe(dest('build/'));
});

const babelSetting = {
    moduleIds: true,
    //moduleId: "Name",
    presets: ["@babel/env"],
    plugins: ["@babel/transform-modules-amd"]
}
task('babel', function () {
    return src([join(rootDir, "/src/scripts/js/es6/*.js")]).pipe(babel(babelSetting)).pipe(dest(join(rootDir, "/build")));
})