
import authorService from '../services/author-service';
import {AuthorActions} from './constants';


export const getAllAuthors=async()=>{

    const authors=await authorService.getAllAuthors();
    return {type:AuthorActions.LIST, payload: authors};
}

export const getAuthorById= async(id)=>{
    const author=await authorService.getAuthorById(id);
    return {type:AuthorActions.SELECT, payload: author};
}

export const addAuthor=async(author)=>{

    let result=await authorService.addAuthor(author);
    return {type:AuthorActions.ADD, payload:result};
}