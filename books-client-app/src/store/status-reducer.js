import {Status} from './constants'


export const statusReducer=(status={status:Status.SUCCESS}, action)=>{

    if(action.type.indexOf("STATUS_")===0){
        //it is a status action
        return {status:action.type, error:action.payload}
    } else
        return status;
}