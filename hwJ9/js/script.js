const arr = ['hello', 'world', 'Kiev', 'Sport', 'Odessa', 'Live'];

const accept = (arr, parent) => {
const element = document.createElement('ul');
element.innerHTML = arr.map(el =>`<li>${el}</li>`).join('')
parent.append(element);
}
accept(arr, document.body);



