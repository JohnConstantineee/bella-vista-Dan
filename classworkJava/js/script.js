// /* switch */
// const userName = prompt('Введите имя пользователя');
//
// switch (userName){
// case 'mike':
//     alert('CEO');
//     console.log(`Привет ${userName} -${pos}`);
//     break;
//     case'jane':
//         alert('CTO');
//         console.log(`Привет ${userName} -${pos}`);
//         break;
//     case 'walter':
//         alert('Программист');
//         console.log(`Привет ${userName} -${pos}`);
//         break;
//     case 'oliver':
//         alert('Менеджер');
//         console.log(`Привет ${userName} -${pos}`);
//         break;
//     case 'john':
//         alert('Уборщик');
//         console.log(`Привет ${userName} -${pos}`);
//         break;
//     default:
//         pos ='Пользователь не найден'
//         console.log(pos)
// }

// const userName= prompt("Enter Name");
// if (userName === "Mike") {
//     console.log("Hello, CEO," + userName);
// }
// else if (userName === "Jane") {
//     console.log("Hello, CTO," + userName);
// }
// else if (userName ==="Walter") {
//     console.log ("hello, Programmer" + userName);
// }
// else if (userName ==="Olive") {
//     console.log ("hello, Manager" + userName);
// }
// else if (userName ==="John") {
//     console.log ("hello, Cleaner" + userName);
// }
//
// else {
//     console.log ("User Unknown");
// }

// for(let i=0; i <=300; i++){
//     if (i%2!==0){
//         if(i%5!==0)
//         console.log(i)
//     }
// }

// let first;
// let second;
// do {
//     first = +prompt("Enter the first number");
// } while (isNaN(first));
// do {
//     second = +prompt("Enter the second number");
// } while (isNaN(second));
// alert(`Вітаю! Ведені вами числа: ${first} та ${second}.`);

// let userName
// let userSurName
// let birthDate
// do {
//     userName = prompt("Enter your name");
// } while (userName ==="" || userName === null);
// do {
//     userSurName = prompt("Enter your surname");
// } while (userSurName ==="" || userSurName === null);
// do {
//     birthDate = prompt("Enter your birthday");
// } while (isNaN(birthDate) || birthDate ===0 || birthDate < 1910 || birthDate > 2021);
// console.log (`Добро пожаловать, родившийся азазазв ${birthDate}, ${userName}, ${userSurName}`);


// let fullname = null;
// let mark = null;
// let markLetter = null;
// let oneMore =
// do{
//     fullname = prompt("Введите имя_фамилию")}
// while(fullname === null || fullname.split(' ').length < 2);
// do{
//     mark = +prompt("Введите балы")
// } while (isNaN(mark) || mark < 0 || mark >100);
// if (mark < 25){
//     markLetter = 'F';
// } else if (mark < 50) {
//     markLetter = 'E';
// } else if (mark < 55){
//     markLetter = 'D';
// } else if (mark < 60){
//     markLetter = 'D+';
// }else if (mark < 65){
//     markLetter = 'C-';
// }else if (mark < 70){
//     markLetter = 'C';
// }else if (mark < 75){
//     markLetter = 'C+'
// }else if (mark < 80){
//     markLetter = 'B-'
// }else if (mark < 85){
//     markLetter = 'B'
// }else if (mark < 90){
//     markLetter = 'B+'
// }else if (mark < 95){
//     markLetter = 'A-'
// }else{
//     markLetter = 'A'
// }
// console.log(fullname, markLetter);
// oneMore = prompt('Eсть-ли необходимость сконвертировать оценку для ещё одного студента ?'). toLowerCase()
