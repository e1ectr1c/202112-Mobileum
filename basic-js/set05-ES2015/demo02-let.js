
function simpleFunction(){
    //conceptually v is declared here. I can access it below this point and
    //this concept is known as hoisting of values

    for(let i=0;i<3;i++){
        console.log('v in loop',i,v);
        console.log('l in loop',i,l);
        var v=i*10;
        let l=i*10;
        console.log(i,v,l);
    }
    console.log('v',v);
    
}

simpleFunction();