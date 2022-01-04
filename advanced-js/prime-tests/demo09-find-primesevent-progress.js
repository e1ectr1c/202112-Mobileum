const {findPrimesEvent} =require('../utils/prime-event' );  //go to parent direction, then utils, then prime-utils

function findPrimesInRange(min,max){

    console.log(`finding primes between ${min}-${max}`);

    const event=findPrimesEvent(min, max);

    event
        .on("ERROR", e=>console.log(e.message))
        .on("PROGRESS", e=>process.stdout.write(`\rcompleted : ${Math.floor(e.progress)}%`))
        .on("DONE", d=> console.log(`\ntotal primes between ${d.min}-${d.max} is ${d.primes}`));

}

findPrimesInRange(2,150000);
