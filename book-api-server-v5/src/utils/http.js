

class ResponseError extends Error{
    constructor(message, statusCode=400, info={}){
        super(message);
        this.info={
            message,
            statusCode,
            ...info
        }
    }

    //convert other errors into ResponseError
    static fromError(error,statusCode=400){
        if(error instanceof ResponseError)
            return error;
        else
            return new ResponseError(error.message,statusCode,{cause:error});
    }

    send(response){
        response.status(this.info.statusCode).send(this.info);
    }
}

class ResponseMessage{
    constructor(data, statusCode,headers={}){
        this.data=data;
        this.statusCode=statusCode;
        this.headers=headers;
    }

    static fromData(data){
        if(data instanceof ResponseMessage) 
            return data;
        else
            return new ResponseMessage(data);
    }

    send(request,response){
        const responseMap={
            "get":200,
            "post":201,
            "put":202,
            "patch":202,
            "delete":204
        };

        if(!this.statusCode)
            this.statusCode= responseMap[request.method.toLowerCase()] || 200;
        
       
        for(let key in this.headers){
            response.set(key, this.headers[key]);
        }
        
        response.status(this.statusCode).send(this.data);
    }
}

const requestHandler= (serviceMethod)=>{

    const controller=async (request, response, next) => {
        try{

            const argument={
                model: request.body,
                ...request.params,
                ...request.query,
                request,
                response,
                next

            };
           // console.log('service argument',argument);
            const result=await serviceMethod(argument);   
           // console.log('response to client',result);
                            
            ResponseMessage.fromData(result).send(request,response);
        } catch(error){
           //console.log('error',error);
            
            ResponseError.fromError(error).send(response);
        }
    }

    return controller;

}



module.exports={
    ResponseError,
    ResponseMessage,
    requestHandler
};