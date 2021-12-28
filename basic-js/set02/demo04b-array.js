//different type of loops for array

var array=[2,"hello",true,{x:4,y:5}];

console.log('simple for loop');
for(var i=0;i<array.length;i++)
    console.log(array[i]);


console.log('\nfor-in loop');
for(var x in array)
    console.log(x,array[x]);


console.log('\nfor-of loop');
for(var x of array)
    console.log(x);
