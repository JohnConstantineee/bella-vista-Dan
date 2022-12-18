// function add(c, d) {
//     console.log(this.a + this.b + c + d);
// }
//
// let ten = {a: 1, b: 2};
// add.call(ten, 3, 4);
// // logs => 10
// console.log(ten)
//
//
// add.apply(ten, [3,4]);
// // logs => 10




// class task

// class Phone {
//     constructor() {
//
//     }
//
//     call() {
//         console.log('call');
//     }
//
//     typeNumber() {
//         console.log('type number');
//     }
//
//     ring() {
//         console.log('ring');
//     }
// }
//
// class SmartPhone extends Phone {
//     constructor() {
//         super()
//         this.touchScreen = true;
//         this.cpu = '';
//         this.os = '';
//         this.camera = '';
//     }
//
//     surfInTheWeb() {
//         console.log('surf');
//     }
//
//     getMessage() {
//         console.log('message')
//     }
//
// }
//
// class Iphone extends SmartPhone {
//     constructor(camera, cpu, width, height) {
//         super();
//         this.cpu = 'apple silicon';
//         this.os = 'ios';
//         this.cpumodel = cpumodel;
//         this.width = width;
//         this.height = height;
//     }
// }
// const iPhone13 = new Iphone(3, 'a15', 80, 140);
// const iPhoneX = new Iphone(2, 'all', 70, 130);


// function Clock({ template }) {
//
//     let timer;
//
//     function render() {
//         let date = new Date();
//
//         let hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;
//
//         let mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;
//
//         let secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;
//
//         let output = template
//             .replace('h', hours)
//             .replace('m', mins)
//             .replace('s', secs);
//
//         console.log(output);
//     }
//
//     this.stop = function() {
//         clearInterval(timer);
//     };
//
//     this.start = function() {
//         render();
//         timer = setInterval(render, 1000);
//     };
//
// }
//
// let clock = new Clock({template: 'h:m:s'});
// clock.start();
// }

class Task {
    constructor( title = '' ) {
        this.title = title;
        console.log('Происходит создание задачи');
    }
};

let task = new Task("потеряться");

console.log( typeof task );
console.log( task.title );