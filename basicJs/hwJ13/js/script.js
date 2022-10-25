let img = ['img/1.jpg','img/2.jpg','img/3.JPG.','img/4%20(1).jpg.'];

let currentSlide = 0;
let interval = null
const imagesContainer = document.querySelector('.images');
const imagesElem = document.querySelector('.images img');
imagesContainer.insertAdjacentHTML('afterend', `<div class="buttons">
  <button class="buttons-stop">Прекратить</button>
  <button class="buttons-continue">Возобновить показ</button>
</div>`);

const button = document.querySelector('.buttons-stop');
button.addEventListener('click',() => {
clearInterval(interval);
});

const buttonTwo = document.querySelector('.buttons-continue');
buttonTwo.addEventListener('click',() => {
    clearInterval(interval);
    interval = setInterval(change, 3000);
});


const start = () => {
     interval = setInterval(change,3000);
 }

 const change = () => {
     currentSlide++;
     imagesContainer.classList.add('fade-out');
     setTimeout(() => {
         imagesContainer.classList.remove('fade-out');
         imagesElem.src=img[currentSlide];
         imagesContainer.classList.add('fade-in');
     },1800);
     setTimeout(() => {
         imagesContainer.classList.remove('fade-in')
     },1800);
     if (currentSlide < img.length) {
    } else {
         currentSlide = -1
         change()
     }
 }

start()


