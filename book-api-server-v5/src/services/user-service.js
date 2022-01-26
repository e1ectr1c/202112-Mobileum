const { ResponseError, ResponseMessage } = require('../utils/http');
const { sequelize } = require('../data/connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRound = 10;
const { getEnv } = require('../utils/env');

const createToken = (data) => {


    const token = jwt.sign(data,
        getEnv('JWT_SECRET'),
        {
            expiresIn: '30s'//getEnv('JWT_EXPIRY')

        }
    );

    return token;


}


module.exports = {

    register: async ({ model }) => {
        model.password = await bcrypt.hash(model.password, saltRound);
        //console.log(model);

        const user = await sequelize.models.User.create(model);

        let data= { name: model.name, email: model.email, roles: model.roles, photo:model.photo }


        data.token=createToken({data});
        return data;
    },

    login: async({model})=>{
        console.log('login model',model);
        
        const user= await sequelize.models.User.findByPk(model.email);
        if(!user) 
            throw new ResponseError("Invalid credentials",401);

        console.log('user',user.email,user.password);
        
        const passwordResult= await bcrypt.compare(model.password,user.password);
        console.log('passwordResult',passwordResult);
        
        if(!passwordResult)
            throw new ResponseError("Invalid credentials",401);

        console.log('sending valid response');
        let data= { name: user.name, email: user.email, roles: user.roles, photo:user.photo }
        data.token=createToken({data})
        
        
        //let result= { ...data, token };   
        return data;

    },
    getAllUsers:async ()=>{
        return await sequelize.models.User.findAll();
    },

    tokenChecker:(request,response,next)=>{
        
        console.log(request.headers);
        const authorization= request.headers["authorization"];

        if(authorization){
            const token= authorization.split(" ").pop(); //remove BEARER word

            jwt.verify(token,getEnv("JWT_SECRET"),(error,user)=>{

                if(error){
                    request.authneticationError=error;
                    console.log('invalid token', error.message);
                } else{
                    
                    request.user=user;
                    console.log('adding user to request', request.user);
                }

            });           

        } else{
            console.log('no token found in the request');
        }

        next();
    },

    authenticate:async(request,response,next)=>{

        //this middleware will stop any unauthorized request.

        if(!request.user){
            // user is not authorized
            const data={
                message:"You are unauthorized to carry out this action",
                cause: request.authneticationError || "No authorization header found"
            }

            response.status(401).send(data);

        } else {
            next();  //OK! you can move to next action.
        }

    }

}