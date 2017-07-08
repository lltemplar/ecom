var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    jshint = require('gulp-jshint');
    sourcemaps = require('gulp-sourcemaps');
less = require('gulp-less');

//语法检查
gulp.task('jshint', function () {
    return gulp.src('public/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});
//编译less
gulp.task('css', ['less:skins','less:main'],function () {

});

gulp.task('less:skins', function () {
    gulp.src('public/less/skins/*.less')     //需要操作的文件
        .pipe(less())                        //编译less文件
        .pipe(gulp.dest('public/css/skin'))  //输出压缩后的文件
        .pipe(rename({ suffix: '.min' }))    //rename压缩后的文件名
        .pipe(minifycss())                   //执行压缩
        .pipe(gulp.dest('public/css/skin')); //输出压缩后的文件
});

gulp.task('less:main', function () {
    gulp.src(['public/less/AdminLTE.less'])
        .pipe(sourcemaps.init())
        .pipe(less())                        //编译less文件
        .pipe(sourcemaps.write())            //当less有各种引入关系时，编译后不容易找到对应less文件，所以需要生成sourcemap文件，方便修改
        .pipe(gulp.dest('public/css'))       //输出压缩后的文件
        .pipe(rename({ suffix: '.min' }))    //rename压缩后的文件名
        .pipe(minifycss())                   //执行压缩
        .pipe(gulp.dest('public/css'));      //输出压缩后的文件

    gulp.src(['public/less/AdminLTE-without-plugins.less','public/less/select2.less','public/less/fullcalendar.less','public/less/bootstrap-social.less'])
        .pipe(less())                        //编译less文件
        .pipe(gulp.dest('public/css/alt'))       //输出压缩后的文件
        .pipe(rename({ suffix: '.min' }))    //rename压缩后的文件名
        .pipe(minifycss())                   //执行压缩
        .pipe(gulp.dest('public/css/alt'));      //输出压缩后的文件
});

//压缩css
gulp.task('minifycss', function () {
    return gulp.src('css/*.css')    //需要操作的文件
        .pipe(rename({ suffix: '.min' }))   //rename压缩后的文件名
        .pipe(minifycss())   //执行压缩
        .pipe(gulp.dest('Css'));   //输出文件夹
});

//压缩，合并 js
gulp.task('js', function () {
    return gulp.src('public/components/*.js')  //需要操作的文件 
        .pipe(concat('components.js'))         //合并所有js到main.js
        .pipe(gulp.dest('public/js'))          //输出到文件夹
        .pipe(rename({ suffix: '.min' }))      //rename压缩后的文件名
        .pipe(uglify())                        //压缩
        .pipe(gulp.dest('public/js'));         //输出
});

//默认命令，在cmd中输入gulp后，执行的就是这个任务(压缩js需要在检查js之后操作)
gulp.task('default', ['jshint'], function () {
    gulp.start('minifycss', 'minifyjs');
});