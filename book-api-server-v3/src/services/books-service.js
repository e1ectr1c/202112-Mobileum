const db = require('../data/pg-connect');

//console.log('db',db);
const getAllBooks=async()=>{

    const result=await db.query('SELECT * FROM books');
    //console.log('result',result);

    return result.rows;

}

const getBookByIsbn=async(isbn)=>{
    
    
    let query=`select * from books where isbn='${isbn}'`;
    console.log('query',query);
    const result= await db.query(query);
   // console.log('result',result);
    if(result.rowCount===0)
        throw new Error("Book Not Found");

    return result.rows[0];
}

const addBook=async(book)=>{

    book.isbn='new-isbn';
    return await book;
}

module.exports={
    getAllBooks,
    getBookByIsbn,
    addBook
}