import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faMotorcycle,faHeartPulse,faUmbrella,faCircleDollarToSlot,
  faBusinessTime,faPeopleRoof,faSackDollar
 } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


function Navitem() {
  const navigate = useNavigate();

  const handleRoleChange = (event) => {
    const selectedRole = event.target.value;

    if (selectedRole === 'Admin') {
      navigate('/admin'); 
    }else{
      navigate('/profile'); 
    }
    
  };
  return (

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mx-4">
          <Link className="nav-link active" aria-current="page" to="/"><img src="https://static.insurancedekho.com/pwa/img/id-main-logo.svg" alt="" style={{width: 200}} ></img></Link>
        </li>
       
         <li className="nav-item dropdown mx-4">
          <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <b>Insurance</b>
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/car-insurance">Car Insurance  <FontAwesomeIcon icon={faCar}/></Link></li>
            <li><Link className="dropdown-item" to="/bike-insurance">Bike Insurance  <FontAwesomeIcon icon={faMotorcycle}/></Link></li>
            <li><Link className="dropdown-item" to="/health-insurance">Health Insurance <FontAwesomeIcon icon={faHeartPulse}/></Link></li>
            <li><Link className="dropdown-item" to="/term-insurance">Term Insurance <FontAwesomeIcon icon={faUmbrella}/></Link></li>
            <li><Link className="dropdown-item" to="/investment-insurance">Investment Insurance <FontAwesomeIcon icon={faCircleDollarToSlot}/></Link></li>
            <li><Link className="dropdown-item" to="/business-insurance">Business Insurance <FontAwesomeIcon icon={faBusinessTime}/></Link></li>
            <li><Link className="dropdown-item" to="/health-insurance">Family Insurance <FontAwesomeIcon icon={faPeopleRoof}/></Link></li>
            <li><Link className="dropdown-item" to="/guaranteed-insurance">Guaranteed Insurance <FontAwesomeIcon icon={faSackDollar}/></Link></li>
   
          </ul>
        </li>  
        <li className="nav-item dropdown mx-4">
          <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <b>Insurance Advisors</b>
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" >Insurance Advisors in [New Delhi] </Link></li>
            <li><Link className="dropdown-item" >Insurance Advisors in [Pune]  </Link></li>
            <li><Link className="dropdown-item" >Insurance Advisors in [Hyderabad] </Link></li>
            <li><Link className="dropdown-item" >Insurance Advisors in [Bangaluru]</Link></li>
            <li><Link className="dropdown-item" >Insurance Advisors in [Kolkata]</Link></li>
            <li><Link className="dropdown-item" >Insurance Advisors in [Noida] </Link></li>
            <li><Link className="dropdown-item" >Insurance Advisors in [Lucknow] </Link></li>
            <li><Link className="dropdown-item" >Insurance Advisors in [Gurgaon] </Link></li>
   
          </ul>
        </li> 
        <li className="nav-item mx-4">
          <Link className="nav-link" aria-current="page" to="/renew"><b>Renew</b></Link>
        </li>
        <li className="nav-item dropdown mx-4">
                   <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">

          <b>Support</b></Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" >Renew Policy </Link></li>
            <li><Link className="dropdown-item" >Track Policy  </Link></li>
            <li><Link className="dropdown-item" >Download Policy  </Link></li>
            <li><Link className="dropdown-item" >Call-us (1020404) </Link></li>
          
          </ul>
        </li>
        <li className="nav-item mx-4">
          <Link className="nav-link" aria-current="page" to="/news"><b>News</b></Link>
        </li>
        
        
      </ul>
      <div className="d-flex align-items-center ms-auto">
  <p className="mb-0 me-3"><small>Track & Policy Download</small></p>
  
  <select
      className="form-select form-select-sm w-auto" style={{ backgroundColor: 'lightblue', marginRight: '20px'}}
      onChange={handleRoleChange}
      defaultValue=""
    >
      <option value="" disabled >Profile</option>
      <option value="User">User</option>
      <option value="Admin">Admin</option>
    </select>
  <button className="btn btn-danger btn-sm rounded-2" type="submit"   onClick={() => navigate('/login')} style={{ borderRadius: '50px', marginRight: '10px' }}>Login</button>

</div>

      
      <Outlet/>
    </div>
  )
}

export default Navitem
