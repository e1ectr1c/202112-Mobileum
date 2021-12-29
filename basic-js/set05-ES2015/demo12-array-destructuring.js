

const array=[2,9,8,15,4];

//suppose I need to store first two values in variable a,b

//ES5
const a=array[0];
const b=array[1];

//ES2015 array destructuring

const [i,j]=array;  //i=array[0], j=array[1]

//what if I need 0th and 3rd value

const [x,,,y]=array; //x=array[0], y=array[3]