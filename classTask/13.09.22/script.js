document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.tree > li ul').forEach(el => el.hidden = true);
     const rootList = document.querySelector('.tree');
     rootList.addEventListener('click', function (event){
         // event.target.querySelector('ul').hidden = !event.target.querySelector('ul').hidden;
         if (event.target.querySelector('ul')) {
             // console.log(event.target.querySelector('ul').hidden);
             // console.log(!event.target.querySelector('ul').hidden);
             event.target.querySelector('ul').hidden = !event.target.querySelector('ul').hidden;
         }
     });
});




// document.addEventListener('DOMContentLoaded', function () {
//     document.querySelectorAll('.tree > li ul').forEach(el => el.hidden = true);
//     document.querySelector('.tree').addEventListener('click', function (ev){
//         ev.target.querySelector('ul') ? ev.target.querySelector('ul').hidden = !ev.target.querySelector('ul').hidden : false;
//     });
// });

let div = document.createElement('div');
div.classList.add('loader');
document.body.append(div);
document.addEventListener('readystatechange', function (){
    if(document.readyState == 'complete') {
        div.hidden = true;
    }
});
window.addEventListener('load',function (){
    div.hidden = true
})