
document.querySelectorAll('p');
Array.from(document.querySelectorAll('p')).forEach(p => p.style.background = '#ff0000');
console.log(Array.from(document.querySelectorAll('p')))
const idEl = document.querySelector('#optionsList');
console.log(idEl);
console.log(idEl.parentElement);
console.log(idEl.childNodes);
const idElement = document.querySelector('#testParagraph');
idElement.innerText =  "This is a paragraph";
console.log(idElement);
const mainElement = document.querySelector('.main-header');
Array.from(mainElement.children).forEach(element => element.classList.add('nav-item'));
console.log(mainElement);
const mainTitle = document.querySelectorAll('.section-title');
Array.from(mainTitle).forEach(element => element.classList.remove('section-title'));
console.log(mainTitle);


