import gulp from 'gulp';
import clean from 'gulp-clean';
import gulpSass from "gulp-sass";
import nodeSass from "sass";
const sass = gulpSass(nodeSass);
import BS from 'browser-sync'
const browserSync = BS.create();
const { src, dest, task, watch, series } = gulp;

const cleanDist = () => src('dist/*', { allowEmpty: true }).pipe(clean());

const convertScss = () => src('src/styles/**/*')
    .pipe(sass())
    .pipe(dest('dist/styles'));

const startWatching = () => {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    watch('src/styles/**/*').on('all', series(cleanDist, convertScss, browserSync.reload));
}

task('dev', startWatching);
task('build', series(cleanDist, convertScss));

