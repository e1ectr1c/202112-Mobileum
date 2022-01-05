const {Readable}=require('stream');
const {findPrimesEvent} =require('./prime-event');
const {Buffer}=require('buffer');

class PrimeStream extends Readable{
    constructor(min,max){
        super();
        this.min=min;
        this.max=max;
    }

    _read(){
        var _self=this;
        findPrimesEvent(_self.min,_self.max)
            .on("PRIME", info=>{
               const buffer= Buffer.from(JSON.stringify(info));
               _self.emit('data',buffer);
            })
            .on("DONE", ()=>{
                _self.emit('end');
            });

    }
}

module.exports={
    PrimeStream
};