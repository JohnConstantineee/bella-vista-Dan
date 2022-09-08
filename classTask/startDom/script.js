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
//

