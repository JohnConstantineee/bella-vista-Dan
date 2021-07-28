 /*** Задание 1.** Написать скрипт, который создаст квадрат произвольного размера.*
 * Размер квадрата в пикселях получить интерактивно посредством диалогового окна prompt.*
 * Если пользователь ввёл размер квадрата в некорректном формате —* запрашивать данные повторно до тех пор, пока данные не будут введены корректно.

  * Все стили для квадрата задать через JavaScript посредством одной строки кода.
  * * Тип элемента, описывающего квадрат — div.
  * Задать ново-созданному элементу CSS-класс .square.
  *
  * Квадрат в виде стилизированного элемента div необходимо
  * сделать первым и единственным потомком body документа.
  */

 const getSize = () => {
     let result;
     do {
         result = prompt("Enter width");
    } while (isNaN(+result) || result === null || result.trim() === '');
     return result + 'px';
 }
 const newBox = document.createElement('div');
 newBox.className = "square";
 const size = getSize();
 newBox.style.cssText = `width: ${size}; height: ${size}; background-color: red`;
 document.body.append(newBox);





