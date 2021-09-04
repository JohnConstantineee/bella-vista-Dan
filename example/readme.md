#Gulp

## Что такое Gulp
Это таск-менеджер, который призван помочь нам автоматизировать скучные процессы в разработке. С его помощью можно сделать:

* объединение всех файлов со стилями в один
* добавление к префиксов ко всем css свойствам, котрые в этом нуждаются
* объединение js файлов в один
* перевод JavaScript кода с более новых стандартов на ES5
* и тд.

## Начало работы с Gulp
Прежде всег нужно убедиться, что у Вас создан npm проект и в нем уже есть файл `package.json`.

Если Вы впервые на компьютере устанавливаете Gulp, то начать стоит с выполнения кодманды - `npm install gulp-cli --global`. После выполнения установки на Вашем компьютере появится возможность обращаться к такс-менеджеру в консоли. Это нужно для того, чтобы потом посленастройки можно было запускать Gulp.


После этого можно установить сам таск-менеджер уже в конкретный проект. Для этого выполняем в консоли команду - `npm install gulp --save-dev`.

## Настройка работы Gulp
Для настройки нужно в папке проекта создать файл `gulpfile.js`. После запуска таск-менееджера именно этот файл будет отвечать за то как, что и в какой послдовательности нужно запускать.

Чтобы осуществлять настройку, добавлять задачи и выстраивать их последовательность нужно:
* определиться со списком модулей, которые понадобятся
* установить каждый из них, согласно их документации
* в самом верху `gulpfile.js` импортировать эти модули. Пример обычно тоже есть в документации.  


Чтобы импортировать эти модули есть два способа.

1) Более старый при помощи функции `require`:
    ```js
   const gulp = require('gulp');
   const clean = require('gulp-clean');
   const concat = require('gulp-concat');
    ```
2) Более новый, продвинутый с использованием оператора `import`:
    ```js
   import gulp from 'gulp';
   import clean from 'gulp-clean';
   import concat from 'gulp-concat';
    ```
   Но стоит учесть, что для того, чтобы этот вариант сработал, в файле `package.json` нужно добавить свойство `"type": "module"`.


## Шаги

```javascript
const gulp = require("gulp"); // сохраняем в переменную gulp большой объект, позволяющий создавать задачи, считывать и перемещать файлы
```

```javascript
// сохраняем в переменную concat функцию, объединяющиую все переданные ей файлы в один, и при необходимости - переименовывающую его
const concat = require("gulp-concat");
```

```javascript
// создаем задачу на перемещение и объединение файлов - как видите, Gulp сам только ставит задачи, находит и перемещает файлы - все остальное за него делают другие модули
gulp.task("concatCss", function(){
    return gulp.src("src/css/*.css").
    pipe(concat("all.css")).
    pipe(gulp.dest("dist/css"));
});
```

```javascript
/*
// общий синтаксис задач в Gulp:
*/

gulp.task('task_name', function () {
    return gulp.src('source_files', { allowEmpty: true }) // путь к файлам-исходникам
    .pipe(plugin_name()) // прогоняем их через плагин
    .pipe(gulp.dest('destination_derictory')) // путь к папке, куда помещаем конечные файлы
})

// `gulp.src` - методы, при помощи которого мы говорим gulp-у какие файлы взять. Первый аргумент - путь к файлам, второй аргумент - объект с дополнительными настройками.
// `{allowEmpty: true}` - настройка, которая говорит таск-менеджеру что файлов по этому пути может и не быть. В таком случае он просто продолжить выполнение остальных задач.
// `.pipe()` - метод, который вызывается на результате выполнения `gulp.src()`. Предназначен для описания того, что мы хотим сделать с файлами. Принято использовать по одному `.pipe()` на каждый этап обработки файлов. Т.е. если нужно собрать все js файлы в один и потом преобразовать их к стандарту ES5, то обе эти операции будут выполнятсья в отдельных `.pipe()` друг за другом.
```

```javascript
// хорошим тоном является создавать для каждой задачи отдельных функций и потом прописывания их названий в тасках

const moveCSS = () =>
    gulp.src("./src/css/*.css").
    pipe(gulp.dest("./dist/css/"));


const moveCss = () => gulp.src("./src/css/*.css").pipe(gulp.dest("./dist/css/")); // можно писать и так, но предыдущий вариант более наглядный

gulp.task('moveCss', moveCSS)
```


## API
[src](https://gulpjs.com/docs/en/api/src) & [dest](https://gulpjs.com/docs/en/api/dest)

```javascript
const { src, dest } = require('gulp');

exports.moveCss = () => {
    return src('src/css/*').pipe(dest('dist/'))
}

exports.moveJs = () => {
    return src('src/js/*').pipe(dest('dist/'))
}
```

[task](https://gulpjs.com/docs/en/api/task)

```javascript
const { task } = require('gulp');

task('name', () => {});
```

[watch](https://gulpjs.com/docs/en/api/watch)  
[chokidar](https://gulpjs.com/docs/en/api/watch#chokidar-instance)

```javascript
const { task, watch } = require('gulp');

// watch(globs, [options], [task])
task('dev', () => watch('path', () => {}));



```

[series](https://gulpjs.com/docs/en/api/series) & [parallel](https://gulpjs.com/docs/en/api/parallel)

```javascript

// gulp.parallel и gulp.series принимают название функций, которые должны выполняться
gulp.task("moveFiles", gulp.parallel(moveCSS, moveIMG));

// Если же названия указаны в кавычках, то это - название тасок. 
gulp.task("moveHtml", () => gulp.src('src/index.html').pipe(gulp.dest('dist')));
gulp.task("moveFiles", gulp.parallel("moveHtml", moveCSS, moveIMG));

// Если эти таски не было созданы, то команда gulp moveFiles вызовет  ошибку
```

## Plugins
- [gulp-concat](https://www.npmjs.com/package/gulp-concat)
- [gulp-htmlmin](https://www.npmjs.com/package/gulp-htmlmin)
- [gulp-gulp-terser](https://www.npmjs.com/package/gulp-terser)
- [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css)
- [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer)
- [gulp-clean](https://www.npmjs.com/package/gulp-clean)
- [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)
- [browser-sync](https://browsersync.io/docs/gulp)
- [gulp-sass](https://www.npmjs.com/package/gulp-sass)

