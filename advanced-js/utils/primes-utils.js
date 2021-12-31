
const isPrimeSync=(number)=>{
    if(number<2)
        return false;
    for(let i=2;i<number;i++)
        if(number%i===0)
            return false;

    return true;
}

const findPrimesSync=(min,max)=>{
    let result=[];

    for(let i=min;i<max;i++){
        if(isPrimeSync(i))
            result.push(i);
    }

    return result;
}


const findPrimesSyncCallback=(min,max,cb)=>{
    let result=[];

    for(let i=min;i<max;i++){
        if(isPrimeSync(i))
            result.push(i);
    }

    cb(result);
}



const findPrimes=(min,max,cb)=>{
    let result=[];

    setTimeout(()=>{
        for(let i=min;i<max;i++){
            if(isPrimeSync(i))
                result.push(i);
        }
    
        cb(result);
    },500);
    
}







module.exports={
    isPrimeSync,
    findPrimesSync,
    findPrimesSyncCallback,
    findPrimes
}