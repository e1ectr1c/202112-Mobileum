

const promisedReadableStream=(stream)=>{

    return new Promise((resolve, reject)=>{

        let data='';
        stream
            .on('data', buffer=> data+=buffer.toString())
            .on('end',()=>{

                try{
                    let obj=JSON.parse(data);
                    console.log('json resolved object');
                    resolve(obj);
                    
                } catch(e){
                    console.log('normal data resturned',data);
                    resolve(data);
                }

            })
            
            
            .on('error', error=>reject(error));

    });
}

module.exports={
    promisedReadableStream
};