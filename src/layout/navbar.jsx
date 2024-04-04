import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div >
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand" href="#">Users Managment </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className='btn btn-outline-light' to="/adduser">Add User</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;