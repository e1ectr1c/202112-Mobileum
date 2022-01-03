const {findPrimes} =require('../utils/primes-utils.js' );  //go to parent direction, then utils, then prime-utils


const findPrimesInRange=(min,max)=>{

    console.log(`finding primes between ${min}-${max}`);

    findPrimes(min, max, function(result){
        //runs after we get result
        console.log(`Total primes between ${min}-${max} is ${result.length}`);
    });
}

findPrimesInRange(2,500000);
findPrimesInRange(2,10000);
findPrimesInRange(2,100000);
