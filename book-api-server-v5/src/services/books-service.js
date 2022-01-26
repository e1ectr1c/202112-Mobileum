const {sequelize} = require('../data/connection');

//console.log('sequelize.models',sequelize.models);


const {ResponseError,ResponseMessage} = require('../utils/http');


//console.log('db',db);
const getAllBooks=async()=>{
    const {Book} =sequelize.models;
    //const result=await db.query('SELECT * FROM books');
    //console.log('result',result);

    const books=await Book.findAll({attributes:['isbn','title','author','price','rating','cover']});
    return books;

}

const getBookByIsbn=async(isbn)=>{
    const {Book} =sequelize.models;
   // const book= await Book.findOne({where:{isbn:isbn}});
   const book=await Book.findByPk(isbn);
    if(book)
        return book;
    else
        //throw new Error('Book Not Found');
        throw new ResponseError('Book Not Found',404);
}

const addBook=async(book)=>{
    console.log('book',book);
    const {Book} =sequelize.models;
    const dbBook=await Book.create(book); //create and save to data base
    return new ResponseMessage(dbBook,201,{location:`/api/books/${dbBook.isbn}`});
}
const updateBook=async({model})=>{

    const book= await sequelize.models.Book.findByPk(model.isbn);
    if(!book)
        throw new ResponseError("No Book matching the isbn",404, {isbn:model.isbn});
    book.price=model.price;
    book.cover=model.cover;
    book.rating=model.rating;
    book.votes=model.votes;
    book.description=model.description;
    book.tags=model.tags;
    book.title=model.title;
    book.author=model.author;
    book.authorId=model.authorId;
    
    book.save(); //save yourself back. sequelize function
    return book;

}

const deleteBook=async({isbn})=>{
    const author=await sequelize.models.Book.destroy({where:{isbn}});
    if(!author) 
        throw new ResponseError("No book with matching isbn",404,{isbn});
}


module.exports={
    getAllBooks,
    getBookByIsbn,
    addBook,
    updateBook,
    deleteBook
}