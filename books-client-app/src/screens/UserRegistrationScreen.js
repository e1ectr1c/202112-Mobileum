import React from 'react';
import { withTitle } from '../hoc/with-title';
import withVisibility from '../hoc/with-visibility';

const UserRegistrationScreen = ({ now }) => {
  

  //let date=new Date();
  return (

    <div >

      
    </div>

  );
}
//export default BookListScreen; 
export default
  withVisibility(
      withTitle(UserRegistrationScreen, "User Registration Screen")
  );


