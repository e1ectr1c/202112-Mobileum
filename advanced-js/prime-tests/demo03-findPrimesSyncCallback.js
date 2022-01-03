const {findPrimesSyncCallback} =require('../utils/primes-utils.js' );  //go to parent direction, then utils, then prime-utils


const findPrimes=(min,max)=>{

    console.log(`finding primes between ${min}-${max}`);

    findPrimesSyncCallback(min, max, function(result){
        //runs after we get result
        console.log(`Total primes between ${min}-${max} is ${result.length}`);
    });
}

findPrimes(2,500000);  
findPrimes(2,10000);   
findPrimes(2,100000);  


