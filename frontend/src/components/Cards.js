import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar, faMotorcycle,faHeartPulse,faUmbrella,faCircleDollarToSlot,
  faBusinessTime,faPeopleRoof,faSackDollar,faCaretDown
 } from '@fortawesome/free-solid-svg-icons';
 import { useNavigate } from 'react-router-dom';
 import car from '../images/car.svg';
 import bike from '../images/bike.svg';
 import health from '../images/health.svg';
 import term from '../images/term.svg';
 import investment from '../images/investment.svg';
 import business from '../images/business.svg';
 import familyhealth from '../images/familyhealth.svg';
 import guaranteed from '../images/guaranteed.svg';
 import more from '../images/more.svg';


function Cards() {
  const navigate = useNavigate();

  return (
    
    <div className='container mt-5'>
      <div className="card-border p-3 border border-light rounded" style={{backgroundColor:'white', borderRadius: '50'}}>
    <div className="row row-cols-1 row-cols-md-5 g-4">
 
 <div className="col">
  <div className="card h-100 text-center" onClick={() => navigate('/car-insurance')}
              style={{ cursor: "pointer" }}>
    <div className="card-body">
      <div style={{ margin: "5px 0" }}>
       <img src={car} alt="image1" style={{width:'20'}}/>
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
        <img src={bike} alt="image1" style={{width:'20'}}/>
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
        <img src={health} alt="image1" style={{width:'20'}}/>
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
        <img src={term} alt="image1" style={{width:'20'}}/>
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
      <img src={investment} alt="image1" style={{width:'20'}}/>
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
        <img src={business} alt="image1" style={{width:'20'}}/>
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
        <img src={familyhealth} alt="image1" style={{width:'20'}}/>
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
        <img src={guaranteed} alt="image1" style={{width:'20'}}/>
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
      <img src={more} alt="image1" style={{width:'20'}}/>
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
