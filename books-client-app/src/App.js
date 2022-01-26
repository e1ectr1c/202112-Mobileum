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
import AuthorManageScreen from './screens/AuthorManageScreen';
import store from './store/store';
import {Provider} from 'react-redux';


const App = () => {


     return (
     <div className="App">
          <Router>
               <AppHeader title="World Wide Books"  />
               <div className='Screen'>

                    <Routes>
                         <Route path="/" element={<BookListScreen />} />
                         <Route path="/book/info/:isbn" element={<BookDetailsScreen/>} />
                         <Route path="/book/list" element={<BookListScreen />} />
                         <Route path="/book/add" element={<BookAddScreen />} />
                         <Route path="/author/manage" element={<AuthorManageScreen/>} />

                         <Route path="/user/login" element={<UserLoginScreen />} />
                         <Route path="/user/register" element={<UserRegistrationScreen />} />

                         <Route path='/not-found' element={<NotFoundScreen />} />

                         <Route path="*" element={<NotFoundScreen />} />
                    </Routes>


               </div>
               <AppFooter />
          </Router>
     </div>)
};


const ReduxApp=()=>{

     return (
          <Provider store={store}>
               <App/>
          </Provider>

     );
}



export default ReduxApp;