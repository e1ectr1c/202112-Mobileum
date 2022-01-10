require('dotenv').config();

module.exports={
    
    getEnv:(key)=>{

        return process.env[key];
    }

}; 