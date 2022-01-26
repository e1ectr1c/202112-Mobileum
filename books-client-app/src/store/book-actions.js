
import { BookActions, Status } from './constants';
import bookService from '../services/book-service';
import delay from '../utils/delay';

export const getAllBooks = () => {

    return async dispatch => {
        //actual logic here

        dispatch({ type: Status.WAITING });
        try {
          //  await delay(2000);
            let books = await bookService.getAllBooks();
            dispatch({ type: BookActions.BOOK_LIST_SELECT, payload: books });
            dispatch({ type: Status.SUCCESS });
        } catch (error) {
            dispatch({ type: Status.ERROR, payload: error });
        }

    }
}



export const getBookByIsbn = (isbn) => async dispatch => {


    //actual logic here
    dispatch({ type: Status.WAITING });
    try {
        let book = await bookService.getBookByIsbn(isbn);
        dispatch({ type: BookActions.BOOK_SELECT, payload: book });
        dispatch({ type: Status.SUCCESS });
    } catch (error) {
        dispatch({ type: Status.ERROR, payload: error });
    }

}

export const addBook = (book) => async dispatch =>{

    dispatch({type:Status.WAITING});
    try{
        let response=await bookService.addBook(book);
        dispatch({type:BookActions.BOOK_ADD, payload:response});
        dispatch({type:Status.SUCCESS});
    } catch(error){
        dispatch({type:Status.ERROR, payload:error});
    }
}


