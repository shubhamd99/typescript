// npm install --save-dev gulp gulp-typescript
// add in package.json in scripts - "build": "gulp"
// npm run build

var gulp = require('gulp');
var ts = require('gulp-typescript');

vat tsProject = ts.createProject('tsconfig.json');

gulp.task('typescript', function() {
    return tsProject.src()
    .pipe(ts(tsProject))
    .pipe(gulp.dest(''));
});

gulp.task('watch', function() {
    gulp.watch('*.ts', ['typescript']);

});

gulp.task('default', ['watch']);
