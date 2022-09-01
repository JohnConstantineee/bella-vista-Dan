// let sumNumber = 10 - 5;
// console.log(sumNumber)
// console.log(typeof sumNumber)

// let message = 'Саня на пайке'
// let number = 5;
// if (number > 100) {
//     console.log(message);
// } else {
//     console.log('условие нет');
// }



// let number = +prompt('Саня на пайке, введите число !!!!');
// let isNumberInteger = Number.isInteger(number);
// if (number < 5) {
//     console.log('Sorry, no numbers');
// }
// while (!isNumberInteger) {
//     number = +prompt('Саня, введите цельное число !!!!');
//     isNumberInteger = Number.isInteger(number);
//     console.log(number);
// }



// let firstNumber = +prompt('Введите первое число');
// let secondNumber = +prompt('Введите второе число');
// let operationNumber = prompt('Введите операцию +,-,*,/, ');
//
// function calc(firstNumber, secondNumber ,operationNumber) {
// switch (operationNumber) {
//     case '+':
//         console.log(firstNumber + secondNumber);
//         break;
//     case '-':
//         console.log(firstNumber - secondNumber);
//         break;
//     case '*':
//         console.log(firstNumber * secondNumber);
//         break;
//     case '/':
//         console.log(firstNumber / secondNumber);
//         break;
// }
// }
// calc(firstNumber, secondNumber, operationNumber);


// function createNewUser() {
//     let name = prompt('name');
//     let lastName = prompt('lastName');
//     const newUser = {
//         firstName: name,
//         lastName: lastName,
//         getLogin: function (){
//             return this.firstName[0]+lastName.toLowerCase();
//         }
//     }
//     return newUser;
// }
//
// console.log(createNewUser().getLogin())



// let admin;
// let name = 'Nikita';
// admin = name;
// console.log(admin);
//
// let days = 6 * 86400;
// console.log(days);
// let number = +prompt('Введите число');
// console.log(number);




// let userName = prompt('What your name ?');
// function showMessage() {
//     let message = 'Привет, ' + userName;
//     alert(message);
// }
// showMessage();



// let double = n => n * 2;
// alert( double(7) );


// Создайте пустой объект user.
//     Добавьте свойство name со значением John.
//     Добавьте свойство surname со значением Smith.
//     Измените значение свойства name на Pete.
//     Удалите свойство name из объекта.
//


// const user = {
//     name: 'John',
//     surname: 'Smith',
// }
// user.name = 'Pete';
// delete user.name;
// console.log(user);


// Создать объект пользователя, который обладает тремя свойствами:
//     * - Имя;
// * - Фамилия;
// * - Профессия.
// *
// * А также одним методом sayHi, который выводит в консоль сообщение 'Привет.'.
// */



// function sumSalaries(salaries) {
//
//     let sum = 0;
//     for (let salary of Object.values(salaries)) {
//         sum += salary;
//     }
//
//     return sum;
// }
//
// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };
//
// alert( sumSalaries(salaries) );


/**
 * Задание 1.
 *
 * Создать объект пользователя, который обладает тремя свойствами:
 * - Имя;
 * - Фамилия;
 * - Профессия.
 *
 * Условия:
 * - Все свойства должны быть доступны только для чтения;
 * - Решить задачу двумя способами.
 */


// const user = {
//     profession: 'jj',
//     manager: {
//         name: 'BNBNBNBN',
//         department: {
//             id: 444,
//             employees: [
//                 {
//                     name: 'Alex',
//                     title: 'developer',
//                 },
//                 {
//                     name: 'Igor',
//                     title: 'Boy',
//                 }
//
//             ]
//
//         }
//     },
// }
// function deepFreeze (obj) {
//     Object.freeze(obj);
//     for (let key in obj) {
//         if (typeof obj[key] === 'object' && obj[key] !== null) {
//             deepFreeze(obj[key]);
//         }
//     }
// }
// deepFreeze(user);
// // Object.defineProperties(user,{
// //     name:{
// //         value:'Nikita',
// //     },
// //     lastName: {
// //         value: 'Golub',
// //     },
// // })
//
// user.name='John';
// // Object.freeze(user);
// user.manager.name='KKKKKKKKKK';
// // user.profession='HHHHHHH';
// user.manager.department.employees[0].name = 'test';
// console.log(typeof user.manager.department.employees);
// console.log(user);


/*function repeat(str,n) {
    if (typeof(str) !== "string" || isNaN(n)) {
        throw new Error("Error");
    }
    else {
        let str1 = str;
        for (let i = 1; i < n; i++) {
           str1 += str;
        }
        return str1;
    }
}
console.log(repeat("hello",3));*/

// function initials () {
//     let str = prompt("Enter your words");
//     str = str.split(" ");
//     let result = "";
//     for (let item of str) {
//         result += item[0].toUpperCase();
//     }
//     return result;
// }
// console.log(initials());


//array
// длинна массива, свойство lenght

// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ];
// console.log(matrix.length);
// console.log(matrix[1][2]);

// let arr = ['Nikita', 'Alex', 'Boy' ];
// arr[0] = 'Mykyta';
// console.log(arr);
// arr[1] = 'Mysterio';
// console.log(arr);





