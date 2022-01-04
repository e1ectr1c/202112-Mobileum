const delay=require('../utils/delay');

const  sum =( ...values)=> {

	let result=0;
	
	for(const value of values){
		delay(1000);
		result+=value;
	}
	return result;
}

const x=sum(1,2,3,4);

console.log('typeof x',typeof x);

console.log('x',x);




