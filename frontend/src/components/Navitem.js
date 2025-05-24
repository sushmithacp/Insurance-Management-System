import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faMotorcycle, faHeartPulse, faUmbrella, faCircleDollarToSlot,
  faBusinessTime, faPeopleRoof, faSackDollar, faClockRotateLeft, faForwardFast, faCircleDown, faPhoneVolume
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
            <li><Link className="dropdown-item" to="/car-insurance"><FontAwesomeIcon icon={faCar} style={{ color: "#cf208f", fontSize: "15px" }}/> Car Insurance</Link></li>
            <li><Link className="dropdown-item" to="/bike-insurance">  <FontAwesomeIcon icon={faMotorcycle} style={{color: "#B197FC", fontSize: "15px"}}/> Bike Insurance</Link></li>
            <li><Link className="dropdown-item" to="/health-insurance"> <FontAwesomeIcon icon={faHeartPulse} style={{color: "#63E6BE", fontSize: "15px"}}/> Health Insurance</Link></li>
            <li><Link className="dropdown-item" to="/term-insurance"> <FontAwesomeIcon icon={faUmbrella} style={{color: "#5c1aad", fontSize: "15px"}}/> Term Insurance</Link></li>
            <li><Link className="dropdown-item" to="/investment-insurance"> <FontAwesomeIcon icon={faCircleDollarToSlot} style={{color: "#7eec94", fontSize: "15px"}}/> Investment Insurance</Link></li>
            <li><Link className="dropdown-item" to="/business-insurance"> <FontAwesomeIcon icon={faBusinessTime} style={{color: "#b7ab24", fontSize: "15px"}}/> Business Insurance</Link></li>
            <li><Link className="dropdown-item" to="/health-insurance"> <FontAwesomeIcon icon={faPeopleRoof} style={{color: "#1eaea5", fontSize: "15px"}}/> Family Insurance</Link></li>
            <li><Link className="dropdown-item" to="/guaranteed-insurance"> <FontAwesomeIcon icon={faSackDollar} style={{color: "#d2b1be", fontSize: "15px"}}/> Guaranteed Insurance</Link></li>
   
          </ul>
        </li>  
        <li className="nav-item dropdown mx-4">
          <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <b>Insurance Advisors</b>
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/newDelhi-insurance">Insurance Advisors in New Delhi </Link></li>
            <li><Link className="dropdown-item" to="/pune-insurance">Insurance Advisors in Pune  </Link></li>
            <li><Link className="dropdown-item" to="/Hyderabad-insurance">Insurance Advisors in Hyderabad </Link></li>
            <li><Link className="dropdown-item" to="/Bangaluru-insurance">Insurance Advisors in Bangaluru </Link></li>
            <li><Link className="dropdown-item" to="/Kolkata-insurance">Insurance Advisors in Kolkata </Link></li>
            <li><Link className="dropdown-item" to="/Noida-insurance">Insurance Advisors in Noida </Link></li>
            <li><Link className="dropdown-item" to="/Lucknow-insurance">Insurance Advisors in Lucknow </Link></li>
            <li><Link className="dropdown-item" to="/Gurgaon-insurance">Insurance Advisors in Gurgaon </Link></li>
   
          </ul>
        </li> 
        <li className="nav-item mx-4">
          <Link className="nav-link" aria-current="page" to="/renew"><b>Renew</b></Link>
        </li>
        <li className="nav-item dropdown mx-4">
                   <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">

          <b>Support</b></Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/renew"><FontAwesomeIcon icon={faClockRotateLeft} style={{color: "#B197FC", fontSize: "15px"}}/> Renew Policy </Link></li>
            <li><Link className="dropdown-item" ><FontAwesomeIcon icon={faForwardFast} style={{color: "#B197FC", fontSize: "15px"}}/> Track Policy  </Link></li>
            <li><Link className="dropdown-item" ><FontAwesomeIcon icon={faCircleDown} style={{color: "#B197FC", fontSize: "15px"}}/> Download Policy  </Link></li>
            <li><Link className="dropdown-item" ><FontAwesomeIcon icon={faPhoneVolume} style={{color: 'green', fontSize: "15px"}}/> Call-us (7551196989) </Link></li>
          
          </ul>
        </li>
        <li className="nav-item mx-4">
          <Link className="nav-link" aria-current="page" to="/news"><b>News</b></Link>
        </li>
        
        
      </ul>
      <div className="d-flex align-items-center ms-auto">
  <p className="mb-0 " style={{ marginRight: '10px'}}><small>Track & Policy Download</small></p>
  
  <select
      className="form-select form-select-sm w-auto" style={{ backgroundColor: 'lightblue', marginRight: '10px', marginleft: '10px'}}
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
