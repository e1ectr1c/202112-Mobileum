const Book = require("./Book");

class BookManager{
    constructor(){
        this.books=[];
    }

    getBookCount(){return this.books.length;}

    addBook(book){
        if(!book)
            throw new Error("Missing Parameter");

        
        if(!book.title)
            throw new Error("Invalid Argument: title");

        console.log('missing book.title ignored',book);
        if(!book.author)
            throw new Error("Invalid Argument: title");
        
        if(!book.isbn)
            throw new Error("Invalid Argument: isbn");

        let existingBook= this.books.find(b=>b.isbn===book.isbn);
        if(existingBook)
            throw new Error("Duplicate ISBN:"+book.isbn);

        this.books.push(book);

        return this.books.length;

    }

    getBookByIsbn(isbn){
        const book=this.books.find(b=>b.isbn===isbn);
        if(book)
            return book;
        else 
            throw new Error("Invalid ISBN: "+isbn);

    }
    
    getAllBooks(){
        return this.books;
    }
};

module.exports=BookManager;