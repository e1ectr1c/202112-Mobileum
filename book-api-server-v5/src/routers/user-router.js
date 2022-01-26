const  express= require('express');
const {requestHandler} =require('../utils/http');
const service=require('../services/user-service');

module.exports=()=>{
    const router=express.Router();

    router
        .route("/")
        .get(requestHandler(service.getAllUsers))
        .post(requestHandler(service.register))
        .put(requestHandler(service.login));

    return router;
}