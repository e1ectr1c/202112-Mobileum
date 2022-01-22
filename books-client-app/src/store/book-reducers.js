import {BookActions} from './constants';

//handles a list of books
export const booksReducer=(books=[], action)=>{

    switch(action.type){

        case BookActions.BOOK_LIST_SELECT: //{type: BookActions.BOOK_LIST_SELECT, payload:[book1,book2,book3]}
            return action.payload;

        case BookActions.BOOK_ADD: //{type: BookActions.BOOK_ADD, payload:book}
            return [...books,action.payload];

        case BookActions.BOOK_DELETE: //{type: BookActions.BOOK_DELETE, payload:isbn}
            return books.filter( b=> b.isbn!==action.payload);
            

        default: return books;
    }
}

//handles the selectedBook only
export const selectedBookReducer=(book=null, action)=>{
    switch(action.type){
        case BookActions.BOOK_SELECT: //{type: BookActions.BOOK_SELECT,payload:book or null}
            return action.payload;

        default: return book;

    }
}