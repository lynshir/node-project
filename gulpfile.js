const gulp = require('gulp')
const babel = require('gulp-babel')
const rename = require('gulp-rename')
const clean = require('gulp-clean');
const fs = require('fs')

/* ==========================================================================
   执行gulp时，不写任务名则执行default任务
   ========================================================================== */
console.log(process.env.NODE_ENV, 'process.env.NODE_ENV ')

gulp.task('watch', function () {
  gulp.watch('./src/nodeyii/**/*.js', () => gulp.src('./src/nodeyii/**/*.js').pipe(
    babel({
      //关闭外侧babelrc
      babelrc: false,
      presets: ['@babel/env'],
      plugins: ['@babel/transform-runtime']
    }))
    .pipe(gulp.dest('./dist'))
  )
  /**
* options {String or Object or Function} 这里以{Object}为例
* {
* 	dirname: "js",		文件路径
* 	basename: "main",	文件名
* 	prefix: "",		文件名前缀
* 	suffix: ".min",	文件名后缀
* 	extname: ".js"		文件扩展名
* }
*/

  gulp.watch('./src/nodeyii/**/*.ejs', gulp.series('cleanView', () => gulp.src('./src/nodeyii/**/*.ejs')
    // .pipe(rename({
    //   extname: '.html'
    // }))
    .pipe(gulp.dest('./dist'))
  ))

  // gulp.watch('./src/nodeyii/**/*.css', () => gulp.src('./src/nodeyii/**/*.css').pipe(gulp.dest('./dist')))
})
let _task = ['watch']
if (process.env.NODE_ENV === 'production') {
  _task = []
}

gulp.task('cleanView', function () {
  return fs.existsSync('./dist/view') ? gulp.src('./dist/view', { read: false })
    .pipe(clean()) : new Promise(resolve => { console.log('dist does not exists!'); resolve() })
});

/* ==========================================================================
   执行default任务，第二个参数需要函数或者序列任务
    序列任务： parallel 、series
   ========================================================================== */


gulp.task('default', gulp.series(..._task))