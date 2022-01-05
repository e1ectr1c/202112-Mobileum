const {Transform}=require('stream');

class MapStream extends Transform{
    constructor(mapFunction){
        super();
        this.mapFunction=mapFunction;
    }

    _transform(chunk,encoding,callback){

        const obj=JSON.parse(chunk.toString());

        const output = this.mapFunction(obj);

        this.push(Buffer.from(output.toString()));

        callback();
    }
}

const createMapStream=(mapper)=> new MapStream(mapper);

module.exports={
    MapStream,
    createMapStream
};