
var array=[2,3,5,9,6];

console.log('array',array);

console.log('array.length',array.length);

for(var i=0; i<array.length; i++){
    console.log('array[',i,']',array[i] );
    array[i]*=10;
}

console.log('array',array);

//add new items ito the array

array.push(100);

console.log('array',array);

console.log('array[100]',array[100]);

console.log('array[-10]',array[-10]);

array[10]=1000; //fills the gap with undefined

console.log('array',array);

for(var i=0; i<array.length; i++){
    console.log('array[',i,']',array[i] );
    //array[i]*=10;
}

//removing items from array



console.log('array.slice(2,5)',array.slice(2,5));
console.log('array',array);

console.log('array.splice(2,5)',array.splice(2,5));

console.log('array',array);



