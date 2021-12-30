
function isPrime(number){
	if(number<2)
		return false;
		
	for( let i=2;i<number;i++)
		if(number%i==0)
			return false;
			
	return true;

}

Array.prototype.search=function( match){
    let result=[];
	let index=0;
    for(let value of this){
        if(match(value,index))
            result.push(value);
		index++;
    }
    return result;
}




const  array = [2,3,9,11,8,15,4,17 ];

//const primes = array.filter( n => isPrime(n));

const primes= array.search(isPrime);


console.log(primes) ; // [2,3,11,17]


//const alt =  array.filter ( n => array.indexOf(n)%2==0);

const alt = array.search ((_,index)=> index%2==0 );

console.log(alt) ; // [2,9,8,4]
