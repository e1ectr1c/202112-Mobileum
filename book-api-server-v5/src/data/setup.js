const {Sequelize, DataTypes}=require('sequelize');
const {sequelize} = require('./connection');
const {getEnv} =require('../utils/env');
const {seedData}=require('./seeder');
const fs=require('fs').promises;
const path=require('path');

//write a require for each your model like below
//require('./models/book')(sequelize); //manual
  

//automatically
const attachModels= async(baseDir)=>{
    let modelDirectory=path.join(baseDir,'src','data','models');
    let modelFiles= await fs.readdir(modelDirectory);
    console.log('modelFiles',modelFiles);
    for(let modelFile of modelFiles) {
        let modelFileFullPath=path.join(modelDirectory,modelFile);
        console.log(modelFileFullPath);
        require(modelFileFullPath)(sequelize);
    }
}

const setAssociations=async ()=>{

    const {Book,Author,Review}=sequelize.models;

    Author.hasMany(Book,{foreignKey:{ allowNull:false,name:"authorId"}});  
    Book.belongsTo(Author,{ 
        foreignKey:{
            name:'authorId',
            allowNull:false
        }
    }); //Book will automatically get a foreign key "AuthorID"

    Review.belongsTo(Book);
    Book.hasMany(Review);

};

const force=  getEnv('SYNC_FORCE')=='true';
const setup=async(baseDir)=>{

    await attachModels(baseDir); //create the models
    await setAssociations();  //set association
    //automatically create the tables if not exists
    //force true will drop table and recreate
    await sequelize.sync({
        //force:true, //this will drop current tables and reacreate them
        force
    }); 

    if(force)
        await seedData();
}


module.exports={setup};