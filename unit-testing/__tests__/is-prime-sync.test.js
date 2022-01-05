
const { isPrimeSync } = require('../lib/primes');
const Assert = require('assert');

xdescribe('isPrimeSync tests', () => {


    describe("isPrimeSync true value tests", () => {

        test('should return true for isPrime(13) ', () => {

            expect(isPrimeSync(13)).toBe(true);

        });


        test('should return true for isPrime(2) ', () => {

            expect(isPrimeSync(2)).toBe(true);

        });

    });

    describe('isPrimeSync false value tests', () => {

        test('should return false for isPrime(20)', () => {
            const result = isPrimeSync(20);
            Assert.deepEqual(result, false);

        });


        it('should return false for isPrime(0)', () => {
            expect(isPrimeSync(0)).toBe(false);
        });

        it('should return false for isPrime(-5)', () => {
            expect(isPrimeSync(-5)).toBe(false);
        });

    });

    describe('isPrimeSync sad path tests', () => {

        xit('should throw error if no argument is supplied',()=>{

            const result=isPrimeSync();

            //we will never reach here as it will throw an error
            //expect(...)

        });

        it('should throw error if no argument is supplied',()=>{

            try{
                isPrimeSync();
                //if we reach here exception was not thrown and test failed.
                throw new Error('expected exception not thrown');
                
            } catch(e){

                expect(e.message).toBe('Missing Argument');

            }

        });


        it('should throw error if non-numberic value is supplied',()=>{

            expect(()=> isPrimeSync('hello'))
                .toThrow(); //to throw what?

        });

        it('should throw error if argument is not integer',()=>{
            expect(()=>isPrimeSync(20.5))
                .toThrow('Integer');
        })

        

    });




});
