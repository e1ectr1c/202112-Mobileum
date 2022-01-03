

function doSomething(value){
    if(!value) 
        throw new Error("Invalid/Missing value");

    return value*10;
}

function client(){

    let values=[2,3,0,4,8];

    try{
        for(let value of values){
            const result=doSomething(value);
            //if you reach here then function was a success
            console.log('success',result);
        }
    }catch(error){
        console.error('error : ',error.message);
    }
}

client();