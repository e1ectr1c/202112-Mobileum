require('dotenv').config();

if(!process.env.NODE_ENV)
    process.env.NODE_ENV = 'development'; //default mode


module.exports={
    
    getEnv:(key,defaultValue)=>{

        //always check for key_environment first
        const envKey= `${key}_${process.env.NODE_ENV.toUpperCase()}`; //DB_HOST_DEVELOPMENT
        const value= process.env[envKey] || process.env[key]; //first DB_HOST_DEVELOPMENT DB_HOST
        return value || defaultValue;
    }

}; 