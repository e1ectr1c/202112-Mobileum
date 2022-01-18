import React from 'react';
import {Link} from 'react-router-dom';


const MemberMenu = ({ }) => {
    //TODO: Initialize Here


    return (
        <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Members
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link className="dropdown-item" to="/user/login" >Login</Link>
                    <Link className="dropdown-item" to="/user/register" >Register</Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="#">Logout</Link>
                </div>
            </li>
        </ul>
    );
}

export default MemberMenu;