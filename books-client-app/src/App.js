import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import BookListScreen from './screens/BookListScreen';
import BookDetailsScreen from './screens/BookDetailsScreen';
import BookAddScreen from './screens/BookAddScreen';
import UserLoginScreen from './screens/UserLoginScreen';
import UserRegistrationScreen from './screens/UserRegistrationScreen';
import HomeScreen from './screens/HomeScreen';
import NotFoundScreen from './screens/NotFoundScreen';

import { books } from './services/book-service';

const App = ({ }) => {

     const [screen, selectScreen] = useState("USER REGISTER");
     const [allBooks, updateBooks] = useState(books);
     const [book, selectBook] = useState(null);

     const handleBookSelect = (book) => {
          selectBook(book);
          selectScreen("BOOK DETAILS");
     }

     const handleBookSave = (book) => {
          updateBooks([...allBooks, book]);
          selectScreen("BOOK LIST");
     }


     return (
     <div className="App">
          <Router>
               <AppHeader title="World Wide Books" navigate={selectScreen} />
               <div className='Screen'>

                    <Routes>
                         <Route path="/" element={<HomeScreen />} />
                         <Route path="/book/list" element={<BookListScreen />} />
                         <Route path="/book/add" element={<BookAddScreen />} />

                         <Route path="/user/login" element={<UserLoginScreen />} />
                         <Route path="/user/register" element={<UserRegistrationScreen />} />

                         <Route path="*" element={<NotFoundScreen />} />
                    </Routes>


               </div>
               <AppFooter />
          </Router>
     </div>)
};

export default App;