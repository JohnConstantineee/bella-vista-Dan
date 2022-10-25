const arr =  ['hello', 'world', 23, '23', null];

function filterBy(arr,type) {
   return arr.filter( item => {
       return (typeof item !== type);
    })
}
filterBy(arr,'string');
console.log(filterBy(arr,'string'));