// const days = {
//     ua: [
//         'Понеділок',
//         'Вівторок',
//         'Середа',
//         'Четвер',
//         'П’ятниця',
//         'Субота',
//         'Неділя',
//     ],
//     ru: [
//         'Понедельник',
//         'Вторник',
//         'Среда',
//         'Четверг',
//         'Пятница',
//         'Суббота',
//         'Воскресенье',
//     ],
//     en: [
//         'Monday',
//         'Tuesday',
//         'Wednesday',
//         'Thursday',
//         'Friday',
//         'Saturday',
//         'Sunday',
//     ],
// };
//
// function getLanguadge(){
//     let userChoice = prompt("Which language do you want to have?");
//     while (!Object.keys(days).includes(userChoice)){
//         userChoice = prompt("Which language do you want to have?");
//     }
//     days[userChoice].forEach(item => console.log(item))
// }
//
// console.log(Object.keys(days))
// getLanguadge();


// Напишите функцию mergeArrays для объединения нескольких массивов в один.
// *
// * Функция обладает неограниченным количеством параметров.
// * Функция возвращает один массив, который является сборным из массивов,
// * переданных функции в качестве аргументов при её вызове.
// *
// * Условия:
// * - Все аргументы функции должны обладать типом «массив», иначе генерировать ошибку;
// * - В ошибке обязательно указать какой по счёту аргумент провоцирует ошибку.
// *
// * Заметки:
// * - Делать поддержку выравнивания вложенных массивов не нужно.
// */

// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];
// const arr3 = [1, 2, 3];
//
//
// function unitedArrays(...args) {
//     args.forEach((item, index) => {
//         if (typeof item !== "object") {
//             throw new Error(`Возникла ошибка в элементе номер : ${index}`);
//         }
//     });
//     return [].concat(...args);
// }
// console.log(unitedArrays(arr1, arr2, arr3, "adadad"));



// let numb = [10, 20, 30];
//
// for (let value of numb) {
//     console.log(value, "value before");
//     value = value + [1,'s'];
//     console.log(value, "value after")
// }



//     const info = ["aba", "aa", "ad", "vcd", "aba","a"];
//     const result = info.filter(info => info.length > 2);
// console.log(result);


// let arr = [5, 2, 1, -10, 8];
//
// arr.sort((a, b) => b - a);
//
// alert( arr );


/**
 * Задание 1.
 *
 * Получить и вывести в консоль следующие элементы страницы:
 * - По идентификатору (id): элемент с идентификатором list;
 * - По классу — элементы с классом list-item;
 * - По тэгу — элементы с тэгом li;
 * - По CSS селектору (один элемент) — третий li из всего списка;
 * - По CSS селектору (много элементов) — все доступные элементы li.
 *
 * Вывести в консоль и объяснить свойства элемента:
 * - innerText;
 * - innerHTML;
 * - outerHTML.
 */

// console.log(document.getElementById('list'));
// console.log(document.querySelectorAll('.list-item:nth-child(3)'));
// console.log(document.querySelectorAll('.list-item')[3]);
// console.log(document.getElementsByTagName('li'));
// console.log(document.querySelectorAll('li'));
// console.log(document.getElementsByClassName('sidebar')[0].innerText);


/**
 * Задание 2.
 *
 * Получить элемент с классом .remove.
 * Удалить его из разметки.
 *
 * Получить элемент с классом .bigger.
 * Заменить ему CSS-класс .bigger на CSS-класс .active.
 *
 * Условия:
 * - Вторую часть задания решить в двух вариантах: в одну строку и в две строки.
 */
// document.querySelector('.remove').remove();
// console.log(document.querySelectorAll('.remove'));
// document.querySelector('.bigger').classList.replace('bigger', 'active');


/**
 * Задание 3.
 *
 * На экране указан список товаров с указанием названия и количества на складе.
 *
 * Найти товары, которые закончились и:
 * - Изменить 0 на «закончился»;
 * - Изменить цвет текста на красный;
 * - Изменить жирность текста на 600.
 *
 * Требования:
 * - Цвет элемента изменить посредством модификации атрибута style.
 */
// const collection = document.querySelectorAll('.store li');
// collection.forEach(element  => {
//     if (element.innerText.includes(': 0')) {
//         element.innerText = element.innerText.replace(': 0',': out of stock');
//         element.setAttribute('style','color: blue; font-weight: 600');
//         // element.style.color = 'red'
//         // element.style.fontWeight = '600'
//     }
// })


let windowHeight = window.innerHeight
let windowWidth = window.innerWidth

let numberBlocks = prompt("Enter number")

const blocks = []

while (isNaN(numberBlocks)) {
    numberBlocks = prompt("Enter number")
}

function createBlock () {
    return {
        size: Math.floor(Math.random() * 100 + 100),
        color: '#' + Math.floor(Math.random()*16777215).toString(16),
    }
}


for (let i = 0; i < numberBlocks; i++) {
    blocks.push(createBlock())
}



blocks.map(el => {
    el.positionLeft = Math.floor(Math.random() * (windowWidth - el.size))
    el.positionTop = Math.floor(Math.random() * (windowHeight - el.size))
})

console.log(blocks);

function createElement (el) {
    let block = document.createElement('div')
    block.style.cssText =  `position: absolute; width: ${el.size}px; height: ${el.size}px; background-color: ${el.color}; top: ${el.positionTop}px; left: ${el.positionLeft}px`
    return block;
}

blocks.forEach(el => document.body.append(createElement(el)))
blocks.forEach((el, i) => {
    setTimeout(() => {
        document.body.append(createElement(el))
    }, i * 3000);
});



