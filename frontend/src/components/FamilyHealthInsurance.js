import React from 'react'
import Navbar from '../components/Navbar'
import HealthInsurance from '../components/HealthInsurance'
import bajaj from '../images/bajaj.png';
import hdfc from '../images/hdfc.png';
import sf from '../images/sf.png';
import chola from '../images/chola.png';
import Insurance from '../pages/Insurance';
import POSP from '../pages/POSP'


function FamilyHealthInsurance() {
  return (
    <div>
         <Navbar/>
      <HealthInsurance/>
  <Insurance/>
      <div className="container mt-5">
  <div className="row">
    <div className="col-12 text-center mb-4">
      <h2><b>Our Insurance Partners</b></h2>
      <p>We're associated with India's popular insurance companies.</p>
    </div>

    <div className="col-md-3 col-sm-6 mb-4">
      <div className="card h-100 text-center">
        <div className="card-body">
          <img src={bajaj} alt="Bajaj Allianz Insurance" className="img-fluid mb-3" style={{ maxHeight: '100px' }} />
          <h6 className="card-title">Bajaj Allianz Insurance</h6>
        </div>
      </div>
    </div>

    <div className="col-md-3 col-sm-6 mb-4">
      <div className="card h-100 text-center">
        <div className="card-body">
          <img src={hdfc} alt="HDFC ERGO Insurance" className="img-fluid mb-3" style={{ maxHeight: '100px' }} />
          <h6 className="card-title">HDFC ERGO Insurance</h6>
        </div>
      </div>
    </div>

    <div className="col-md-3 col-sm-6 mb-4">
      <div className="card h-100 text-center">
        <div className="card-body">
          <img src={sf} alt="Royal Sundaram Insurance" className="img-fluid mb-3" style={{ maxHeight: '100px' }} /><br/><br/>
          <h6 className="card-title">Royal Sundaram Insurance</h6>
        </div>
      </div>
    </div>

    <div className="col-md-3 col-sm-6 mb-4">
      <div className="card h-100 text-center">
        <div className="card-body">
          <img src={chola} alt="Cholamandalam Insurance" className="img-fluid mb-3" style={{ maxHeight: '100px' }} />
          <h6 className="card-title">Cholamandalam Insurance</h6>
        </div>
      </div>
    </div>

  </div>
</div>
      <hr/>
<POSP/>

    </div>
  )
}

export default FamilyHealthInsurance
