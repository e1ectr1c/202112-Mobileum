
import {Status} from './constants';

export const doNothingMiddleware = store => next => action =>{

    
 return next(action);
}

export const  actionLogger= (...actionTypes)=> store=>next=>action=>{

    if(actionTypes.includes(action.type))
        console.log(action);

    return next(action);

}

export const handlePromiseWithStatus= store =>next =>action =>{

    if(action instanceof Promise){
        //I should handle it
        store.dispatch({type:Status.WAITING});
        
        action
            .then( actualAction=>{  //on success
                store.dispatch({type:Status.SUCCESS});
                store.dispatch(actualAction);
            })
            .catch(error=>{
                store.dispatch({type:Status.ERROR,payload:error});
            });

    } else {
        // let the next guy handle it
        next(action);
    }

}