import React from 'react';
import LabeledInput from '../components/LabeledInput';
import {useLocation} from 'react-router-dom';


const NotFoundScreen=({})=>{
    //TODO: Initialize Here
    
    const location=useLocation();
  //  console.log('location',location); 
    
   const query = new URLSearchParams(location.search);
   const error=query.get('error') || "Not Found";
   const key=query.get('key') || location.pathname;
   
   
    return (
        <div className='NotFoundScreen'>
            <h1>{error} : {key}</h1>
            
            <div className='row'>
                <div className='col col-6'>
                    <h3>Please shared your feedback</h3>
                    <LabeledInput id="title" label="What were you searching for?" />
                    <LabeledInput id="details" label="Any details you would like to share?" />
                    <button type='submit' className='btn btn-primary'>Submit</button>

                </div>
                <div className='col col-4'>
                    <img src='/images/not-found-03.png' alt='Not Found' />
                </div>
            </div>
            
        </div>
    );
}

export default NotFoundScreen;