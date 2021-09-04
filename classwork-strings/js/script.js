function capitalizeAndDoublify (str) {
    str = str.toUpperCase();
    let result = '';
    for (let char of str) {
result = result + char.repeat(2);
    }
return result;
}

console.log(capitalizeAndDoublify('hello')); // HHEELLLLOO
console.log(capitalizeAndDoublify('JavaScript!')); // JJAAVVAASSCCRRIIPPTT!!

function repeat(str,qty){
    if(typeof str !== 'string') {
        throw Error('First parameter should be a string type.');
    }

    if(isNaN(qty)) {
        throw Error('Second parameter should be a number type.');
    }
    let result = '';
    for (let i = 0; i < qty; i++){
        result = result + str;
    }
    return result
}
const string = 'Hello, world!';
console.log(repeat(string, 3)); // Hello, world!Hello, world!Hello, world!
console.log(repeat(string, 1)); // Hello, world!
console.log(repeat(string, 2)); // Hello, world!Hello, world!
console.log(repeat(string, 5)); // Hello, world!Hello, world!Hello, world!Hello, world!Hello, world!
console.log(repeat(7, 5)); // Error: First parameter should be a string type.