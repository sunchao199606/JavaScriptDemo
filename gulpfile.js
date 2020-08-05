const gulp = require("gulp");
const tsc = require("gulp-typescript");
const path = require("path");
const rootDir = path.resolve(__dirname);

gulp.task("tsc", () => {
    let sourceCodeFiles = rootDir + "/src/scripts/ts/**/**/**/*.ts";
    let outputPath = rootDir + "/src/scripts/ts/build"
    return gulp.src(sourceCodeFiles).pipe(tsc()).pipe(gulp.dest(outputPath))
})

gulp.task("default", gulp.series("tsc", async () => console.log("done")));


