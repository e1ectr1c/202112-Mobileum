
function plus(x,y){
    return x+y;
}

function minus(x,y){
    return x-y;
}


function multiply(x,y){
    return x*y;
}


function divide(x,y){
    return x/y;
}

const operations=[plus,minus,multiply,divide];

var a=20, b=4;

for(var i=0;i<operations.length;i++){
    let result=operations[i] (a,b);
    console.log(a,operations[i].name, b,'=', result);
}

