import React,{useState} from 'react';
import { withTitle } from '../hoc/with-title';
import withVisibility from '../hoc/with-visibility';
import LabeledInput from '../components/LabeledInput';

const UserLoginScreen = ({  }) => {
 
  const [user,setUser]=useState({email:'',password:''});

  const handleUserChange=(id,value)=>{

  }

  return (

    <div className="row">
      <div className="col col-6">
        <form >
           <LabeledInput id="email" onChange={handleUserChange} label="email" value={user.email} help=' ' />
           <LabeledInput id="password" onChange={handleUserChange} label="password" type="password" value={user.password} help=" "/>
           <button type='submit' className='btn btn-primary' >Login</button>
        </form>
        </div>
        <div className="col col-6">
          <img src='/images/book-door.jpeg' alt='login image' className="login-image"/>
        </div>
    </div>

  );
}
//export default BookListScreen; 
export default
  withVisibility(
    withTitle(UserLoginScreen, "User Login Screen")
  );


