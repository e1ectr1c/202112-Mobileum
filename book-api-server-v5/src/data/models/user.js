const {DataTypes} =require('sequelize');

module.exports=(sequelize)=>{

        sequelize.define('User',{  //user by default will be mapped to a table called Users

            email:{
                type:DataTypes.STRING,
                primaryKey:true
            },
            name:DataTypes.STRING,
            photo:DataTypes.STRING,
            password:DataTypes.STRING

        });
 

};