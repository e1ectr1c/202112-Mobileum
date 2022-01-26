import {booksReducer, selectedBookReducer} from './book-reducers';
import {userReducer} from './user-reducer';
import {authorsReducer,selectedAuthorReducer} from './author-reducer';
import {statusReducer} from './status-reducer';
import {combineReducers,createStore,compose, applyMiddleware} from 'redux';
import {doNothingMiddleware,actionLogger,handlePromiseWithStatus} from './middlewares';
import {BookActions,AuthorActions} from './constants';

const reducers=combineReducers({

    books:booksReducer,
    selectedBook:selectedBookReducer,
    authors:authorsReducer,
    selectedAuthor:selectedAuthorReducer,
    user:userReducer,
    status:statusReducer

});


//add supprot for redux in Chrome React Dev toLocaleTimeString
//adds redux feature to compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducers,
            composeEnhancers(
                applyMiddleware(
                    doNothingMiddleware,
                    handlePromiseWithStatus,
                    actionLogger(AuthorActions.LIST),
                    
                    )
            )
);

