let firstNumber = +prompt('Введите первое число');
let secondNumber = +prompt('Введите второе число');
let operationNumber = prompt('Введите операцию +,-,*,/, ');

function calc(firstNumber, secondNumber ,operationNumber) {
    switch (operationNumber) {
        case '+':
            console.log(firstNumber + secondNumber);
            break;
        case '-':
            console.log(firstNumber - secondNumber);
            break;
        case '*':
            console.log(firstNumber * secondNumber);
            break;
        case '/':
            console.log(firstNumber / secondNumber);
            break;
    }
}
calc(firstNumber, secondNumber, operationNumber);
