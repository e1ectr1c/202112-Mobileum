
const express= require('express');
const bookService=require('./book-service');
const configureBookRoute=require('./book-routes');
const {promisedReadableStream}=require('./utils');


const port=4000;

const configureMiddlewares=(app)=>{

    app.use((request,response,next)=>{
        console.log(`${request.method} ${request.url}`);
        next(); //to pass to next middleware in chain
    });

    app.use(async(request,response,next)=>{

        //i can add new property in the request
        request.body=await promisedReadableStream(request);
       // console.log('request.body',request.body);
        next();

    });

}


const start=async()=>{

    //step 1: load data from database
    await bookService.loadBooks();
    console.log('books loaded from database...');

    
    //step 2. creates an express app instance
    const app = express();

    //step 3. configure the middlewares
    configureMiddlewares(app);

    //step 4. configure my routes
    configureBookRoute(app);

    //step 4. start the server
    const server=app.listen(port, _=>{ 
            console.log(`server started: http://localhost:${port}`);
    });
        
    server.on('error',error=>console.error('error:',error.message))
}

start();






