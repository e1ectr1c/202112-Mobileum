const service=require('../services/books-service');
const {ResponseError,ResponseMessage}=require('../utils/http');

const getAllBooks=async (request,response)=>{
    try{
        const books=await service.getAllBooks();
        response.json(books);
    }catch(error){
        response.status(400).json(error.message);
    }
};

const getBookByIsbn=async(request,response)=>{
    try{
        const book=await service.getBookByIsbn(request.params.isbn);
        response.json(book);
    }catch(error){
        //response.status(404).json({message:error.message, isbn:request.params.isbn});
        ResponseError.fromError(error).send(response);
    }
}

const addBook=async (request, response, next) => {
    try{
        const book=await service.addBook(request.body);
        //response.status(201).send(book);
        
        ResponseMessage.fromData(book).send(request,response);
    } catch(error){
        console.log('error',error);
        //response.status(400).json({message: error.message});
        ResponseError.fromError(error).send(response);
    }
}

module.exports={
    getAllBooks,getBookByIsbn,addBook
}