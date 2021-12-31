const {findPrimesSyncCallback} =require('../utils/primes-utils.js' );  //go to parent direction, then utils, then prime-utils


const findPrimesInRangeSync=(min,max)=>{

    console.log(`finding primes between ${min}-${max}`);

    findPrimesSyncCallback(min, max, function(result){
        //runs after we get result
        console.log(`Total primes between ${min}-${max} is ${result.length}`);
    });
}

findPrimesInRangeSync(2,500000);
findPrimesInRangeSync(2,10000);
findPrimesInRangeSync(2,100000);
