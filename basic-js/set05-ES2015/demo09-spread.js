
function sum(x,y){
    return x+y;
}

var array=[5,9,14];


//how to find sum of first two values of this array?

//ES5
var s1= sum(array[0],array[1]);
console.log('s1',s1);

//ES2015

var s2=sum(...array);  //sum(5,9,14) // ---> 14 is ignored.
console.log('s2',s2);



