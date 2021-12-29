//params allows a function to take any number of arguments and
// all arguments passed is collected in an array
// it is like an explicit 'arguments' array

function averageES5(){
    var sum=0;
    console.log('arguments',arguments);
    for(var i=0;i<arguments.length;i++) 
        sum+=arguments[i];

    return sum/arguments.length;
}

function averageES2015(...numbers){
    let sum=0;
    console.log('numbers',numbers);
    for(let number of numbers) //ES2015 loop
        sum+=number;
    
    return sum/numbers.length;
}
console.log('averageES5(1,2,3,4)',averageES5(1,2,3,4));
console.log('averageES2015(1,2,3,4)',averageES2015(1,2,3,4));


