import React from 'react';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import BookListScreen  from './screens/BookListScreen';

const App=({})=>{

    return <div className="App">
               <AppHeader title="World Wide Books" />
               <div className='Screen'>
                    <BookListScreen/>
               </div>
               <AppFooter />
            </div>
};

export default App;