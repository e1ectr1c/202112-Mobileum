import React, { useState, useEffect } from 'react';
import { withTitle } from '../hoc/with-title';
import withVisibility from '../hoc/with-visibility';

import {useSelector,useDispatch} from 'react-redux';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';
import {Status} from '../store/constants';

import {getAllBooks} from '../store/book-actions';



const BookListScreen = () => {

  
  const {books,status}= useSelector(state=>state);
  const dispatch=useDispatch();
  
  
  const getBooks=()=>{
    getAllBooks()(dispatch);
  }

  useEffect(()=>{
    getBooks();

  },[]);
  
  if(status.status===Status.WAITING)
      return <Loading/>

  if(status.status===Status.ERROR){
    return (<div>
              <p className="text text-danger">{status.error.message}</p>
              <button className='btn btn-primary' onClick={getBooks}>Retry</button>
            </div>)
  }

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
   
      withTitle(BookListScreen, "Recommended Books")
  
  );


