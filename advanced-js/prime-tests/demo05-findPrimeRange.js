const {findPrimeRange} =require('../utils/primes-utils.js' );  //go to parent direction, then utils, then prime-utils



const findPrimesInRange=(min,max)=>{

    console.log(`finding primes between ${min}-${max}`);

    findPrimeRange(min, max, function(error,result){
        if(error) 
            console.log(`${error.message}`);
        else
            console.log(`Total primes between ${result.min}-${result.max} is ${result.primes.length}`);
    });
}

findPrimesInRange(2,500000);
findPrimesInRange(2,10000);
findPrimesInRange(10,2);
findPrimesInRange(2,100000);
