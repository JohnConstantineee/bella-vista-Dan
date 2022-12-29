// spread
// С помощь оператора spread легко комбинировать различные элементы для формирования массивов.

// const myFriends = ['Yaroslav','Max','Alex','Nikita'];
// const city = ['Kiev','New York','Washington','Kansas'];

// console.log(...myFriends);
// console.log(...city);

// const allFriends = [...myFriends, 'I HAVE BIG COCK', ...city]; // обьеденили объекты // мы можем менять массивы местами
// console.log(allFriends);

// const cityUkrainePopulation = {
//     Kiev: 3,
//     Odessa: 2,
//     Kharkiv: 1.5,
//     Lviv: 1,
// }

// console.log(cityUkrainePopulation); если мы так будем применять spread будет ошибка, найден не вызываемый итератор, подобный синтаксист невозможен. Работая с обьектами мы должны складывать это в другие обьекты.
// console.log({...cityUkrainePopulation});

// const numbers = [5, 37, 88, 92];
// console.log(Math.max(5, 37, 88, 92));
// console.log(Math.max(...numbers));



// Rest

// function sum(a, b, ...rest) {
//     return a + b + rest.reduce((a, i) => a + i, 0)
// }
//
// const numbers = [5, 37, 88, 92];
//
// console.log(sum(...numbers));


// function calcValues(a, b) {
//     return [
//         a + b,
//         a - b,
//         a * b,
//         a / b,
//     ]
// }
//
// const [sum,...other] = calcValues(42, 10)
// console.log(sum, other)

const person = {
    name: 'Nikita',
    age: '25',
    address: {
        country: 'Ukraine',
        city: 'Kiev',
    }
}

const {name: firstName, age, address:{city: Lviv}, car = 'Toyta'} = person
console.log(firstName, age, car, lviv)