// const button = document.querySelector('.left-button');
// button.addEventListener('click', function (e){
//     console.log('Любомир лучший преподаватель ');
// });
// button.addEventListener('click', function (e) {
//     console.log('это правда!');
// });
// const buttonTwo = document.querySelector('.right-button');
// buttonTwo.addEventListener('click', function (e){
//     console.log('железно!');
// });




// const button = document.querySelector('.left-button');
// function showConsole () {
//     console.log('Hi');
//     button.removeEventListener('click', showConsole);
// }
// button.addEventListener('click', showConsole);



// const button = document.querySelector('.left-button');
// function showConsole (event) {
//     console.log(event.type);
//     console.log(event.target); // показывает обьект на котрый плользователь навел мышью.
// }
// button.addEventListener('click', showConsole);
// button.addEventListener('mouseenter', showConsole);


// const button = document.querySelector('.container');
// function showConsole (event) {
//      console.log('Hello');
//  }
//  button.addEventListener('click', function (event) {
//      if(event.target.closest('.buttons')) {
//       showConsole();
//      }
//  });

// document.addEventListener('keydown',function (event){
//     console.log(`Нажата клавиша${event.code} (${event.key})`);
// });
// document.addEventListener('keyup', function (event){
//     console.log(`Отжата клавиша${event.code} (${event.key})`);
// });

//
// document.addEventListener('keydown', function (event){
//     if (event.code === 'KeyZ' && (event.ctrlKey || event.metaKey)) {
//         console.log('Отмена действия !');  // зажали ctrl + z получили в коносле "Отмена дейсвтия !"
//     }
// })


// const buttons = document.querySelectorAll('.button');
//
// const handleClick = (event) => {
//     console.log(event.target.textContent);
// }
//
// buttons.forEach(el =>{
//     el.addEventListener('click',handleClick)
// })


// const myStrong = document.querySelector('#myStrong');
// console.log(myStrong.closest('.special-div'));


// function sayHi(phrase, who) {
//     alert( phrase + ', ' + who );
// }
//
// setTimeout(sayHi, 1000, "привет", "джон")
// setTimeout(sayHi, 2000, "пока", "джон")


// let timerId = setInterval(() => alert('tick'), 2000);

// setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);


// let start = Date.now();
// let times = [];
//
// setTimeout(function run() {
//     times.push(Date.now() - start); // запоминаем задержку от предыдущего вызова
//
//     if (start + 100 < Date.now()) alert(times); // показываем задержку > через 100 мс
//     else setTimeout(run); // если нужно ещё запланировать
// });


localStorage.setItem('myKey', 'myValue');

const localValue = localStorage.getItem('myKey');
console.log(localValue);

localStorage.removeItem("myKey");
localStorage.clear()