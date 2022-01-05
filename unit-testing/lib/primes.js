

const isPrimeSync=(number)=>{
    if(number===undefined)
        throw new Error('Missing Argument');

    if(isNaN(number))
        throw new Error('Not a Number')

    value=parseInt(number);
    if(value.toString()!==number.toString())
        throw new Error('Not an Integer');

    number=value;
    
    if(number<2)
        return false;
    for(let i=2;i<number;i++)
        if(number%i===0)
            return false;
    return true;
}

module.exports={
    isPrimeSync
}