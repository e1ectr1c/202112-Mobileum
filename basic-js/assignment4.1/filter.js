
function isPrime(number){
	if(number<2)
		return false;
		
	for( let i=2;i<number;i++)
		if(number%i==0)
			return false;
			
	return true;

}





const  array = [2,3,9,11,8,15,4,17 ];

//const primes = array.filter( n => isPrime(n));

const primes= array.filter(isPrime);


console.log(primes) ; // [2,3,11,17]


//const alt =  array.filter ( n => array.indexOf(n)%2==0);

const alt = array.filter ((_,index)=> index%2==0 );

console.log(alt) ; // [2,9,8,4]
