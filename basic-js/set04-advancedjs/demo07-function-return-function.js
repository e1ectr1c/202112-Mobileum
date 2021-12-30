

const plus = function (a,b) {return a+b;}
const minus= (a,b)=> a-b;


const selectOperation= function (symbol) {

    const multiply=function (a,b) {return a*b; };
    const divide=(a,b)=>a/b; 

    if(symbol==='+')
        return plus;

    else if (symbol==='-')
        return minus;

    else if(symbol=='*')
        return multiply;

    else if(symbol==='/')
        return divide;

}

//what does this code return?
const a1 = selectOperation("*"); //it returns the plus function

console.log('typeof a1',typeof a1);  //function
console.log('a1.name',a1.name);      //multiply


const a2= selectOperation('*'); //it also returns the plus function
console.log('a1===a2',a1===a2);   //false









