let numFirst = +prompt('Введите первое число');
let numSecond = +prompt('Введите второе число');
let operator = prompt('Введите знак операции');

function calc(numFirst, numSecond, operator) {
    return eval(`${numFirst}` + operator + `${numSecond}`);
}

alert(calc(numFirst, numSecond, operator));
console.log(calc(numFirst,numSecond,operator));