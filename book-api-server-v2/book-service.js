const fs = require('fs').promises;
const path=require('path');


const dbPath=path.join(__dirname,'db','books.json');

let books=[];

const loadBooks=async()=>{

    const data=await fs.readFile(dbPath);
    books=JSON.parse(data);
    
}

const saveBooks=async()=>{
    await fs.writeFile(dbPath, JSON.stringify(books,null,4));
}


const getAllBooks=()=>{
    return books;
}

const getBookByIsbn=(isbn)=>{
    return books.find(book => book.isbn==isbn);

}

const addBook=async (book)=>{
    books.push(book);
    await saveBooks();
}

const updateBook=async(book)=>{

    const dbBook = books.find(b=>b.isbn==book.isbn);
    if(!dbBook)
        throw new Error('Invalid ISBN');

    if(dbBook.title!=book.title) 
        throw new Error('Title change is not permitted');

    if(dbBook.isbn!=book.isbn) 
        throw new Error('isbn changes are not permitted');

    for(let key in dbBook){
        if(key==='title')
            continue; //ignore
            
        dbBook[key]=book[key];
    }

    await saveBooks();
    return dbBook;
}



module.exports={
    getAllBooks,
    getBookByIsbn,
    addBook,
    updateBook,
    loadBooks
}