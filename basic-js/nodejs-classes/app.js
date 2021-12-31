const {AuthorManager,Author}=require("./author");
const {Book,BookManager}=require("./book");


const bookManager=new BookManager();
const authorManager=new AuthorManager();

bookManager.addBooks(
    new Book('The Accursed God','Vivek Dutta Mishra', 399, 4.1),
    new Book('The Count of Monte Cristo','Alexandre Dumas', 299, 4.5)
);

authorManager.addAuthors(
    new Author('Vivek Dutta Mishra','vivek.jpg','Author of The Lost Epic Series'),
    new Author('Alexandre Dumas','alexandre.jpg','One of the greatest classic authors of all time')
);

console.log('All Books');
bookManager.getAllBooks().forEach(b=>console.log(b.title));

console.log('\n\nAll Authors');
authorManager.getAllAuthors().forEach(({name})=>console.log(name));


