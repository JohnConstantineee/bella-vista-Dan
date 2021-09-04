const images = [
    {
        src: 'images/corgi/1.jpg',
        category: 'corgi'
    },    {
        src: 'images/corgi/2.jpg',
        category: 'corgi'
    },    {
        src: 'images/corgi/3.jpg',
        category: 'corgi'
    },    {
        src: 'images/corgi/4.jpg',
        category: 'corgi'
    },    {
        src: 'images/corgi/5.jpg',
        category: 'corgi'
    },    {
        src: 'images/corgi/6.jpg',
        category: 'corgi'
    },    {
        src: 'images/corgi/7.jpg',
        category: 'corgi'
    },    {
        src: 'images/corgi/8.jpg',
        category: 'corgi'
    },    {
        src: 'images/dachshund/1.jpg',
        category: 'dachshund'
    },{
        src: 'images/dachshund/2.jpg',
        category: 'dachshund'
    },{
        src: 'images/dachshund/3.jpg',
        category: 'dachshund'
    },{
        src: 'images/dachshund/4.jpg',
        category: 'dachshund'
    },{
        src: 'images/dachshund/5.jpg',
        category: 'dachshund'
    },{
        src: 'images/dachshund/6.jpg',
        category: 'dachshund'
    },{
        src: 'images/dachshund/7.jpg',
        category: 'dachshund'
    },{
        src: 'images/dachshund/8.jpg',
        category: 'dachshund'
    },{
        src: 'images/basset/1.jpg',
        category: 'basset'
    },{
        src: 'images/basset/2.jpg',
        category: 'basset'
    },{
        src: 'images/basset/3.jpg',
        category: 'basset'
    },{
        src: 'images/basset/4.jpg',
        category: 'basset'
    },{
        src: 'images/basset/5.jpg',
        category: 'basset'
    },{
        src: 'images/basset/6.jpg',
        category: 'basset'
    },{
        src: 'images/basset/7.jpg',
        category: 'basset'
    },{
        src: 'images/basset/8.jpg',
        category: 'basset'
    },
]

let perPage = 4;
let currentCategory=`all`;

const render = (arr) => {
    const mainContainer = document.querySelector('.grid');
    const sliceArray = arr.slice(0, perPage);
    const htmlArray = sliceArray.map((element) => {
        return `<img class="grid-item" src="${element.src}">`
    });
    mainContainer.innerHTML = htmlArray.join(' ');
}
render(images);

const filteredArr = (arr, category) => {
    return arr.filter((e)=> e.category === category)
}

/**
 * categoryElem
 */

console.log(filteredArr(images))

const tabsContainer = document.querySelector('.tabs');
/**
 * addEventListener('event', () =>{})
 * const event = {
 *     target: 10
 * }
 * obj.width
 */
tabsContainer.addEventListener('click', (event) => {
    const category = event.target.dataset.category;
    currentCategory = category;
    perPage = 4;
    if (category === "all" && event.target !== event.currentTarget) {
        render(images);
    } else if (event.target !== event.currentTarget) {
        const newArr = filteredArr(images, category);
        render(newArr);}
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(e => {
        e.classList.remove('active');
    });
    event.target.classList.add('active');
});

const button = document.querySelector(".load-more");
button.addEventListener(`click`, () => {
    perPage = perPage+4;
    if(currentCategory===`all`){
        render(images);
    }else{
        render(filteredArr (images, currentCategory));
    }
})
