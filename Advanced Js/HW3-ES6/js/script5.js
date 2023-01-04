const books = [{
    name: 'Harry Potter',
    author: 'J.K. Rowling'
}, {
    name: 'Lord of the rings',
    author: 'J.R.R. Tolkien'
}, {
    name: 'The witcher',
    author: 'Andrzej Sapkowski'
}];

const bookToAdd = {
    name: 'Game of thrones',
    author: 'George R. R. Martin'
}

const newBookList = [...books,bookToAdd];
console.log(newBookList);


// Дано масив книг.
// Вам потрібно додати до нього ще одну книгу, не змінюючи існуючий масив (в результаті операції має бути створено новий масив).
