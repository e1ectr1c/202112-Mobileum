import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {getAllAuthors,getAuthorById} from '../store/author-actions';
import {Status} from '../store/constants';


const AuthorList=({})=>{
    //TODO: Initialize Here

    const {authors,selectedAuthor:author,status} = useSelector(s=>s);
    const  dispatch=useDispatch();
    useEffect(()=>{
        if(!authors || !authors.length){
            
            dispatch(getAllAuthors());
        }

    },[]);
    
    const getClasses=( currentAuthor )=>{
        let defaultClasses='list-group-item list-group-item-action ';
       // console.log(currentBook.isbn,book.isbn, currentBook.isbn===book.isbn);
        if(author && currentAuthor.id ===author.id)
            defaultClasses+="active";

        return defaultClasses;
    }

    const handleSelect=(a)=>{
        //console.log('selected',a);
        dispatch(getAuthorById(a.id));
    }


    return (
        <div className='AuthorListScreen'>
            
            <div className="list-group">
                {authors.map(author=>(
                    
                    <button key={author.id} className={getClasses(author)}
                            onClick={()=>handleSelect(author)}
                        >
                    
                        {author.name}
                    </button>
                ))}
            </div>

        </div>
    );
}

export default AuthorList;


