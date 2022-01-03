
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



const findPrimesV1=(min,max,cb)=>{
    let result=[];
    setTimeout(()=>{
        //work starts later (after 500 ms)
        for(let i=min;i<max;i++){
            if(isPrimeSync(i))
                result.push(i);
        }
    
        cb(result);
    },500);

    //function returns while work is still in prograess
    //now we can use this time for next activity
    
}

const findPrimeRange=(min,max,cb)=>{
    setTimeout(()=>{
        if(min>=max)
            return cb(new Error(`Invalid range (${min}-${max})`));

        let result={min,max,primes:[]}
        let lo=min; 
        let hi= Math.min(max, lo+1000); //max or lo+1000 whichever is greater

        const iid=setInterval(()=>{
            //find primes between lo and hi
            for(let i=lo;i<hi;i++){
                if(isPrimeSync(i))
                    result.primes.push(i)
            }
            
            if(hi===max){
                //work is done
                clearInterval(iid);
                return cb(null,result); //example {min:0, max:10, primes:[2,3,5,7]}
            }

            //reset the range
            lo=hi;
            hi=Math.min(max,lo+1000);

        },100);

    },10);

}






module.exports={
    isPrimeSync,
    findPrimesSync,
    findPrimesSyncCallback,
    findPrimesV1,
    findPrimeRange
}