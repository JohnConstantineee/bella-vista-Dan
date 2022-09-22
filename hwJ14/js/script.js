const info = document.querySelector('.body-background');
const images = document.querySelectorAll('.content-link-item-img');



const button = document.querySelector('.button');
button.addEventListener('click', (event) => {
    info.classList.contains('body-background') ? localStorage.setItem('gachi','boy') : localStorage.removeItem('gachi');
    info.classList.toggle('body-background');
    info.classList.toggle('body-background-change');
    info.classList.contains('body-background') ? document.querySelectorAll('.content-link-item-img')[0].src = 'img/image1.jpg' : document.querySelectorAll('.content-link-item-img')[0].src = 'img/image%200.1.jpg';
    info.classList.contains('body-background') ? document.querySelectorAll('.content-link-item-img')[1].src = 'img/image%202.jpg' : document.querySelectorAll('.content-link-item-img')[1].src = 'img/image%200.0.2.jpg';
    info.classList.contains('body-background') ? document.querySelectorAll('.content-link-item-img')[2].src = 'img/image%203.jpg' : document.querySelectorAll('.content-link-item-img')[2].src = 'img/image%200.3.png';
    info.classList.contains('body-background') ? document.querySelectorAll('.content-link-item-img')[3].src = 'img/image%204.jpg' : document.querySelectorAll('.content-link-item-img')[3].src = 'img/image%200.4.jpg';
    info.classList.contains('body-background') ? document.querySelectorAll('.content-link-item-img')[4].src = 'img/image%205.jpg' : document.querySelectorAll('.content-link-item-img')[4].src = 'img/0.5.jpg';
    info.classList.contains('body-background') ? document.querySelectorAll('.content-link-item-img')[5].src = 'img/image%206.jpg' : document.querySelectorAll('.content-link-item-img')[5].src = 'img/0.6.jpg';
    images.classList.toggle('content-link-item-img');
    images.classList.toggle('content-link-item-img-change');
});

    if(localStorage.getItem('gachi', 'boy') !== null) {
        info.classList.toggle('body-background');
        info.classList.toggle('body-background-change');
        info.classList.contains('body-background') ? document.querySelectorAll('.content-link-item-img')[0].src = 'img/image1.jpg' : document.querySelectorAll('.content-link-item-img')[0].src = 'img/image%200.1.jpg';
        info.classList.contains('body-background') ? document.querySelectorAll('.content-link-item-img')[1].src = 'img/image%202.jpg' : document.querySelectorAll('.content-link-item-img')[1].src = 'img/image%200.0.2.jpg';
        info.classList.contains('body-background') ? document.querySelectorAll('.content-link-item-img')[2].src = 'img/image%203.jpg' : document.querySelectorAll('.content-link-item-img')[2].src = 'img/image%200.3.png';
        info.classList.contains('body-background') ? document.querySelectorAll('.content-link-item-img')[3].src = 'img/image%204.jpg' : document.querySelectorAll('.content-link-item-img')[3].src = 'img/image%200.4.jpg';
        info.classList.contains('body-background') ? document.querySelectorAll('.content-link-item-img')[4].src = 'img/image%205.jpg' : document.querySelectorAll('.content-link-item-img')[4].src = 'img/0.5.jpg';
        info.classList.contains('body-background') ? document.querySelectorAll('.content-link-item-img')[5].src = 'img/image%206.jpg' : document.querySelectorAll('.content-link-item-img')[5].src = 'img/0.6.jpg';
        images.classList.toggle('content-link-item-img');
        images.classList.toggle('content-link-item-img-change');
}