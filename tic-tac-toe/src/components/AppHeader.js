import React from 'react';
import Clock from './Clock';

const AppHeader=(props)=>{


    return <header className="column-layout">
                <h1 className='site-title'>{props.title}</h1>
                <Clock/>
            </header>;
}


export default AppHeader;