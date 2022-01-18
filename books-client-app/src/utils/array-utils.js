

export const eachKey= function(obj){
    let result=[];
    for(let key in obj){
        result.push( {key,value:obj[key] });
    }
    return result;
}

