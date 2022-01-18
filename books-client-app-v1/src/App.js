import React,{useState} from 'react';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import BookListScreen  from './screens/BookListScreen';
import BookDetailsScreen from './screens/BookDetailsScreen';
import BookAddScreen from './screens/BookAddScreen';
import UserLoginScreen from './screens/UserLoginScreen';
import UserRegistrationScreen from './screens/UserRegistrationScreen';
import {books} from './services/book-service';

const App=({})=>{

     const [screen,selectScreen]=useState("USER REGISTER");
     const [allBooks, updateBooks]=useState(books);
     const [book,selectBook]=useState(null);

     const handleBookSelect=(book)=>{
          selectBook(book);
          selectScreen("BOOK DETAILS");
     }

     const  handleBookSave=(book)=>{
          updateBooks([...allBooks,book]);
          selectScreen("BOOK LIST");
     }


    return <div className="App">
               <AppHeader title="World Wide Books" navigate={selectScreen} />
               <div className='Screen'>

                    <BookListScreen books={allBooks} onBookSelect={handleBookSelect}  visibility={screen==="BOOK LIST"}/>                    
                    <BookDetailsScreen book={book} visibility={screen==="BOOK DETAILS"}/>
                    <BookAddScreen onBookSave={handleBookSave} visibility={screen==="BOOK ADD"}/>
                    <UserLoginScreen visibility={screen==="USER LOGIN"}/>
                    <UserRegistrationScreen visibility={screen==="USER REGISTER"}/>
                   
               </div>
               <AppFooter />
            </div>
};

export default App;