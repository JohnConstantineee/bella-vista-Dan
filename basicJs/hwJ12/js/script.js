const buttons = Array.from(document.querySelector('.btn-wrapper').children)

document.addEventListener('keydown',(event) =>  {
    buttons.forEach( element => {
        if (element.dataset.value === (event.code).toUpperCase() || element.dataset.value === (event.code)) {
            buttons.forEach(e => e.classList.remove('blue-background'));
            element.classList.add('blue-background');
        }
        });
});



// const menuBtn = Array.from(document.querySelector('.btn-wrapper').children)
//
// document.addEventListener('keyup', (event) => {
//     const usePress = event.code
//
//     usePress == 'Enter' ? menuBtn[0].style.backgroundColor = 'blue' : menuBtn[0].style.backgroundColor = '#000000'
//     usePress == 'KeyS' ? menuBtn[1].style.backgroundColor = 'blue' : menuBtn[1].style.backgroundColor = '#000000'
//     usePress == 'KeyE' ? menuBtn[2].style.backgroundColor = 'blue' : menuBtn[2].style.backgroundColor = '#000000'
//     usePress == 'KeyO' ? menuBtn[3].style.backgroundColor = 'blue' : menuBtn[3].style.backgroundColor = '#000000'
//     usePress == 'KeyN' ? menuBtn[4].style.backgroundColor = 'blue' : menuBtn[4].style.backgroundColor = '#000000'
//     usePress == 'KeyL' ? menuBtn[5].style.backgroundColor = 'blue' : menuBtn[5].style.backgroundColor = '#000000'
//     usePress == 'KeyZ' ? menuBtn[6].style.backgroundColor = 'blue' : menuBtn[6].style.backgroundColor = '#000000'
//
// })






