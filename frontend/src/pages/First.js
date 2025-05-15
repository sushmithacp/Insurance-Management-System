import React from 'react'
import { Link, Outlet } from 'react-router-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCar
//  } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function First() {
      const navigate = useNavigate();
    
  return (
    <div>  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-4">
              <Link className="nav-link active" aria-current="page" ><img src="https://static.insurancedekho.com/pwa/img/id-main-logo.svg" alt="image" style={{width: 200}} ></img></Link>
            </li>
    </ul>
      <div className="d-flex align-items-center ms-auto">
  <button className="btn-sm rounded-2" type="submit"   onClick={() => navigate('/posp ')} style={{ borderRadius: '50%',border: '1px solid black', marginRight: '30px' }}>About InsuranceDekho</button>
  <button className="btn btn-danger btn-sm rounded-2" type="submit"   onClick={() => navigate('/login')} style={{ borderRadius: '50%',border: '1px solid black', marginRight: '30px' }}>Sign in</button>
  <button className="btn btn-danger btn-sm rounded-2" type="submit"   onClick={() => navigate('/register ')} style={{ borderRadius: '50%',border: '1px solid black', marginRight: '20px' }}>Sign up</button>
</div>
      </div>
          <Outlet/>
     
  </div>
</nav>
<div className="container-fluid">
      <img src="https://www.equitypandit.com/wp-content/uploads/2023/02/InsuranceDekho-Raises-150-Million-to-Expand-Business-EP.jpeg" style={{ position: 'fixed', width: '100%'}} className="img-fluid rounded-start" alt="..."/>

</div>
</div>
  )
}

export default First