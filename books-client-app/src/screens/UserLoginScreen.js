import React,{useState} from 'react';
import { withTitle } from '../hoc/with-title';
import withVisibility from '../hoc/with-visibility';
import LabeledInput from '../components/LabeledInput';
import userService from '../services/user-service';
import Loading from '../components/Loading';
import {login} from '../store/user-actions';
import {Status} from '../store/constants';
import {useSelector,useDispatch} from 'react-redux';

const UserLoginScreen = ({  }) => {
 
  const [_user,setUser]=useState({email:'',password:''});
  const [loading,setLoading] = useState(false);
  const[error,setError] = useState(null);

  const {user,status}=useSelector(s=>s);
  const dispatch=useDispatch();
  

  const handleUserChange=(id,value)=>{
      let u={..._user};
      u[id]=value;
      setUser(u);
  }

  const handleLogin=async(e)=>{
    e.preventDefault();//don't submit this form to server. Its a React from'
    
    await login(_user.email,_user.password)(dispatch);
    
  }

  const handleLogin0=async(e)=>{
    e.preventDefault();//don't submit this form to server. Its a React from'
    try{
      setError(null);
      setLoading(true);
      let u = await userService.login(_user.email,_user.password);
      setError(false);
    } catch(error){
      setError(error.message);
    }
    setLoading(false);
    
  }
  if(user){
    console.log('user',user);
    
  }
  console.log('status',status);
  

  return (

    <div className="row">
      <div className="col col-6">
        <form onSubmit={handleLogin} >
           <LabeledInput id="email" onChange={handleUserChange} label="email" value={_user.email} help=' ' />
           <LabeledInput id="password" onChange={handleUserChange} label="password" type="password" value={_user.password} help=" "/>
           <button type='submit' className='btn btn-primary' >Login</button>
           <Loading image="/images/loading.gif" visibility={status.status===Status.WAITING}/>
           {status.error && <span className='text text-danger'>{status.error.message}</span>}
           {status.status===Status.SUCCESS&&<p className='text text-success'>Success</p>}
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


