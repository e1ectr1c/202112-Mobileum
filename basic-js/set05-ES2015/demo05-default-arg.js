

var powerES5=function(number,exp){
    if(exp===undefined)
        exp=2;
    return Math.pow(number,exp);
}

var powerES2015=function(number,exp=2){
    return Math.pow(number,exp);
}

console.log('powerES5(5,3)',powerES5(5,3));
console.log('powerES2015(5,3)',powerES2015(5,3));

console.log('powerES2015(5)',powerES2015(5)); //square of 5

console.log('powerES5(5)',powerES5(5)); //exp is undefined