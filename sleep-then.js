'use strict';

const sleep = msec => new Promise(resolve =>{
    setTimeout(resolve, msec);
});

console.log('Start sleep: ' + new Date().toISOString());
console.log('sleep about 5sec');
sleep(5000).then(()=>{
    console.log('after sleep:' + new Date().toISOString());
    console.log('that`s all=)');
});

