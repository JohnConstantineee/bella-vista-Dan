let name = prompt ('Hello, user, whats your name?');
let age = prompt(' and age?');

if (age < 18) {
    alert('You are not allowed to visit this website.');

} if (age > 22) {
    alert('Welcome:' + name);
} if (age >= 18 && age <= 22 ) {
if (confirm('Are you sure you want to continue?')){
     alert('Welcome:' + name) }
     else {
        alert('You are not allowed to visit this website.');
    }
}