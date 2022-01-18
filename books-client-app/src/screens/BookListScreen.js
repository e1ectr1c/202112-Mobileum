import React, { useState, useEffect } from 'react';
import { withTitle } from '../hoc/with-title';
import withVisibility from '../hoc/with-visibility';
import { withTimer } from '../components/Timer';
import bookService from '../services/book-service';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';


const BookListScreen = () => {
  //TODO: Initialize Here
  //const books= bookService.getAllBooksSync(); //works for syncrhonous service
  // console.log('books',books);
  //  const books=bookService.getBooks();

  const [books, setBooks] = useState(null);

  useEffect(() => {

    bookService.getAllBooks().then(b => setBooks(b));


  }, []);

  if (!books)
    return <Loading />;


  //let date=new Date();
  return (

    <div className='BookListScreen container'>

      <div className='row'>
        
          {books.map(book => (
            <Link key={book.isbn} to={`/book/info/${book.isbn}`} className="col col-6 col-sm-4 col-lg-2 col-md-3">
              <img src={book.cover} alt={book.title} />
            </Link>
          ))}
        
      </div>



    </div>

  );
}
//export default BookListScreen; 
export default
  withVisibility(
    withTimer(
      withTitle(BookListScreen, "Recommended Books")
    )
  );


