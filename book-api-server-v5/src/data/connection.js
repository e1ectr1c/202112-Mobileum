const {Sequelize}=require('sequelize');
const {getEnv} =require('../utils/env');

//create a connection

const username=getEnv('DB_USER');
const password=getEnv('DB_PASSWORD');
const dbName=getEnv('DB_NAME');
const host=getEnv('DB_HOST');
const dialect=getEnv('DB_DIALECT');

console.log('password ', password);

const sequelize = new Sequelize(dbName,username,password,{
    host,
    dialect,
});



module.exports={
    Sequelize,
    sequelize
};