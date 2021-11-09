'use strict';

const begin = process.hrtime.bigint();

const diff = end =>(end - begin)/1000000n;

setTimeout(() => {
    const end = process.hrtime.bigint();
    console.log('10ms: ' + diff(end));
}, 10);

setTimeout(() => {
    const end = process.hrtime.bigint();
    console.log('200ms: ' + diff(end));
}, 200);

setTimeout(() => {
    const end = process.hrtime.bigint();
    console.log('1000ms: ' + diff(end));
}, 1000);

setTimeout(() => {
    const end = process.hrtime.bigint();
    console.log('5000ms: ' + diff(end));
}, 5000);