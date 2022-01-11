const {ResponseError,ResponseMessage}=require('../utils/http');
const {sequelize} = require('../data/connection');


const getAllAuthors= async()=>{

    return await sequelize.models.Author.findAll({attributes:['id','name','photo']});
}

const getAuthorById = async({id})=>{
    const author=await sequelize.models.Author.findByPk(id);
    if(author)
        return author;
    else
        throw new ResponseError("Author Not Found",404,{id});
};

const addAuthor= async({model})=>{

    const response= await sequelize.models.Author.create(model);
    return response;
}

const updateAuthor=async({model})=>{

    const author= await sequelize.models.Author.findByPk(model.id);
    if(!author)
        throw new ResponseError("No Author matching the id",404, {id:model.id});
    author.biography=model.biography;
    author.photo=model.photo;
    author.save(); //save yourself back. sequelize function
    return author;

}

const deleteAuthor=async({id})=>{
    const author=await sequelize.models.Author.destroy({where:{id}});
    if(!author) 
        throw new ResponseError("No author matching the id",404,{id});
}

const getBooksByAuthor=async({id})=>{
    const author=await sequelize.models.Author.findByPk(id);
    if(!author)
        throw new ResponseError("No author matching the id",404,{id});

    let books= await author.getBooks(); //get all books by current
    return {author,books};
}


module.exports={
    getAllAuthors,
    getAuthorById,
    addAuthor,
    updateAuthor,
    deleteAuthor,
    getBooksByAuthor


};