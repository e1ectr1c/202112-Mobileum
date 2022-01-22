import React from 'react';
import {withTitle} from '../hoc/with-title';
import AuthorList from '../components/AuthorList';
import AuthorEditor from '../components/AuthorEditor';
const AuthorManageScreen=({})=>{
    //TODO: Initialize Here
    

    return (
        <div className='AuthorManageScreen'>
            <div className='row'>
                <div className='col col-3'>
                    <AuthorList/>
                </div>
                <div className='col col-9'>
                    <AuthorEditor/>
                </div>
            </div>
        </div>
    );
}

export default withTitle(AuthorManageScreen,"Manage Authors");