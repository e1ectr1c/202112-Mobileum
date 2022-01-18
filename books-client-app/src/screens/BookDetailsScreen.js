import React,{useState,useEffect} from 'react';
//import {withRouter} from 'react-router-dom'; //removed in react-router-dom v6
import {useParams,useNavigate} from 'react-router-dom'; //rem

import {Timer} from '../components/Timer';
import withVisibility from '../hoc/with-visibility';
import Loading from '../components/Loading';
import service from '../services/book-service';

const BookDetailsScreen = (props) => {
    //TODO: Initialize Here
    const params=useParams();
    const [book,setBook]=useState(null);
    const navigate=useNavigate();

    console.log('navigate',navigate);
    

    useEffect(()=>{

        service
            .getBookByIsbn(params.isbn)
            .then(setBook);

    },[params.isbn]);

    //if book is not found
    if(book===undefined){
        navigate("/not-found?isbn="+params.isbn);
        return null;
    }

    
    if(book===null) return <Loading title={`searching isbn: ${params.isbn}`} />

    return (

        <div>
            <h1>{book.title}</h1>
            <div className='BookDetailsScreen'>
                <h3>by {book.author}</h3>
                <div className='row'>
                    <div className='col col-7'>
                        <h3>Meta</h3>
                        <ul>
                            <li>ISBN: {book.isbn}</li>
                            <li>Price: {book.price}</li>
                            <li>Rating: {book.rating} / 5 ({book.votes}votes)</li>
                        </ul>
                        {book.tags.map(tag => <span key={tag} className='badge badge-secondary'>{tag}</span>)}
                        <h3>Details</h3>
                        <p>{book.description}</p>
                    </div>
                    <div className='col col-5'>
                        <img src={book.cover} alt={book.title} />
                    </div>

                </div>
            </div>
        </div>

    );
}

export default BookDetailsScreen;