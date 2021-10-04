const gulp = require("gulp");
const { watch } = gulp;
const htmlImport = require("gulp-html-import");

function copyStatic(cb) {
  gulp.src("./src/static/**/*").pipe(gulp.dest("dist/static"));
  gulp.src("./src/favicon.ico").pipe(gulp.dest("dist"));
  cb();
}

function imp(cb) {
  gulp
    .src("./src/*.html")
    .pipe(htmlImport("./src/components/"))
    .pipe(gulp.dest("dist"));
  cb();
}

function defaultTask(cb) {
  imp(cb);
  copyStatic(cb);

  gulp.watch("./src/**/*.html", imp);
  gulp.watch("./src/static/**/*", copyStatic);
  cb();
}

exports.default = defaultTask;
