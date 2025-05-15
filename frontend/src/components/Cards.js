import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faMotorcycle,faHeartPulse,faUmbrella,faCircleDollarToSlot,
  faBusinessTime,faPeopleRoof,faSackDollar,faCaretDown
 } from '@fortawesome/free-solid-svg-icons';
 import { useNavigate } from 'react-router-dom';


function Cards() {
  const navigate = useNavigate();

  return (
    
    <div className='container mt-5'>
      <div className="card-border p-3">
    <div className="row row-cols-1 row-cols-md-5 g-4">
 
 <div className="col">
  <div className="card h-100 text-center" onClick={() => navigate('/car-insurance')}
              style={{ cursor: "pointer" }}>
    <div className="card-body">
      <div style={{ margin: "5px 0" }}>
        <FontAwesomeIcon icon={faCar}  style={{ color: "#cf208f", fontSize: "50px" }} 
        />
      </div>
      <h5 className="card-title">Car</h5>
      <p className="card-text">Insurance</p>
    </div>
  </div>
</div>

<div className="col">
  <div className="card h-100 text-center"onClick={() => navigate('/bike-insurance')}
              style={{ cursor: "pointer" }}>
    <div className="card-body">
      <div style={{ margin: "5px 0" }}>
        <FontAwesomeIcon icon={faMotorcycle} style={{color: "#B197FC", fontSize: "50px"}} />
      </div>
      <h5 className="card-title">Bike</h5>
      <p className="card-text">Insurance</p>
    </div>
  </div>
</div>

 <div className="col">
  <div className="card h-100 text-center" onClick={() => navigate('/health-insurance')}
              style={{ cursor: "pointer" }}>
    <div className="card-body">
      <div style={{ margin: "5px 0" }}>
        <FontAwesomeIcon icon={faHeartPulse} style={{color: "#63E6BE", fontSize: "50px"}} />
      </div>
      <h5 className="card-title">Health</h5>
      <p className="card-text">Insurance</p>
    </div>
  </div>
</div>

<div className="col">
  <div className="card h-100 text-center"  onClick={() => navigate('/term-insurance')}
              style={{ cursor: "pointer" }}>
    <div className="card-body">
      <div style={{ margin: "5px 0" }}>
        <FontAwesomeIcon icon={faUmbrella} style={{color: "#5c1aad", fontSize: "50px"}} />
      </div>
      <h5 className="card-title">Term</h5>
      <p className="card-text">Insurance</p>
    </div>
  </div>
</div>

<div className="col">
  <div className="card h-100 text-center"  onClick={() => navigate('/investment-insurance')}
              style={{ cursor: "pointer" }}>
    <div className="card-body">
      <div style={{ margin: "5px 0" }}>
        <FontAwesomeIcon icon={faCircleDollarToSlot} style={{color: "#7eec94", fontSize: "50px"}} />
      </div>
      <h5 className="card-title">Investment</h5>
      <p className="card-text">Insurance</p>
    </div>
  </div>
</div>

<div className="col">
  <div className="card h-100 text-center" onClick={() => navigate('/business-insurance')}
              style={{ cursor: "pointer" }}>
    <div className="card-body">
      <div style={{ margin: "5px 0" }}>
        <FontAwesomeIcon icon={faBusinessTime} style={{color: "#b7ab24", fontSize: "50px"}} />
      </div>
      <h5 className="card-title">Business</h5>
      <p className="card-text">Insurance</p>
    </div>
  </div>
</div>
<div className="col">
  <div className="card h-100 text-center" onClick={() => navigate('/health-insurance')}
              style={{ cursor: "pointer" }}>
    <div className="card-body">
      <div style={{ margin: "5px 0" }}>
        <FontAwesomeIcon icon={faPeopleRoof} style={{color: "#1eaea5", fontSize: "50px"}} />
      </div>
      <h5 className="card-title">Family Health</h5>
      <p className="card-text">Insurance</p>
    </div>
  </div>
</div>
<div className="col">
  <div className="card h-100 text-center"  onClick={() => navigate('/guaranteed-insurance')}
              style={{ cursor: "pointer" }}>
    <div className="card-body">
      <div style={{ margin: "5px 0" }}>
        <FontAwesomeIcon icon={faSackDollar} style={{color: "#d2b1be", fontSize: "50px"}} />
      </div>
      <h5 className="card-title">Guaranteed</h5>
      <p className="card-text">Insurance</p>
    </div>
  </div>
</div>

<div className="col">
  <div className="card h-100 text-center">
    <div className="card-body">
      <div style={{ margin: "5px 0" }}>
        <FontAwesomeIcon icon={faCaretDown} style={{color: "#244107", fontSize: "50px"}} />
      </div>
      <h5 className="card-title">More</h5>
    </div>
  </div>
</div>

</div>
</div>
</div>
  )
}

export default Cards
