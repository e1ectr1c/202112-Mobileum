const Book= function (title,author,price,rating){
    this.title=title;
    this.author=author;
    this.price=price;
    this.rating=rating;
}

Array.prototype.search=function( match){
    let result=[];
    for(let value of this){
        if(match(value))
            result.push(value);
    }
    return result;
}

Array.prototype.print=function(header){
    console.log(header);
    for(let value of this){
        console.log(value);
    }
}

Array.prototype.each=function(action){
    for(let value of this)
        action(value);
};


Array.prototype.select=function(selector){
    let result=[];
    for(let value of this)
        result.push(selector(value));

    return result;
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

    this.printBooks=function(header){
        
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

let bookManager=new BookManager();

bookManager.addBooks(
    new Book('The Accursed God','Vivek Dutta Mishra', 399, 4.1),
    new Book('The Count of Monte Cristo','Alexandre Dumas', 299, 4.5),
    new Book('Kane And Abel','Jeffrey Archer', 300, 4),
    new Book('Brethren','John Grisham', 350, 4),
    new Book('Sons of Fortune','Jeffrey Archer', 199, 3.9)

);


//bookManager.printBooks("All Books");

//bookManager.getBooksByAuthor('archer').print('Arhcer books');


const result=bookManager
            .getAllBooks()
            .search(b=>b.price>=300)
            .search(b=>b.rating>=4)
            .select(b=> ({title:b.title, price:b.price, rating:b.rating}))
            //.each(s=>console.log(s));
            .each(console.log);
            

