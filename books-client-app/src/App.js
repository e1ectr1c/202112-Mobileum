import React from 'react';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import BookListScreen  from './screens/BookListScreen';
import BookDetailsScreen from './screens/BookDetailsScreen';
import BookAddScreen from './screens/BookAddScreen';
import UserLoginScreen from './screens/UserLoginScreen';
import UserRegistrationScreen from './screens/UserRegistrationScreen';


const App=({})=>{


    return <div className="App">
               <AppHeader title="World Wide Books" />
               <div className='Screen'>

                    <BookListScreen/>                    
                    <BookDetailsScreen/>
                    <BookAddScreen/>
                    <UserLoginScreen/>
                    <UserRegistrationScreen/>
                   
               </div>
               <AppFooter />
            </div>
};

export default App;