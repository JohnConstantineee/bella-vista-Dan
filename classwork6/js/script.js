// let number
// number=16
// // 1. Объявить переменную "number" и присвоить ей значение 16
// const number = 16;
// // 2. Вывести в консоль 'Четное', если в переменной number содержится четное число,
// // или 'Нечетное' в противном случае.
// if (number % 2 === 0) {
//     console.log('Четное');
// } else {
//     console.log('Нечетное');
// }
// // 3. Дан массив. Вывести в консоль все элементы массива используя цикл for
// const array = ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve', 'Frank'];
// const obj = {
//     1: 'Bob',
//     2: 'Charlie',
//     11: 'Eve',
//     0: 'Alice',
// };
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }
// array.forEach(el => console.log(el));
// 4. Вывести в консоль все элементы этого же массива используя цикл for .. of
// for (let person of array) {
//     console.log(person);
// }
// // 5. Написать функцию, которая:
// // - принимает два аргумента
// // - возвращает их сумму
// // Вызвать эту функцию и вывести результат в консоль.
// function sum(a, b) {
//     return a + b;
// }
// const sum2 = (a, b) => a + b;
// const num = sum(5, 10);
// console.log(num);
// console.log(sum2(5, 10));
// // 6. Дан объект. Нужно:
// // - добавить объекту новое свойство "lastName" со значением "Smith"
// // - удалить свойство firstName
// const obj = {
//     firstName: 'Alice',
//     'my age': 36
// };
//  obj['lastName'] = 'Smith';
//  obj.lastName = 'Smith';
//  obj['my age'] = 16;
//  delete obj.firstName;
// // 7. Дана строка. Вывести в консоль часть этой строки чтобы получилось 'weis'.
//  const str = 'Budweiser';
//  console.log(str.slice(3, -2));




// /**
//  * Задание 1.
//  *
//  * Написать функцию-сумматор.
//  *
//  * Функция обладает двумя числовыми параметрами, и возвращает результат их сложения.
//  *
//  * Условия:
//  * - Использовать функцию типа arrow function;
//  * - Написать имплементация функции в двух синтаксических формах, которые позволяет стрелочная функция.
//  */

// const sum1 = (a,b) => a+b;
// sum2 = (a,b) => {
//     return a+b
// };
// console.log(sum1(5, 8));
// console.log(sum2(5, 8));





// /**
//  * Задание 2.
//  *
//  * Написать функцию-сумматор всех своих параметров.
//  *
//  * Функция принимает произвольное количество параметров.
//  * Однако каждый из них обязательно должен быть числом.
//  *
//  * Генерировать ошибку, если:
//  * - Если функция была вызвана менее, чем с двумя аргументами;
//  * - Хоть один из аргументов не является допустимым числом (в ошибке указать
//  * его порядковый номер).
//  *
//  * Условия:
//  * - Использовать тип функции arrow function;
//  * - Использовать объект arguments запрещено.
//  */

// const sumAll = (...args) => {
//     console.log(args);
//     if (args.length <2)  {
//         throw new Error ("Меньше двух аргументов")
//     }
//     for (let i = 0; i < args.length; i++) {
//         if (isNaN(args[i]) || typeof args[i] !== "number"){
//             throw new Error (`Недопустимое число в аргументе с индексом ${i}`);
//         }
//     }
//     let sum = 0;
//     for (let number of args) {
//         sum += number;
//     }
//     return sum;
// }
// console.log(sumAll(1, 8, 16, 666, 1.3));
// console.log(sumAll(1, 2, 'string', 5));



// /**
//  * Задание 3.
//  *
//  * Написать функцию, которая возвращает наибольшее число, из переданных ей
//  * в качестве аргументов при вызове.
//  *
//  * Генерировать ошибку, если:
//  * - Если функция была вызвана менее, чем с двумя аргументами;
//  * - Хоть один из аргументов не является допустимым числом (в ошибке указать
//  * его порядковый номер).
//  *
//  * Условия:
//  * - Использовать тип функции arrow function;
//  * - Использовать объект arguments запрещено;
//  * - Обязательно использовать объект Math.
//  */

// const getMaxNumber = (...args) => {
//     if (args.length < 2) {
//         throw new Error("Меньше двух аргументов")
//     } else {
//         for (let i = 0; i < args.length; i++) {
//             if (isNaN(args[i]) || typeof args[i] !== "number") {
//                 throw new Error(`Недопустимое число в аргументе с индексом ${i}`);
//             }
//         }
//     }
//     return Math.max(...args);
// }
// console.log(getMaxNumber(-123, 0, -5, 6, 123));
// console.log(getMaxNumber());
// console.log(getMaxNumber(4, 'abc'));


// /**
//  * Задание 4.
//  *
//  * Написать функцию-логгер log, которая выводит в консоль сообщение указанное количество раз.
//  *
//  * Функция обладает двумя параметрами:
//  * - Первый — строковый тип, сообщение для вывода;
//  * - Второй — числовой тип, количество выводов сообщения.
//  *
//  * Задать значения по-умолчанию для обеих параметров:
//  * - Для первого — «Внимание! Сообщение не указано.»;
//  * - Для второго — 1;
//  */















const array = [{
    name: "Bilbo",
    age: 50,
    alive: true
}, {
    name: "Nazgul",
    age: 1200,
    alive: false
}, {
    name: "Gandalf",
    age: 7777,
    alive: false
}, {
    name: "Aragorn",
    age: 86,
    alive: false
}, {
    name: 'Galadriel',
    age: 8000,
    alive: true
}];

const ages = array.filter(hero => hero.age < 7000)
    const alive = array.filter(length => length.alive === true)
const names = array.map(item => item.name)
console.log(ages,alive,name)

// const names = array
//     .filter(hero => hero.age < 7000)
//     .filter(lenght => lenght.alive)
//     .map(item => item.name);
//
// console.log(names);



// 1. Отфильтровать всех кто старше 7000 лет.
// Оставить всех кто младше
// 2. Отфильтровать всех кто умер. (alive === false)
// 3. Вернуть массив имен.