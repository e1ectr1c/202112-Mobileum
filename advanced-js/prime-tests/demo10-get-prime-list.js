const {findPrimesEvent} =require('../utils/prime-event' );  //go to parent direction, then utils, then prime-utils

function findPrimesInRange(min,max){

    console.log(`finding primes between ${min}-${max}`);

    const event=findPrimesEvent(min, max);
    let primes=[];
    event
        .on("ERROR", e=>console.log(e.message))
        .on("PRIME", e=> primes.push(e.prime))
        .on("PROGRESS", e=>process.stdout.write(`\rcompleted : ${Math.floor(e.progress)}%`))
        .on("DONE", _=> console.log('\nprimes are :',primes));

}

findPrimesInRange(2,500);
