import React from "react-dom";

export default function Navbar(){
    return(
        <nav className="navbar navbar-light bg-light border-bottom">
            <div className="container-fluid">
                <h1 className="text-dark display-4">Employee-Direct</h1>
                <input type="search" className="form-control w-75 mx-auto" placeholder="Search"/>
            </div>
        </nav>
    )
}