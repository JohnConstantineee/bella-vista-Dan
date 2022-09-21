const myNumber = 42;
// console.log(localStorage.getItem('number'));
// localStorage.setItem('number',myNumber.toString()); // localStorage - работает только со string.
// localStorage.clear()
const obj = {
    name: 'Max',
    age: 20,
}
// localStorage.setItem('person',JSON.stringify(obj));
const raw = localStorage.getItem('person')
const person = JSON.parse(raw);
person.name = 'Nikita';
console.log(person);