const {DataTypes}= require('sequelize');
module.exports=(sequelize)=>{
sequelize.define("Review",
    {
        //no primary key given.
        reviewer:DataTypes.STRING, 
        rating:DataTypes.DOUBLE,
        title:DataTypes.STRING,
        review: DataTypes.STRING(2000)
    }

    );
}