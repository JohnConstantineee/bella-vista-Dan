const imgLength = document.querySelectorAll(".images img").length;
let currentIndex = 0;
let leftArrow = document.querySelector(".arrowLeft");
leftArrow.addEventListener("click", function () {
    slide("left");
});
let rightArrow = document.querySelector(".arrowRight");
rightArrow.addEventListener("click", function () {
    slide("right");
});
let width = document.querySelector(".images").offsetWidth;
console.log(width);
const slider = document.querySelector(".slider");
function slide(direction) {
    switch (direction) {
        case "left":
            if (currentIndex > 0) {
                currentIndex--;
                slider.style.cssText = `transform: translateX( ${
                    currentIndex * width * -1
                }px)`;
            }
            break;
        case "right":
            currentIndex++;
            if (currentIndex < imgLength) {
                slider.style.cssText = `transform: translateX( ${
                    currentIndex * width * -1
                }px)`;
            } else {currentIndex--}
            break;
        default:
            false;
    }
}