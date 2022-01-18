import React from 'react';

const AppHeader = ({ title,navigate }) => {

    return (<nav className="navbar navbar-expand-lg navbar-light  AppHeader">
        <a className="navbar-brand" onClick={()=>navigate("BOOK LIST")}>{title}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#" onClick={()=>navigate("BOOK LIST")}>Books <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={()=>navigate("BOOK ADD")}>Add Book</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Members
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#" onClick={()=>navigate("USER LOGIN")}>Login</a>
                        <a className="dropdown-item" href="#" onClick={()=>navigate("USER REGISTER")}>Register</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Logout</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>);

};

export default AppHeader;