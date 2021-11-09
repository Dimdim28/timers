'use strict';

const { clear } = require('console');
const fs = require('fs');
const { callbackify } = require('util');

setTimeout(()=>{
    console.log('callback 1  0ms')
},0,);

setTimeout(()=>{
    console.log('callback 2  6ms')
},6 );

/*let time1 = (a) => setTimeout(()=>{
    console.log(`callback 3  ${a}ms`);
},a);

time1(5);
*/
const t4 = setInterval(()=>{
    clearInterval(t4);
    console.log('callback 4');
},7);

const t5  = setInterval(()=>{
    clearInterval(t5);
    console.log('callback 5');
},7);

process.nextTick(()=>{
    console.log('callback nexttick');
});

(callback => callback())(()=>{
    console.log('7 callback');
});

fs.readFile('./sleep.js', 'utf8', () =>{
    console.log('callback after read');
})
let time2 = (c,d) => setTimeout(()=>{
    console.log(`${d}`);
},c,d);

time2(6,"this is c");