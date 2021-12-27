
function plus(x,y){
    return x+y;
}

//function is a type
console.log('typeof plus', typeof plus);

//we can assign a function to a variable
var add=plus;

//now I can use variable as function

console.log('add(2,3)',add(2,3));
