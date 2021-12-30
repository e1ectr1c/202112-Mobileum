

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


//how do I multiply two values
const x=50, y=15;

// const m = selectOperation("*"); //returns a function
// const result= m(x,y);

const result = selectOperation('*')(x, y);

console.log(result);




