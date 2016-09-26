const gulp = require("gulp");
const gutil = require("gulp-util");
const dirSync = require("gulp-directory-sync");
const fileSync = require('gulp-file-sync');
const webpack = require("webpack");

var ignore = [
    "tsconfig.json",
    /^(.*\.((tsx|ts)$))$/i
];

gulp.task('sync-client', function() {
    
    gulp.watch('client/**/*', ['sync', 'webpack']);
});
 
// Sincs client-side files to the build directory.
// For example, this includes html, css files.
gulp.task('sync', function()
{
    return gulp.src("")
        .pipe(dirSync("client", "build/client",
        {
            printSummary: true,
            ignore: ignore//,
           // nodelete: true
        }));
});

gulp.task("webpack", function(callback) {
    // run webpack
    webpack({
        entry: "./client/main.tsx",
        output: {
            filename: "./build/client/main.js",
        },

        // Enable sourcemaps for debugging webpack's output.
        devtool: "source-map",

        resolve: {
            // Add '.ts' and '.tsx' as resolvable extensions.
            extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
        },

        module: {
            loaders: [
                // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
                { test: /\.tsx?$/, loader: "ts-loader" }
            ],

            preLoaders: [
                // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
                { test: /\.js$/, loader: "source-map-loader" }
            ]
        },

        // When importing a module whose path matches one of the following, just
        // assume a corresponding global variable exists and use that instead.
        // This is important because it allows us to avoid bundling all of our
        // dependencies, which allows browsers to cache those libraries between builds.
        externals: {
            "react": "React",
            "react-dom": "ReactDOM"
        }
    }, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
});