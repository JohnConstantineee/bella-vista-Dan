
import gulp from'gulp';
// import cleanCSS from'gulp-clean-css';
// import autoprefixer from'gulp-autoprefixer';
import concat from'gulp-concat';
import clean from'gulp-clean';
import imagemin from'gulp-imagemin';
import BS from 'browser-sync';
const  browserSync = BS.create();
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);



// const concatCssFunc = () => gulp.src('src/scss/**/*')
//     .pipe(cleanCSS({compatibility: 'ie8'}))
//     .pipe(autoprefixer({
//     cascade: false
// }))
//         .pipe(concat("styles.min.css"))
//         .pipe(gulp.dest('dist/css'))
//         .pipe(browserSync.stream());
//


const concatJsFunc = () => gulp.src('src/js/**/*')
    .pipe(concat("all.js"))
    .pipe(gulp.dest('dist/js'));


const convertCss = () => gulp.src('src/scss/**/*', { nodir: true })
    .pipe(sass())
    .pipe(concat('styles.min.css'))
    .pipe(gulp.dest('dist/css'));


const minifyImages = () => gulp.src('src/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))


const cleanDist = () => gulp.src('dist/*', {read: false}).pipe(clean())


// gulp.task('concatCss', concatCssFunc);
gulp.task('concatJs', concatJsFunc);
gulp.task('convertCss', convertCss);
gulp.task('minifyImages', minifyImages);
gulp.task('cleanDist', cleanDist);
gulp.task('build', gulp.series('cleanDist','concatJs','convertCss','minifyImages',));
gulp.task('buildCreatingProject', gulp.series(cleanDist, convertCss, concatJsFunc))



// browserSync - выполнит функцию в которой ты запустишь статический сервер и будешь смотреть за всеми файлами scss
// и при изменении выполни concatCssFunc и презагрузи наш браузер.
const startWatching = () => {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('src/**/*').on('change', gulp.series(convertCss,concatJsFunc, browserSync.reload))

    }

gulp.task('dev', startWatching);









// import gulp from "gulp";
// import concat from "gulp-concat";
// import gulpSass from "gulp-sass";
// import nodeSass from "sass";
// const sass = gulpSass(nodeSass);
// import clean from "gulp-clean";
// import imageMin from "gulp-imagemin";
// import BS from 'browser-sync';
// const browserSync = BS.create();
//
// const { src, dest, task, watch, series } = gulp;
//
// const cleanFolder= () => src('dist/*', {read: false})
//     .pipe(clean());
//
// const convertCss = () => src('src/scss/**/*', { nodir: true })
//     .pipe(sass())
//     .pipe(concat('styles.min.css'))
//     .pipe(dest('dist/css'));
//
// const convertJs = () => src('src/js/script.js')
//     .pipe(concat('scripts.min.js'))
//     .pipe(dest('dist/js'));
//
// const prepareImg = () => src('src/img/**/*')
//     .pipe(imageMin({
//         interlaced: true,
//         progressive: true,
//         svgoPlugins: [{removeViewBox: false}]
//     }))
//     .pipe(dest('dist/images'));
//
// const startWatching = () => {
//     browserSync.init({
//         server: {
//             baseDir: "./"
//         }
//     });
//     watch('src').on('all', series(convertCss, convertJs, browserSync.reload));
// }
//
// task('dev', startWatching);
// task('build', series(cleanFolder, convertCss, convertJs, prepareImg));
// task('buildCreatingProject', series(cleanFolder, convertCss, convertJs));
