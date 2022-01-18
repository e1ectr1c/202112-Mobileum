import React,{useState} from 'react';
import { withTitle } from '../hoc/with-title';
import withVisibility from '../hoc/with-visibility';
import LabeledInput from '../components/LabeledInput';
import bookService from '../services/book-service';
import {useNavigate} from 'react-router-dom';
import Loading from '../components/Loading';

const BookAddScreen = ({ onBookSave }) => {

    const [book,updateBook]=useState({
        isbn:'',
        title:'',
        author:'',
        cover:'',
        tags:[],
        description:'Book description',
        price:100,
        rating:3.4,
        votes:1
    });

    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(false);
    const navigate=useNavigate();

    const handleBookUpdate=(id, value)=>{
        let updatedBook={...book};
        updatedBook[id]=value;
        updateBook(updatedBook);
        
    }

    const saveBook=async(e)=>{

        e.preventDefault();//don't submit this form to server. Its a React from
        try{
            setLoading(true);
            setError(null);
            await bookService.addBook(book);
            setError(null);
            setLoading(false);
            return navigate('/book/list');
        }catch(error){
            setError(error.message);
        }
        setLoading(false);
    }


    //let date=new Date();
    return (

        <div className='row'>
            <div className="col col-6">

                <form onSubmit={saveBook}>
                    <LabeledInput onChange={handleBookUpdate} id="isbn" label="ISBN" value={book.isbn}/>
                    <LabeledInput onChange={handleBookUpdate} id="title" label="TITLE" value={book.title}/>
                    <LabeledInput onChange={handleBookUpdate} id="author" label="AUTHOR" value={book.author}/>
                    <LabeledInput onChange={handleBookUpdate} id="cover" label="COVER" value={book.cover}/>
                    
                    <button type="submit" className="btn btn-primary">Add Book</button>
                    <Loading visibility={loading} image='/images/loading.gif' />
                    <p className="text text-danger">{error}</p>
                   
                </form>

            </div>
        </div>

    );
}
//export default BookListScreen; 
export default
    withVisibility(
        withTitle(BookAddScreen, "Add New Book")
    );


