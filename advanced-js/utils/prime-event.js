const {isPrimeSync} =require( './primes-utils.js');

const EventEmitter = require('events');


const findPrimesEvent=(min,max)=>{

    let event=new EventEmitter();
    
    setTimeout(()=>{

        if(min>=max){
            return event.emit('ERROR', new Error(`Invalid range ${min}-${max}`));
        }

        let lo=min;
        let hi=Math.min(lo+1000,max);
        let count=0;
        const iid=setInterval(()=>{

            for(let i=lo;i<hi;i++){
                if(isPrimeSync(i))
                    event.emit("PRIME", {index:++count, prime:i, min,max});
            }

            let progress= (hi-min)/(max-min)*100;
            event.emit("PROGRESS", {min,max,progress});

            if(hi===max){
                clearInterval(iid);
                return event.emit("DONE",{min,max,primes:count});
            } else {
                lo=hi;
                hi=Math.min(lo+1000,max);
            }

        },10);
    },10);


    return event;
}

module.exports={
    findPrimesEvent
}