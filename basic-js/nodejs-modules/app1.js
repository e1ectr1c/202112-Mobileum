const bookModule=require("./bms/book");
const bookManagerModule=require("./bms/book-manager");

console.log('bookManagerModule',bookModule.name);

const book1=new bookModule.Book('The Accursed God','Vivek Dutta Mishra', 399, 4.1);

console.log('book1',book1);









// let bookManager=new BookManager();

// bookManager.addBooks(
//     new Book('The Accursed God','Vivek Dutta Mishra', 399, 4.1),
//     new Book('The Count of Monte Cristo','Alexandre Dumas', 299, 4.5),
//     new Book('Kane And Abel','Jeffrey Archer', 300, 4),
//     new Book('Brethren','John Grisham', 350, 4),
//     new Book('Sons of Fortune','Jeffrey Archer', 199, 3.9)

// );


// //bookManager.printBooks("All Books");

// //bookManager.getBooksByAuthor('archer').print('Arhcer books');


// const result=bookManager
//             .getAllBooks()
//             .search(b=>b.price>=300)
//             .search(b=>b.rating>=4)
//             .select(b=> ({title:b.title, price:b.price, rating:b.rating}))
//             //.each(s=>console.log(s));
//             .each(console.log);
            

