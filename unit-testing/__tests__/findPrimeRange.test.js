const {findPrimeRange}= require('../lib/primes-utils');
const {asyncAssert}=require('../lib/test-helper');


describe('findPrimeRange tests',()=>{

    it('should return 1229 primes under 10000',(cb)=>{

        findPrimeRange(0,10000,(error,result)=>{
            
            expect(error).toBeNull();
            expect(result.primes.length).toBe(1229);
            cb();
        });
    });

    it('should return 4 primes under 10',(cb)=>{

        findPrimeRange(0,10,(error,result)=>{
            try{
                expect(error).toBeNull();
                expect(result.primes.length).toBe(4); //throws exception
                
                cb(); //test passed

            }catch(ex){
                cb(ex); // test failed with given reason
            }
        });
    });

    it('should return 25 primes under 100', cb=>{

        findPrimeRange(0,100, asyncAssert(cb,(error,result)=>{

            expect(result.primes.length).toBe(25);
        }));
    });





    

    it('should give error for invalid range',(cb)=>{

        findPrimeRange(10,0, (error,result)=>{
            try{
            expect(result).toBeUndefined();
            expect(error.message).toContain('Invalid range');
            cb();
            }catch(e){
                cb(e);
            }
        })

    });

});




