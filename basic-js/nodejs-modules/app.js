require('./utils/array-utils');
const {Book}=require("./bms/entitites");
const BookService=require("./bms/book-manager"); //I can use any variable name here

let service=new BookService();

service.addBooks(
    new Book('The Accursed God','Vivek Dutta Mishra', 399, 4.1),
    new Book('The Count of Monte Cristo','Alexandre Dumas', 299, 4.5),
    new Book('Kane And Abel','Jeffrey Archer', 300, 4),
    new Book('Brethren','John Grisham', 350, 4),
    new Book('Sons of Fortune','Jeffrey Archer', 199, 3.9)

);

const result=service
            .getAllBooks()
            .search(b=>b.price>=300)
            .search(b=>b.rating>=4)
            .select(b=> ({title:b.title, price:b.price, rating:b.rating}))
            .each(console.log);
            

