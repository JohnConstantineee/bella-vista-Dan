
// const arr = [
//     'apple',
//     'orange',
//     'banana',
//     'grape',
//     'mango',
//     'kivi'];
//
// let list = document.getElementById('wrapper');
// let newList = document.createElement('ul');
// list.append(newList);
//
// newList.innerHTML = arr.map(element => <li>${element}</li>).join(' ');
//
// newList.addEventListener(click, function(event){
//     newList.append(event.target);
//     console.log(event);
// })

//2

// const arr = []
//
// function recurs (el) {
//
//     // el.classList.length ? arr.push(el.className) : false
//     el.className ? arr.push(el.className) : false
//     if (el.hasChildNodes()) {
//         for (let i = 0; i < el.children.length; i++) {
//             recurs(el.children[i])
//         }
//     }
//     return new Set(arr)
// }
//
//
// // recurs(document.body)
// console.log(recurs(document.body))


// const elements = document.querySelectorAll('body *')
//
// let arr = []
//
// elements.forEach(el => arr.push(el.className))
//
//
// console.log(new Set(arr))

