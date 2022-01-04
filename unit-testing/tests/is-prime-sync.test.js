
const {isPrimeSync}=require( '../lib/primes');


test('should return true for isPrime(3)', ()=>{
    const result=isPrimeSync(3);
    console.log('result',result);
});