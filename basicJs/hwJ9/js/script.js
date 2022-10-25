const arr = ['hello', 'world', 'Kiev', 'Sport', 'Odessa', 'Live'];

const accept = (arr, parent) => {
const element = document.createElement('ul');
element.innerHTML = arr.map(el =>`<li>${el}</li>`).join('')
parent.append(element);
}
accept(arr, document.body);



// let arr = ["Kharkiv", "Kiev", ["Borispol", "Irpin"], "Odessa", "Lviv", "Dnieper"]
//
// const createElement = (arr, parent = document.body) => {
//     const element = document.createElement('ol')
//     const filter = (arr) => arr.reduce((start, curr) => start.concat(Array.isArray(curr) ? filter(curr) : <li>${curr}</li>), []).join(' ')
//     element.innerHTML = filter(arr)
//     parent.append(element)
// }
//
// createElement(arr)