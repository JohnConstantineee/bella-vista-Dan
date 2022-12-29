const books = [
    {
        author: "Люсі Фолі",
        name: "Список запрошених",
        price: 70
    },
    {
        author: "Сюзанна Кларк",
        name: "Джонатан Стрейндж і м-р Норрелл",
    },
    {
        name: "Дизайн. Книга для недизайнерів.",
        price: 70
    },
    {
        author: "Алан Мур",
        name: "Неономікон",
        price: 70
    },
    {
        author: "Террі Пратчетт",
        name: "Рухомі картинки",
        price: 40
    },
    {
        author: "Анґус Гайленд",
        name: "Коти в мистецтві",
    }
];

const renderList = (list, parent = document.querySelector('#root')) => {
    const element = document.createElement('ul')
    list.map(el => {
        try {
            if (!el.author || !el.name || !el.price) {
                throw new SyntaxError("inaccurate data ")
            } else {element.innerHTML += `<li><h2>${'Author:' + ' ' + el.author}</h2><p>${'Book name:' + ' ' + el.name}</p><p>${'Price:' + ' ' + el.price}</p></li>`}

        } catch (e) {
            if (!el.author) {
                console.error(e + ', Author:' + el.author);
            }
            if (!el.name) {
                console.error(e + ', Book name:' + el.name);
            }
            if (!el.price) {
                console.error(e + ', Price:' + el.price);
            }

            }
    })

    parent.append(element)
}

renderList(books)


// const hasMissingKeys = (obj, keys) => {
//     return keys.find(e => {
//         if (obj.hasOwnProperty(e)) {
//             return false;
//         } else {
//             return e;
//         }
//     })
// }
//
// const createElementOnPage = (array) => {
//     const div = document.querySelector("#root");
//     const elementKey = ["author", "name", "price"];
//     array.map(element => {
//         try {
//             if (element.author && element.name && element.price) {
//                 div.insertAdjacentHTML("beforeend", `<ul> <li>author:${element.author}</li> <li>name:${element.name}</li> <li>price:${element.price}</li> </ul>`);
//             } else {
//                 const missingKeys = hasMissingKeys(element, elementKey);
//                 throw new Error(`undefined element - ${missingKeys}`);
//             }
//         } catch (error) {
//             console.error(error);
//         }
//     })
// }
// createElementOnPage(books);


