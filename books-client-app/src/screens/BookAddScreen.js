import React, { useState } from 'react';
import { withTitle } from '../hoc/with-title';
import withVisibility from '../hoc/with-visibility';
import LabeledInput from '../components/LabeledInput';
import bookService from '../services/book-service';
import {addBook} from '../store/book-actions';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';
import Selector from '../components/Selector';
import {Status}  from '../store/constants';

import {useSelector,useDispatch} from 'react-redux';

const BookAddScreen = ({ onBookSave }) => {

    const [book, updateBook] = useState({
        isbn: '',
        title: '',
        author: '',
        authorId:'',
        cover: '',
        tags: '',
        description: '',
        price: '',
        rating: '',

        votes: 1
    });

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const dispatch=useDispatch();
    const status=useSelector(s=>s.status);

    let authors=[
                    {id:'vivek-dutta-mishra', name:'Vivek Dutta Mishra'},
                    {id:'dan-brown', name:'Dan Brown'},
                    {id:'jeffrey-archer',name:'Jeffrey Archer'}
            ];

    const handleBookUpdate = (id, value) => {
       // console.log('updating',id,value);
        
        let updatedBook = { ...book };
        updatedBook[id] = value;
        updateBook(updatedBook);

    }
    const handleAuthorChange=(id,authorId,authorName)=>{
       // console.log(id,authorId,authorName);
        
        handleBookUpdate('authorId',authorId);
        handleBookUpdate('author',authorName);
    }

    const saveBook= async(e)=>{
        e.preventDefault();//don't submit this form to server. Its a React fro
        //console.log('book.tags',book.tags);
        

        if (book.tags instanceof Array && book.tags.length===1 && book.tags[0].includes(",")) {
            book.tags = book.tags[0];
        }
        if(typeof(book.tags)=== "string")
            book.tags = book.tags.split(',');
        
        //console.log('book.tags',book.tags);
        addBook(book)(dispatch);
    }

    const saveBook0 = async (e) => {

        e.preventDefault();//don't submit this form to server. Its a React from
        try {
            setLoading(true);
            setError(null);
          //  console.log('book.tags', book.tags);
            if (book.tags instanceof Array) {
                book.tags = book.tags[0];
            }

            book.tags = book.tags.split(',');
        //    console.log('book.tags', book.tags);

         //   console.log(book);
            // await bookService.addBook(book);
            setError(null);
            setLoading(false);
            //return navigate('/book/list');
        } catch (error) {
            setError(error.message);
        }
        setLoading(false);
    }

   


    //let date=new Date();
    return (
        <div className="BookAddScreen">
            <div className='row'>
                <div className="col col-6">

                    <form onSubmit={saveBook}>
                        <LabeledInput onChange={handleBookUpdate} id="isbn" label="ISBN" value={book.isbn} />
                        <LabeledInput onChange={handleBookUpdate} id="title" label="TITLE" value={book.title} />
                        <LabeledInput onChange={handleBookUpdate} id="authorId" label="AuthorId" value={book.authorId} />
                        <LabeledInput onChange={handleBookUpdate} id="author" label="Author" value={book.author} />
                        
                        <LabeledInput onChange={handleBookUpdate} id="cover" label="COVER" value={book.cover} />
                        <LabeledInput onChange={handleBookUpdate} id="price" label="PRICE" value={book.price} />
                        <LabeledInput onChange={handleBookUpdate} id="rating" label="RATING" value={book.rating} />
                        <LabeledInput onChange={handleBookUpdate} id="tags" label="TAGS" value={book.tags} placeholder="enter comma separated value" />
                        <LabeledInput onChange={handleBookUpdate} id="description" label="DESCRIPTION" value={book.tags} placeholder="Tell us something about this book"
                            renderComponent={(inputProps) => <textarea {...inputProps}></textarea>}
                        />

                        <button type="submit" className="btn btn-primary">Add Book</button>
                        <Loading visibility={status.status===Status.WAITING} image='/images/loading.gif' />
                        {status.error&&<p className="text text-danger">{status.error.message}</p>}

                    </form>
                </div>
                <div className="col col-6" >
                    <div className='center-image'>
                        {book.cover && <img className="book-cover-preview" src={book.cover} alt="" />}
                    </div>
                </div>
            </div>
        </div>

    );
}
//export default BookListScreen; 
export default
    withVisibility(
        withTitle(BookAddScreen, "Add New Book")
    );



// <Selector onChange={handleAuthorChange} 
//                                     id="author"
//                                     label="AUTHOR"
//                                     datalist={authors} 
                                    
//                                     value={book.authorId}
//                                     valueExtractor={a=>a?.id}
//                                     labelExtractor={a=>a?.name}
//                                     />
//                         <p><br/>AUTHOR NAME</p><p><strong>{book.author}</strong></p>

