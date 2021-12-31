


const BookManager=function(){

    this.db=[];

    this.addBook=function(book){
            //this.books.push(book);
            this.db[this.db.length]=book;
    }

    this.addBooks=function(...books){
        this.db=[...this.db,...books];
    }

    this.getAllBooks=function(){
        return this.db;
    }

    this.printBooks=function(header=''){
        
        this.db.print(header);
    
    }

    this.getBooksByAuthor=function(author){
        author=author.toLowerCase();        
       return this.db.search(b=>b.author.toLowerCase().includes(author));
    }
    this.getBooksInPriceRange=function(min,max){

        return this.db.search( b=>b.price>=min && b.price<=max);
    }

    this.getBooksByRating=function(minRating){
        return this.db.search(b=>b.rating>=minRating);
    }
};

module.exports=BookManager; //default export

