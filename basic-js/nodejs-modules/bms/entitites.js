const Book= function (title,author,price,rating){
    this.title=title;
    this.author=author;
    this.price=price;
    this.rating=rating;
}

const Author=function(name,photo,biography){
    this.name=name;
    this.photo=photo;
    this.biography=biography;
}

// module.exports.Book=Book;  //named export
// module.exports.Author=Author; //named export

//ES5 sytnax
// module.exports={
//     Book:Book,
//     Author:Author
// }

//ES2015 syntax
module.exports={
    Book,   //Book:Book
    Author  //Author:Author
}

