// let sumNumber = 10 - 5;
// console.log(sumNumber)
// console.log(typeof sumNumber)

// let message = 'Саня на пайке'
// let number = 5;
// if (number > 100) {
//     console.log(message);
// } else {
//     console.log('условие нет');
// }



// let number = +prompt('Саня на пайке, введите число !!!!');
// let isNumberInteger = Number.isInteger(number);
// if (number < 5) {
//     console.log('Sorry, no numbers');
// }
// while (!isNumberInteger) {
//     number = +prompt('Саня, введите цельное число !!!!');
//     isNumberInteger = Number.isInteger(number);
//     console.log(number);
// }



// let firstNumber = +prompt('Введите первое число');
// let secondNumber = +prompt('Введите второе число');
// let operationNumber = prompt('Введите операцию +,-,*,/, ');
//
// function calc(firstNumber, secondNumber ,operationNumber) {
// switch (operationNumber) {
//     case '+':
//         console.log(firstNumber + secondNumber);
//         break;
//     case '-':
//         console.log(firstNumber - secondNumber);
//         break;
//     case '*':
//         console.log(firstNumber * secondNumber);
//         break;
//     case '/':
//         console.log(firstNumber / secondNumber);
//         break;
// }
// }
// calc(firstNumber, secondNumber, operationNumber);


// function createNewUser() {
//     let name = prompt('name');
//     let lastName = prompt('lastName');
//     const newUser = {
//         firstName: name,
//         lastName: lastName,
//         getLogin: function (){
//             return this.firstName[0]+lastName.toLowerCase();
//         }
//     }
//     return newUser;
// }
//
// console.log(createNewUser().getLogin())



// let admin;
// let name = 'Nikita';
// admin = name;
// console.log(admin);
//
// let days = 6 * 86400;
// console.log(days);
// let number = +prompt('Введите число');
// console.log(number);


// let user = prompt('enter your name');
// let age = prompt('enter age');
//
// while (isNaN(+age) || age === null) {
//     age = prompt('again', age);
// }
//
// while (user = true || user === null) {
//     user = prompt('again', user);
// }
//
// if (age < 18) {
//     alert('You are not allowed to visit this website');
// } else if (age => 18 && age <= 22) {
//     confirm('Are you sure you want to continue?');
//     if (true) {
//         alert(`Welcome, ${user}`);
//     } else {
//         alert('You are not allowed to visit this website.');
//     }
// } else {
//     alert(`Welcome, ${user}`);
// }


// let userName = prompt('What your name ?');
// function showMessage() {
//     let message = 'Привет, ' + userName;
//     alert(message);
// }
// showMessage();




function calc () {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(calk(5,10,15));





























