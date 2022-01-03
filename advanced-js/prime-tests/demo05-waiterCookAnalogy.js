const {findPrimes: cookPreparesFood} =require('../utils/primes-utils.js' );  //go to parent direction, then utils, then prime-utils


const waiterTakesOrder=(min,max)=>{

    console.log(`finding primes between ${min}-${max}`);

    cookPreparesFood(min, max, function(result){
        //runs after we get result
        console.log(`Total primes between ${min}-${max} is ${result.length}`);
    });
}

waiterTakesOrder(2,500000);  //waiter took first order. cook will take time to prepare food
waiterTakesOrder(2,10000);   //waiter is free to take second order
waiterTakesOrder(2,100000);  //waiter is free to take third order


//Here cook has a policy that it will prepare all order 
//in sequence or arrival (synchronously)
//waiter is working asynchronously. cook is not.

