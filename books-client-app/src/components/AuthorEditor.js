import React,{useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {addAuthor} from '../store/author-actions';


const AuthorEditor = ({ author }) => {

    let {selectedAuthor}=useSelector(s=>s);
    let dispatch=useDispatch();

    const save=()=>{
        //dispatch(addAuthor(author));
    }
  
    if(!selectedAuthor)
        return <h2>Select An author to edit</h2>;

    return (
        <div className='AuthorEditor'>
          <h2>{selectedAuthor.name}</h2>
        </div>
    );
}

export default AuthorEditor;