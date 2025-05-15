import React from 'react'
import {  Outlet } from 'react-router-dom'
import Navitem from './Navitem'

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    {/* <Link className="navbar-brand active"><img src="https://static.insurancedekho.com/pwa/img/id-main-logo.svg" alt="" width="100px" to="/"></img></Link> */}

    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    
     <Navitem/>
     
  </div>
</nav>
<Outlet/>
    </div>
  )
}

export default Navbar
