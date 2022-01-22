import React,{useEffect} from 'react';
//import {withRouter} from 'react-router-dom'; //removed in react-router-dom v6
import {useParams,useNavigate,Navigate} from 'react-router-dom'; //rem

import Loading from '../components/Loading';
import {useSelector,useDispatch} from 'react-redux';
import {getBookByIsbn} from '../store/book-actions';
import {Status} from '../store/constants';




const BookDetailsScreen = (props) => {
    //TODO: Initialize Here
    const params=useParams();
    
    const navigate=useNavigate();
    const {status,selectedBook}=useSelector(s=>s);

    const dispatch=useDispatch();

    useEffect(()=>{
        console.log('getting books');
        getBookByIsbn(params.isbn)(dispatch);
    },[params.isbn]);

    if(status.status===Status.ERROR){
        // navigate("/not-found?error=No book with given isbn&key="+params.isbn);
        // return null;
        return <Navigate to={`/not-found?error=No book with given isbn&key=${params.isbn}`} />;
    }

    console.log('status',status);

    const book=selectedBook;


    if(book===null || status.status===Status.WAITING) 
            return <Loading title={`searching isbn: ${params.isbn}`} />

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