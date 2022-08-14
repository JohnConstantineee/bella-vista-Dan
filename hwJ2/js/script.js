let user = prompt('enter your name');
let age = prompt('enter age');

while (isNaN(+age) || age === null) {
    age = prompt('again', age);
}

while (user = true || user === null) {
    user = prompt('again', user);
}

if (age < 18) {
    alert('You are not allowed to visit this website');
} else if (age => 18 && age <= 22) {
    confirm('Are you sure you want to continue?');
    if (true) {
        alert(`Welcome, ${user}`);
    } else {
        alert('You are not allowed to visit this website.');
    }
} else {
    alert(`Welcome, ${user}`);
}
