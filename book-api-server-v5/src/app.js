const express= require('express');
const path=require('path');
const db=require('./data/setup'); //must setup data before setting routes.
const getBookRouter=require('./routers/books-router');
const getAuthorRouter=require('./routers/author-router');
const getUserRouter=require('./routers/user-router');
const {tokenChecker} =require('./services/user-service');
const cors=require('cors');
const fs =require('fs');


const configureMiddlewares=async(app,baseDir)=>{
    app.use(express.static(path.join(baseDir, 'public')));
    app.use(express.json());
    app.use(cors());
    app.use(express.urlencoded({ extended:true}));
    app.use(tokenChecker);
    
};

const configureRoutes=async(app)=>{

    app.use('/api/books', getBookRouter());
    app.use('/api/authors', getAuthorRouter());
    app.use('/api/users',getUserRouter());


    
};

const configureSPARoute=(app, baseDir)=>{

    app.get("*", (request,response)=>{

        //for every other request send the index.html to the client
        const indexFile=path.join(baseDir,"public","index.html");
        fs.createReadStream(indexFile).pipe(response);

    });


}

const createApp=async(baseDir)=>{

    await db.setup(baseDir);
    console.log('connected to datase server...');

    const app= express();

    await configureMiddlewares(app,baseDir);

    await configureRoutes(app);

    //add after all other routes
    await configureSPARoute(app,baseDir);

    return app;
}


module.exports = {createApp}