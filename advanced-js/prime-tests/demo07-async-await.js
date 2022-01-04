const { findPrimePromise } = require('../utils/primes-utils.js');  //go to parent direction, then utils, then prime-utils



async function finPrimesInRange (min, max)  {

    console.log(`finding primes between ${min}-${max}`);
    try {

        const result = await findPrimePromise(min, max);


        console.log(`total primes in range 
                        (${result.min}-${result.max}) 
                        is ${result.primes.length}`);


    } catch (error) {

        console.error(error.message)
    }
}

findPrimesInRange(2, 500000);
findPrimesInRange(2, 10000);
findPrimesInRange(10, 2);S
findPrimesInRange(2, 100000);
