import {UserActions,Status} from './constants';
import userService from '../services/user-service';




export const login=(email,password)=>async dispatch=>{

    dispatch({ type: Status.WAITING})        
    try{
        let response=await userService.login(email,password);
     ///   console.log('response',response);
        dispatch({ type: Status.SUCCESS});
        dispatch({ type: UserActions.LOGIN,payload: response});
    }catch(error){
        dispatch({type: Status.ERROR, payload: error});
    }

}

export const register=(user)=>async dispatch=>{

    dispatch({ type: Status.WAITING})        
    try{
        let response=await userService.register(user);
     //   console.log('response',response);
        dispatch({ type: Status.SUCCESS});
        dispatch({ type: UserActions.LOGIN,payload: response});
    }catch(error){
        dispatch({type: Status.ERROR, payload: error});
    }
}

export const checkLogin=()=>async dispatch=>{
    const user=await userService.getLoggedInUser();
    if(user) 
        dispatch({type:UserActions.LOGIN, payload: user});
    else
        dispatch({type:UserActions.LOGOUT});
}


export const logout=()=>async dispatch =>{

    await userService.logout();
    dispatch({ type: UserActions.LOGOUT});
}