const {findPrimePromise} = require('../lib/primes-utils');

const {asyncAssert} = require('../lib/test-helper');


describe('findPrimePromise tests',()=>{


    describe('using regular callback approach',()=>{

        it('should have 4 primes under 10', (cb)=>{

            findPrimePromise(0,10)
                .then(asyncAssert(cb,result=>{

                    expect(result.primes.length).toBe(4);
                    //expect(result.primes).toContain(2,3,5,7);
                    //expect(result.primes).toEqual([2,3,5,7]);
                    //array should contain 3 and 7 and may be more values
                    expect(result.primes).toEqual(expect.arrayContaining([3,7]));

                }));


        });

        it('should reject invalid range',cb=>{

            findPrimePromise(100,1)
                .catch(asyncAssert(cb,error=>{
                    expect(error.message).toContain('Invalid range');
                }));

        });


    });


    describe('using Promise return apporach',()=>{

        it('should return 4 primes under 10', ()=>{

            return findPrimePromise(2,10)
                        .then(data=>{
                            expect(data.primes).toEqual([2,3,5,7]);
                        });


        });

        it('should reject primes with invalid range',()=>{
            return findPrimePromise(100,1)
                    .catch(error=>{
                        expect(error.message).toContain('Invalid range');
                    });
        })


    });


    describe('using async-await approach',()=>{

        it('should return 8 primes under 20',async()=>{

            const result=await findPrimePromise(2,20);

            expect(result.primes).toEqual([2,3,5,7,11,13,17,19]);

        });

        it('should reject invalid range', async()=>{

            try{
                await findPrimePromise(20,2);
            }catch(error){
                expect(error.message).toContain('Invalid range');
            }

        });


    });

    describe('using jest matcher for promises',()=>{

        it('should return 4 primes under 10',async()=>{

            await expect(findPrimePromise(0,10))
                .resolves
                .toEqual({min:0,max:10,primes:[2,3,5,7]});

        });

        it('should reject invalid range',()=>{

            return expect(findPrimePromise(10,2))
                    .rejects
                    .toThrow(/Invalid range/);

        })

    });


})