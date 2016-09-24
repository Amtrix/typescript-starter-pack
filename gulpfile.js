const gulp = require("gulp");
const dirSync = require("gulp-directory-sync");

var ignore = [
    "tsconfig.json",
    /^(.*\.((tsx|ts)$))$/i
];
 
// Sincs client-side files to the build directory.
// For example, this includes html, css files.
gulp.task('sync', function()
{
    return gulp.src("")
        .pipe(dirSync("client", "build/client",
        {
            printSummary: true,
            ignore: ignore
        }));
});