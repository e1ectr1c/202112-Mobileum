
import {UserActions} from './constants';

export const userReducer=(user=null, action)=>{

    switch(action.type){
        case UserActions.LOGIN: //{type: UserActions.LOGIN, payload:user}
            return action.payload;

        case UserActions.LOGOUT: //{type: UserActions.LOGOUT}
            return null;


        default: return user;

    }
}
