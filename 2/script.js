/**
 * Задание 1.
 *
 * Получить элемент с классом .remove.
 * Удалить его из разметки.
 * .remove()
 *
 * Получить элемент с классом .bigger.
 * Заменить ему CSS-класс .bigger на CSS-класс .active.
 * .classList.add(class)
 * .classList.remove(class)
 * 
 *
 * Условия:
 * - Вторую часть задания решить в двух вариантах: в одну строку и в две строки.
 * .classList.replace(oldClass, newClass)
 */

/* Удаление */
let description = document.getElementsByClassName("remove");
description.forEach();

/* Изменение: способ 1 */
let element = document.querySelector('.bigger');
element.classList.add('active');
element.classList.remove('bigger');

/* Изменение: способ 2 */
 element.classList.replace('bigger','active');

