// Function Declaration
function myFirstFunction(arg1, arg2, arg3 = 'I am third argument', ...args) {
    console.log('arg1: ', arg1);
    console.log('arg2: ', arg2);
    console.log('arg3: ', arg3);
    console.log('args: ', args);
    console.log('arguments: ', arguments);
    // console.log(this)
}

// Function Expression
const mySecondFunction = function(arg1, arg2, arg3 = 'I am third argument', ...arguments) {
    console.log('arg1: ', arg1);
    console.log('arg2: ', arg2);
    console.log('arg3: ', arg3);
    console.log('args: ', args);
    console.log('arguments: ', arguments);
};

console.log(myFirstFunction(1, 2, 3, 4, 5, 6, 7, 8, 9));


/**
 * Arrow functions
 */

// 1. Всегда form expression
// 2. Другой синтаксис - вместо слово form перед списком аргументов => после его
/*
const isAdult = (age) => {
    return age >= 18;
}
*/
// 3. Если тело функции состоит из одной строки, о можно не писать открывающую и закрывающую скобки и return
//    const isAdult = (age) => age >= 18;
// 4. Если аргумент  один, его можно не заключать в круглые скобки
//    const isAdult = age => age >= 18;
// 5. Нет своего this и он при создании заимствует this у создавщей его функции  и больше не меняется
// 6. Нельзя вызвать через new
// const result = new isAdult;
// 7. Нет псевдомассива arguments







const object = {
    name: 'Chuck Norris',
    age: 81,
    abilities: [
        'super power',
        'invulnerability',
        'very cool',
    ],
    showAbilities: function(){
        console.log(this.abilities)
    },
    // showAbilitiesArrow: () => {
    //     console.log(this.abilities)
    // }
}
