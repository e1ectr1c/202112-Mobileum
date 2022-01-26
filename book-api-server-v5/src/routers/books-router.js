const express= require('express');
const {addBook,getAllBooks,getBookByIsbn,updateBook,deleteBook} = require('../controllers/books-controller');
const {authenticate} = require('../services/user-service');
const {requestHandler} =require('../utils/http');


module.exports=()=>{

    const router=express.Router();
    
    router
        .route("/")
        .get(getAllBooks)
        .post(authenticate,addBook);

    
    router
        .route("/:isbn")
        .get(getBookByIsbn)
        .put(authenticate, requestHandler(updateBook))
        .delete(authenticate, requestHandler(deleteBook))
        
        ;
        
    return router;

};

