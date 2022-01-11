const express= require('express');
const {requestHandler} = require('../utils/http');
const service = require('../services/author-service');

const {authorize}=require('../services/user-service');


module.exports=()=>{

    const router=express.Router();

    router
        .route("/")
        .get(requestHandler(service.getAllAuthors))
        .post(authorize,requestHandler(service.addAuthor));

    
    router
        .route("/:id")
        .get(requestHandler(service.getAuthorById))
        .put(requestHandler(service.updateAuthor))
        .delete(requestHandler(service.deleteAuthor));
        
    router
        .get("/:id/books", requestHandler(service.getBooksByAuthor))

    return router;

};

