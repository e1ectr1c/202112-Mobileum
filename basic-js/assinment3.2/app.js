const Book= function (title,author,price,rating){
    this.title=title;
    this.author=author;
    this.price=price;
    this.rating=rating;
}

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

    this.printBooks=function(header,books=this.db){
        
        console.log(header);
        for(let book of books)
            console.log(book);
        console.log();
    }

    this.getBooksByAuthor=function(author){
        author=author.toLowerCase();
        let result=[];
        for(let book of this.db){
            if(book.author.toLowerCase()===author)
                result[result.length]=book;
        }

        return result;
    }
    this.getBooksInPriceRange=function(min,max){
        let result=[];
        for(let book of this.db){
            

            if(book.price>=min && book.price<=max)
                result[result.length]=book;
        }
        return result;
    }

    this.getBooksByRating=function(minRating){
        let result=[];
        for(let book of this.db){
            
            if(book.rating>=minRating)
                result[result.length]=book;
        }
        return result;
    }
};

let bookManager=new BookManager();

bookManager.addBooks(
    new Book('The Accursed God','Vivek Dutta Mishra', 399, 4.1),
    new Book('The Count of Monte Cristo','Alexandre Dumas', 299, 4.5),
    new Book('Kane And Abel','Jeffrey Archer', 300, 4),
    new Book('Brethren','John Grisham', 350, 4),
    new Book('Sons of Fortune','Jeffrey Archer', 199, 3.9)

);


bookManager.printBooks("All Books");

const archerBook= bookManager.getBooksByAuthor("jeffrey archer");
bookManager.printBooks("Books by Jeffrey Archer", archerBook);

const books300_400= bookManager.getBooksInPriceRange(300,400);
bookManager.printBooks("Books In price range 300-400",books300_400);

const goodBooks=bookManager.getBooksByRating(4.1);
bookManager.printBooks('Good books with rating above 4>',goodBooks);
