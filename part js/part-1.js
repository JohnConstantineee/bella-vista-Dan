/**
 * Задание 3.
 *
 * Создать элемент h1 с текстом «Добро пожаловать!».
 *
 * Под элементом h1 добавить элемент button c текстом «Раскрасить».
 *
 * При клике по кнопке менять цвет каждой буквы элемента h1 на случайный.
 */
/* Дано */
const PHRASE = 'Добро пожаловать!';
function getRandomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}
/* Решение */
// Создать h1
const h1= document.createElement('h1')
h1.innerText=PHRASE;
document.body.appendChild(h1);
// добавить его на страницу
const button = document.createElement('button')
button.innerText = 'Раскрасить';
document.body.append(button);
button.addEventListener('click', () => {
  const text = h1.innerText;
  h1.innerText=''
  for(let char of text){
    const span = document.createElement('span')
    span.innerText = char;
    span.style.color = getRandomColor()
    h1.append(span)
  }
})
// добавить ему текст
// создать button
// добавиить ему текст
// добавить его на страницу
// добавить кнопке обработчик события
// в обработчике:
// получить тип элемента н1
// используя forEach for of
//       для каждой буквы назначсаем цвет через getRandomColor()