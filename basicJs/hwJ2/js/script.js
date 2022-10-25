let user = prompt('enter your name');
let age = prompt('enter your age');

while (isNaN(+age) || age === null) {
    age = prompt('again', age);
}

while (user === true || user === null) {
    user = prompt('again', user);
}

if (age < 18) {
    alert('You are not allowed to visit this website.');
} if (age > 22) {
    alert(`Welcome, ${user}`);
} if (age >= 18 && age <= 22 ) {
    if (confirm('Are you sure you want to continue?')){
        alert(`Welcome, ${user}`); }
    else {
        alert('You are not allowed to visit this website.');
    }
}

