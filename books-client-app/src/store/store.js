import {booksReducer, selectedBookReducer} from './book-reducers';
import {userReducer} from './user-reducer';
import {authorsReducer,selectedAuthorReducer} from './author-reducer';
import {statusReducer} from './status-reducer';
import {combineReducers,createStore} from 'redux';


const reducers=combineReducers({

    books:booksReducer,
    selectedBook:selectedBookReducer,
    authors:authorsReducer,
    selectedAuthor:selectedAuthorReducer,
    user:userReducer,
    status:statusReducer

});

export default createStore(reducers);

