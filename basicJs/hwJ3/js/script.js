let number = +prompt('Введите число');
for (let i = 0; i <= number; i++) {
    if (i % 5 === 0) {
        console.log( i );
    }
    console.log(number);
}
if (number < 5 ) {
    alert('Sorry, no numbers');
}