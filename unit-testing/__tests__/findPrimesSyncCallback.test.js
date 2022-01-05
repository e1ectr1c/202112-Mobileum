const {findPrimesSyncCallback}= require('../lib/primes-utils');

it('should return 4 primes under 10',()=>{

    const result=findPrimesSyncCallback(0,10,(result)=>{
        expect(result.primes.length).toBe(4);

    });
})


