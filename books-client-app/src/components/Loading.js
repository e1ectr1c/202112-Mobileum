import React from 'react';
import withVisibility from '../hoc/with-visibility';

const Loading=({image,title})=>{
    //TODO: Initialize Here
    
    if(!image)
        image='/images/loading2.gif';


    return (
        <div className='Loading'>
            <img src={image} alt={title||'loading'} />
            {title}
        </div>
    );
}

export default withVisibility(Loading);