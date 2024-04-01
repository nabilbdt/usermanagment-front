import React from 'react'

function Navbar() {
  return (
    <div >
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Users Managment </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <button className='btn btn-outline-light'>Add User</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;