import React,{useState} from 'react';
import { withTitle } from '../hoc/with-title';
import withVisibility from '../hoc/with-visibility';
import LabeledInput from '../components/LabeledInput';
import userService from '../services/user-service';
import Loading from '../components/Loading';

const UserLoginScreen = ({  }) => {
 
  const [user,setUser]=useState({email:'',password:''});
  const [loading,setLoading] = useState(false);
  const[error,setError] = useState(null);

  const handleUserChange=(id,value)=>{
      let u={...user};
      u[id]=value;
      setUser(u);
  }

  const handleLogin=async(e)=>{
    e.preventDefault();//don't submit this form to server. Its a React from'
    try{
      setError(null);
      setLoading(true);
      let u = await userService.login(user.email,user.password);
      setError(false);
    } catch(error){
      setError(error.message);
    }
    setLoading(false);
    
  }

  return (

    <div className="row">
      <div className="col col-6">
        <form onSubmit={handleLogin} >
           <LabeledInput id="email" onChange={handleUserChange} label="email" value={user.email} help=' ' />
           <LabeledInput id="password" onChange={handleUserChange} label="password" type="password" value={user.password} help=" "/>
           <button type='submit' className='btn btn-primary' >Login</button>
           <Loading image="/images/loading.gif" visibility={loading}/>
           <span className='text text-danger'>{error}</span>
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


