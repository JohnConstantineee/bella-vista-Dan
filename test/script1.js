

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










//
// function insert () {
//     const getText = document.insertForm.textarea.value;
//     getWrapper.insertAdjacentHTML('beforeend', getText);
// }
//
// const getWrapper = document.getElementById('wrapper');
// document.insertForm.textarea.value = ''








// const elements = document.querySelectorAll('body *');
// let arr = [];
// elements.forEach(el => arr.push(el.className));
// console.log(new Set(arr));



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


