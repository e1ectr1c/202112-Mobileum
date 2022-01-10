const {sequelize} = require('../data/connection');

//console.log('sequelize.models',sequelize.models);


const {ResponseError,ResponseMessage} = require('../utils/http');


//console.log('db',db);
const getAllBooks=async()=>{
    const {Book} =sequelize.models;
    //const result=await db.query('SELECT * FROM books');
    //console.log('result',result);

    const books=await Book.findAll();

    return books;

}

const getBookByIsbn=async(isbn)=>{
    const {Book} =sequelize.models;
    const book= await Book.findOne({where:{isbn:isbn}});
    if(book)
        return book;
    else
        //throw new Error('Book Not Found');
        throw new ResponseError('Book Not Found',404);
}

const addBook=async(book)=>{
    const {Book} =sequelize.models;
    const dbBook=await Book.create(book); //create and save to data base
    return new ResponseMessage(dbBook,201,{location:`/api/books/${dbBook.isbn}`});
}

module.exports={
    getAllBooks,
    getBookByIsbn,
    addBook
}