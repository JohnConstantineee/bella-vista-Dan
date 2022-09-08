// const sum = (a,b) => a+b;
// console.log (sum(6,5));

// const sum = (a,b) =>{
// let result = a + b;
// return result;
// };
// console.log (sum(6,5));

// const getDefaultParams =(a = 0, b = 0,) =>{
//     console.log (a,b);
// };
// getDefaultParams(2,4);


// let number = +prompt('Саня на пайке, введите число !!!!');
// let isNumberInteger = Number.isInteger(number);
// if (number < 5) {
//     console.log('Sorry, no numbers');
// }
// while (!isNumberInteger) {
//     number = +prompt('Саня, введите цельное число !!!!');
//     isNumberInteger = Number.isInteger(number);
//     console.log(number);
//
// }


// let arr = [5, 2, 1, -10, 8];
//
// arr.sort((a, b) => b - a);
//
// alert( arr );




//     const info = ["aba", "aa", "ad", "vcd", "aba","a"];
//     const result = info.filter(info => info.length > 2);
// console.log(result);




// let numb = [10, 20, 30];
//
// for (let value of numb) {
//     console.log(value, "value before");
//     value = value + [1,'s'];
//     console.log(value, "value after")
// }



// let matrix = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ];
// console.log(matrix.length);
// console.log(matrix[1][2]);




// let arr = ['Nikita', 'Alex', 'Boy' ];
// arr[0] = 'Mykyta';
// console.log(arr);
// arr[1] = 'Mysterio';
// console.log(arr);




// Создайте пустой объект user.
//     Добавьте свойство name со значением John.
//     Добавьте свойство surname со значением Smith.
//     Измените значение свойства name на Pete.
//     Удалите свойство name из объекта.
//

// const user = {
//     name: 'John',
//     surname: 'Smith',
// }
// user.name = 'Pete';
// delete user.name;
// console.log(user);




//YAM

// const dataIceCream = [
//     { name: "хрещатик", price: "7,99 uah" },
//     { name: "100% пломбір", price: "2,50 uah" },
//     { name: "maximus", price: "12,99 uah" },
//     { name: "пташине молоко", price: "20,99 uah" },
// ];
//
// const renderList = (dataIceCream, parent) => {
//     const element = document.createElement('ul');
//     // dataIceCream.forEach(el => element.innerHTML += `<li><h2>${el.name}</h2><p>${el.price}</p></li>`)
//     element.innerHTML = dataIceCream.map(element => `<li><h2>${element.name}</h2><p>${element.price}</p></li>`).join('');
//     parent.append(element);
// }
//
// renderList(dataIceCream,document.body);




const clearLinksPage = () => {
Array.from(document.querySelectorAll('a'));
    console.log(Array.from(document.querySelectorAll('a')),'Array.from(document.querySelectorAll()');
    const links = Array.from(document.querySelectorAll('a'));
    links.forEach(item => {

        console.log(item,'item');
        console.log(item.href,'item.href');


    }
    )
}
clearLinksPage();