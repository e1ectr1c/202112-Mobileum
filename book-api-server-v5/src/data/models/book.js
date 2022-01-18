const { Sequelize, DataTypes } = require('sequelize');


module.exports=(sequelize) =>{
    //console.log('building the model Book');
    sequelize.define(
        "Book", //Name of this model
        {
            //properties of his model
            isbn: {
                type: DataTypes.STRING,
                primaryKey: true
            },
            title: DataTypes.STRING,
            author: DataTypes.STRING,
            price: DataTypes.INTEGER,
            cover: DataTypes.STRING,
            rating: DataTypes.DOUBLE,
            description: DataTypes.STRING(5000),
            tags:DataTypes.JSON,
    
        }
    );
} 