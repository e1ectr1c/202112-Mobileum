const {findPrimesEvent}= require('../lib/prime-event');
const {asyncAssert}=require('../lib/test-helper');


describe('findPrimesEvent tests',()=>{


    it('should return 15 primes under 50',(cb)=>{

        var count=0;
        findPrimesEvent(0,50)
            .on("PRIME",()=>count++)
            .on("DONE", asyncAssert(cb,_=>{

                expect(count).toBe(15);
            }));

    })


    it('should return 10 primes between 50 and 100',(cb)=>{

        findPrimesEvent(50,100)
            .on("DONE", asyncAssert(cb,result=>{
                expect(result.primes).toBe(10);
            }));
    });

    it('should return error for invalid range',cb=>{

        findPrimesEvent(100,50)
            .on("ERROR",asyncAssert(cb,error=>{
                expect(error.message).toContain("Invalid range");
            }))

    });

});

