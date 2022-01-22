import {AuthorActions} from './constants';


export const authorsReducer=( authors=[], action)=>{
    switch(action.type){
        case AuthorActions.LIST: //{type: AuthorActions.LIST, payload:[author1,author2,author3]}
            return action.payload;

        case AuthorActions.ADD: //{type: AuthorActions.ADD, payload:author}
            return [...authors,action.payload];

        case AuthorActions.REMOVE: //{type: AuthorActions.REMOVE, payload:authorId}
            return authors.filter(a=>a.id!===action.payload);


        default: return authors;
    }
}

export const selectedAuthorReducer= (author=null, action)=>{
    switch(action.type){
        case AuthorActions.SELECT: //{type: AuthorActions.SELECT, payload:author}
            return action.payload;
        default: return author;
    }
}