const {DataTypes}= require('sequelize');
module.exports=(sequelize)=>{

    sequelize.define('Author',{
        id:{
            type:DataTypes.STRING,
            primaryKey:true
        },
        name:DataTypes.STRING, //255 chars
        biography: DataTypes.STRING(5000),
        photo: DataTypes.STRING
    });

}