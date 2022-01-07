
const express= require('express');
const bookService=require('./book-service');
const configureBookRoute=require('./book-routes');
const path=require('path');
const {requestLogger,jsonBodyParser}=require('./middlewares');


const port=4000;

const configureMiddlewares=(app)=>{

   app.use(express.static(path.join(__dirname,'public')));


  // app.use(requestLogger);

   //app.use(jsonBodyParser); //our middleware function

    //if request contains json data
   app.use(express.json()); 
    
   //if you are submitted an html form!
   app.use(express.urlencoded({extended:true}));  







  
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






