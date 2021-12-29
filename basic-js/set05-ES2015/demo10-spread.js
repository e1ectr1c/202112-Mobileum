let set1=[1,2,3,4,5];
let set2=[6,7,8,9,10];

//how do you create set3 with all values from the other two sets?

//ES5

let set3=[];
for(var i=0;i<set1.length;i++)
    set3.push(set1[i]);
for(var i=0;i<set1.length;i++)
    set3.push(set2[i]);

console.log('set3',set3);


//ES2015

let set4=[...set1,...set2];

console.log('set4',set4);


