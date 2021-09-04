const employees = [
    {
        name: 'Brandy Hambleton',
        age: 31,
        position: 'designer',
        avatar: 'https://i.pravatar.cc/250?v=1',
        isOnVacation: false,
        id: 132,
    },
    {
        name: 'Killa Shikoba',
        age: 25,
        position: 'QA',
        avatar: 'https://i.pravatar.cc/250?v=2',
        isOnVacation: false,
        tel: '+12244656767',
        id: 12,
    },
    {
        name: 'Colten Walsh',
        age: 46,
        position: 'lead developer',
        avatar: 'https://i.pravatar.cc/250?v=3',
        isOnVacation: false,
        tel: '+443236000887',
        id: 32,
    },
    {
        name: 'Stace Rounds',
        age: 16,
        position: 'intern',
        avatar: 'https://i.pravatar.cc/250?v=4',
        isOnVacation: false,
        id: 11,
    },
    {
        name: 'Joel James',
        age: 21,
        position: 'key developer',
        avatar: 'https://i.pravatar.cc/250?v=5',
        isOnVacation: true,
        tel: '+1888983923',
        id: 54,
    },
    {
        name: 'Brannon Duke',
        age: 22,
        position: 'key developer',
        avatar: 'https://i.pravatar.cc/250?v=6',
        isOnVacation: false,
        tel: '+1878734345888',
        id: 56,
    },
    {
        name: 'Arnav Crouch',
        age: 43,
        position: 'backend developer',
        avatar: 'https://i.pravatar.cc/250?v=7',
        isOnVacation: false,
        tel: '+344654546467',
        id: 516,
    },
    {
        name: 'Regan Bender',
        age: 24,
        position: 'junior developer',
        avatar: 'https://i.pravatar.cc/250?v=8',
        isOnVacation: true,
        id: 116,
    },
    {
        name: 'Esmay Johnston',
        age: 22,
        position: 'QA',
        avatar: 'https://i.pravatar.cc/250?v=9',
        isOnVacation: false,
        tel: '+12676678123',
        id: 74,
    },
];



const myFilter = employees.filter((elem, index) => {
    return elem.isOnVacation === false
});


console.log(myFilter)

const sort = myFilter.sort((a, b) => {
    console.log(a.id +' ' + b.id)
    return a.id-b.id
})

const showList = (target, arr) => {
    const resultHTML = arr.map( (elm, index) => {
        return `
            <li>
                <p class="number">${index}</p>
                <img class="avatar" src="${elm.avatar}" alt="${elm.name}'s avatar">
                <p class="name">${elm.name}</p>
                <p class="position">${elm.position}</p>
                <p class="age">Age: ${elm.age}</p>
                <p class="id">id: ${elm.id}</p>
            </li>`
    })
    target.insertAdjacentHTML('afterbegin', resultHTML);
}

showList(document.getElementById('container'), sort);
console.log(sort)

const onClick = () => {
    const value = prompt('Enter your name or number')
    console.log(value);
}

const cardElements = document.querySelectorAll('li');
cardElements.forEach(item => item.addEventListener('click', onClick));