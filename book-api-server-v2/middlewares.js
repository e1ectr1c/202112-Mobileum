const {promisedReadableStream}=require('./utils');



const jsonBodyParser = async (request, response, next) => {
  
  
          request.body = await promisedReadableStream(request);
        
        next();
    
};

const requestLogger=(request,response,next)=>{

    console.log(`${request.method} ${request.url}`);
    next(); //to pass to next middleware in chain
};

module.exports={
    jsonBodyParser,
    requestLogger
}