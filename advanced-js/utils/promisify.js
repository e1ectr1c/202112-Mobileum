
module.exports= ( target )=>{

    return (...params)=>{

        return new Promise((resolve,reject)=>{

            target(...params, (error,data)=>{
                if(error)
                    reject(error);
                else
                    resolve(data);
            });

        })

    }
}