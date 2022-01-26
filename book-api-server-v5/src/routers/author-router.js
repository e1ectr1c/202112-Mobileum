const express= require('express');
const {requestHandler} = require('../utils/http');
const service = require('../services/author-service');

const {authenticate}=require('../services/user-service');


module.exports=()=>{

    const router=express.Router();

    router
        .route("/")
        .get(requestHandler(service.getAllAuthors))
        .post(authenticate,requestHandler(service.addAuthor));

    
    router
        .route("/:id")
        .get(requestHandler(service.getAuthorById))
        .put(authenticate,requestHandler(service.updateAuthor))
        .delete(authenticate,requestHandler(service.deleteAuthor));
        
    router
        .get("/:id/books", requestHandler(service.getBooksByAuthor))

    return router;

};

