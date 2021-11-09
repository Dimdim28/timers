const sleep = msec => new Promise((resolve, reject) => {
    if(!msec) throw new Error('input msec');
    
    else setTimeout(resolve, msec);
});


(async()=>{
    console.log('start sleep:' + new Date().toISOString());
    console.log('sleep 3 s');
    await sleep(3000);
    console.log('After sleep: '+ new Date().toISOString());
    console.log('sleep 5 s');
    await sleep(5000);
    console.log('error')
    await sleep();
    console.log('After sleep: '+ new Date().toISOString());
    console.log('sleep 3 s');
    await sleep(3000);
    console.log('After sleep: '+ new Date().toISOString());
})();
