// Our Service

document.querySelectorAll('.service-tabs-title').forEach(el => {
    el.addEventListener('click', () => {
        document.querySelectorAll('.service-tabs-title').forEach(el => el.classList.remove('active'));
        document.querySelectorAll('.service-options').forEach(el => el.classList.remove('options-active'));
        el.classList.add('active');
        document.querySelector(`.service-options[data-tab='${el.dataset.tab}']`).classList.add('options-active');
    })
})



// Our Amazing Work


const btn = document.querySelector('.btn-b')
btn.addEventListener('click',() => {
    document.querySelectorAll('.gallery-card-items').forEach(el => el.classList.add('card-active'));
    btn.style.display='none';

})


const btnAll = document.querySelector(`.service-tabs-title-b[data-work='All']`)
btnAll.addEventListener('click', () => {
    btn.style.display='';
})


document.querySelectorAll('.service-tabs-title-b').forEach(el => {
    el.addEventListener('click', () => {
        document.querySelectorAll('.service-tabs-title-b').forEach(el => el.classList.remove('items-active'));
        document.querySelectorAll('.gallery-card-items').forEach(el => el.classList.remove('card-active'));
        el.classList.add('items-active');
        document.querySelectorAll(`.gallery-card-items[data-work='${el.dataset.work}']`).forEach(el => el.classList.add('card-active'))
        if (el.dataset.work === 'All') {
            document.querySelectorAll(`.gallery-card-items[data-work='graphic-design']`).forEach(el => el.classList.add('card-active'))
            document.querySelectorAll(`.gallery-card-items[data-work='web-design']`).forEach(el => el.classList.add('card-active'))

        }
    })
})



// What people say about theHam


const imgLength = document.querySelectorAll(".slide-cat").length;
let currentIndex = 0;
let leftArrow = document.querySelector(".left-one");
leftArrow.addEventListener("click", function () {
    slide("left");
});
let rightArrow = document.querySelector(".right-one");
rightArrow.addEventListener("click", function () {
    slide("right");
});
let width = document.querySelector(".testimonial-carousel").offsetWidth;
const slider = document.querySelector(".slider");
function slide(direction) {
    switch (direction) {
        case "left":
            if (currentIndex > 0) {
                currentIndex--;
                slider.style.cssText = `transform: translateX( ${currentIndex * width * -1}px)`;
                document.querySelectorAll('.carousel-pic-item').forEach((el, index) =>{
                    if (index === currentIndex) {
                        document.querySelectorAll('.carousel-pic-item').forEach(el => el.classList.remove('carousel-active'));
                        el.classList.add('carousel-active');

                    }
                })
            }
            break;
        case "right":
            currentIndex++;
            if (currentIndex < imgLength) {
                slider.style.cssText = `transform: translateX( ${currentIndex * width * -1}px)`;
                document.querySelectorAll('.carousel-pic-item').forEach((el, index) =>{
                    if (index === currentIndex) {
                        document.querySelectorAll('.carousel-pic-item').forEach(el => el.classList.remove('carousel-active'));
                        el.classList.add('carousel-active');
                    }
                })
            } else {currentIndex--}
            break;
        default:
            false;
    }
}

document.querySelectorAll('.carousel-pic-item').forEach((el, index) => {
el.addEventListener('click', (event) => {
document.querySelectorAll('.carousel-pic-item').forEach(el => el.classList.remove('carousel-active'));
el.classList.add('carousel-active');
    currentIndex = index;
    slider.style.cssText=`transform: translateX( ${currentIndex * width * -1}px)`;
    })
})




