import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import userService from '../services/user-service';

const GuestMenu = () => (
    <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Members
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/user/login" >Login</Link>
                <Link className="dropdown-item" to="/user/register" >Register</Link>               
            </div>
        </li>
    </ul>);


const UserMenu = ({user,onLogout}) => (
    <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {user.name}
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/user/profile" >Profile</Link>
                <Link className="dropdown-item" to="/user/favorites" >Favorites</Link>
                <div className="dropdown-divider"></div>
                <button className="dropdown-item" onClick={onLogout}>Logout</button>
            </div>
        </li>
    </ul>);




const MemberMenu = ({ }) => {
    //TODO: Initialize Here
    let [user, setUser] = useState(null);

    useEffect(() => {
        userService.getLoggedInUser().then(setUser);
    })

    const handleLogout = async()=>{
        await userService.logout();
        setUser(null);
    }


    if (!user)
        return <GuestMenu />;
    else
        return <UserMenu user={user} onLogout={handleLogout} />;

  
}

export default MemberMenu;