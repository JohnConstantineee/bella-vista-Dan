// const p = new Promise (function(resolve, reject) {
// setTimeout(() => {
//     console.log('Preparing data...')
//     const backendData = {
//         server: 'aws',
//         post: 2000,
//         status: 'working'
//     }
//     resolve(backendData)
// },2000)
// })
//
// p.then(data => {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() =>{
//             data.modified = true
//             resolve(data)
//         }, 2000)
//     })
// })
//
// .then(clientData => {
//     console.log('Data received', clientData)
//     clientData.fromPromise = true
//     return clientData
// })
//
// .then(data => {
//     console.log('Modified', data)


/////////////////////////////////////////////////
// const sleep = ms => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), ms)
//     })
// }

// sleep(2000).then(() => console.log('After two second'))
// sleep(3000).then(() => console.log('After three second'))
// sleep(4000).then(() => console.log('After four second'))

// Promise.all([sleep(2000), sleep(5000)]) // будет выполнен только тогда когда завершаться все промисы в массиве
// .then(() => {
//     console.log('All promise')
// })
//
// Promise.race([sleep(2000), sleep(5000)]) // будет выполнен только тогда когда
//
//     .then(() => {
//         console.log('Rece promise')
//     })

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'four');
// });
//
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'two');
// });
//
// Promise.race([promise1, promise2]).then((value) => {
//     console.log(value);
//     // Both resolve, but promise2 is faster
// });