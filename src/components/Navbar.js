import React from "react";

export default function Navbar(props) {
    
  return (
    <nav className="navbar sticky-top text-light bg-primary">
      <div className="container-fluid">
        <h1 className="mx-auto">
        <i class="fas fa-users"></i>   Employee<b>Direct</b></h1>
        <div className="input-group mx-auto w-50">
          <input autoComplete="off" id="search" onChange={props.handleSearch}
            type="search"
            className="px-4 form-control text-dark search-input rounded-end border-0 rounded-pill mx-auto"
            placeholder="Search Employee..."
            aria-describedby="search-icon"
          />
        </div>
      </div>
    </nav>
  );
}
