//params allows a function to take any number of arguments and
// all arguments passed is collected in an array
// it is like an explicit 'arguments' array



function test(x,y, ...params){
    console.log('x:',x,'y:',y,'params:',params,'arguments:',arguments);
}

test(1,2,3,4,5);