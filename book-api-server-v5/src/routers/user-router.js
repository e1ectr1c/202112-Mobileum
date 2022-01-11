const  express= require('express');
const {requestHandler} =require('../utils/http');
const service=require('../services/user-service');

module.exports=()=>{
    const router=express.Router();

    router
        .route("/")
        .post(requestHandler(service.register))
        .put(requestHandler(service.login));

    return router;
}