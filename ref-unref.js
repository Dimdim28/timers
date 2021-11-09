'use strict';

const timer = setTimeout(()=>{},10000);

console.log(timer);

if(process.argv[2] === '--unref') timer.unref();
console.dir(timer);

if(process.argv[2] === '--ref') timer.ref();
console.dir(timer);
