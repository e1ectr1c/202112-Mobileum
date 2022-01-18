import React from 'react';
import withVisibility from '../hoc/with-visibility';

const Loading=({image,title, width=100})=>{
    //TODO: Initialize Here
    
    if(!image)
        image='/images/loading2.gif';

    let style={width};

    return (
        <span style={style}className='Loading'>
            <img style={style} src={image} alt={title||'loading'} />
            {title}
        </span>
    );
}

export default withVisibility(Loading);