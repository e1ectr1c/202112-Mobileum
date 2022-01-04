const {findPrimesEvent} =require('../utils/prime-event' );  //go to parent direction, then utils, then prime-utils



function findPrimesInRange(min,max){

    console.log(`finding primes between ${min}-${max}`);

    const event=findPrimesEvent(min, max);

    event
        .on("ERROR", e=>console.log(e.message))
        .on("DONE", d=> console.log(`total primes between ${d.min}-${d.max} is ${d.primes}`));

}

findPrimesInRange(2,150000);
findPrimesInRange(2,10000);
findPrimesInRange(10,2);
findPrimesInRange(2,100000);
