function sleep(ms) {
    return new Promise(res => {
        setTimeout(() => res(), ms);
    })
	
}

async function start() {
	console.log('start');
    await sleep(3000);
    console.log('end');
}

start();