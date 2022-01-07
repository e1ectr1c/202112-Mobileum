
const getAllBooks=async()=>{

    return await [{title:'book1'},{title:'book2'},{title:'book3'}];

}

const getBookByIsbn=async(isbn)=>{
    
    if(!isbn || isNaN(isbn))
        throw new Error("invalid isbn");
    return await {isbn, title:"Dummy Title"};
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