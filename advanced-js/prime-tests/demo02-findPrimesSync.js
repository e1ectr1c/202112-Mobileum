const {findPrimesSync} =require('../utils/primes-utils.js' );  //go to parent direction, then utils, then prime-utils


const findPrimesInRangeSync=(min,max)=>{
    console.log(`finding primes between ${min}-${max}`);
    const result= findPrimesSync(min,max);
    console.log(`Total primes between ${min}-${max} is ${result.length}`);
}

findPrimesInRangeSync(2,500000);
findPrimesInRangeSync(2,10000);
findPrimesInRangeSync(2,100000);
