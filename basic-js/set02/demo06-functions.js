
function add(x,y){
    console.log('arguments',arguments);
    return x+y;
}

console.log('add(2,3)',add(2,3));

console.log('add(2,3,4,9,8,13)',add(2,3,4,9,8,13));

console.log('add(5)',add(5)); //same as add(5,undefined)


