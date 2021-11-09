'use strict'

const sleep = msec =>{
    const end = new Date().getTime() + msec;
    while(new Date().getTime()<end);
}
console.log('start sleep:' + new Date().toISOString());
console.log('sleep 3 s');
sleep(3000);
console.log('After sleep: '+ new Date().toISOString());
console.log('sleep 5 s');
sleep(5000);
console.log('sleep 3.2 s');
sleep(3200);