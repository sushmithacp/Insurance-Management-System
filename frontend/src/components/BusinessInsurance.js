import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import man from '../images/man.jpeg';
import fire from '../images/fire.svg';
import marineHull from '../images/marineHull.svg';
import medicalcoverage from '../images/medicalcoverage.svg';
import paccident from '../images/paccident.svg';
import plant from '../images/plant.svg';
import workmen from '../images/workmen.svg';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom'
import bajaj from '../images/bajaj.png';
import hdfc from '../images/hdfc.png';
import sf from '../images/sf.png';
import chola from '../images/chola.png';
import Insurance from '../pages/Insurance';
import POSP from '../pages/POSP'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag
 } from '@fortawesome/free-solid-svg-icons';

function BusinessInsurance() {
    const navigate = useNavigate();
  
  return (
      <div>
          <Navbar />
          <div className="container-fluid" style={{backgroundColor: "#eef5f6"}}>
              <div className="row" >
                  <div className="col-1 mt-5" >
                    </div>
                  <div className="col-4 mt-5" >
                      <h1 className="card-text mb-5">Aapke Business ka Best Insurance Kavach</h1>
                      <h5 className="card-text mb-5"> <i>Starting at just ₹8 per day*</i></h5>
                   <button type="submit" className="btn btn-danger mb-3 w-50" onClick={() => navigate('/popupbusiness')} style={{ borderRadius: '50px', marginRight: '10px' }}>Get A Quote</button><br/>
                     
                  
<div style={{ display: 'flex', alignItems: 'center' }}>
  <FontAwesomeIcon 
    icon={faHashtag}  
    style={{ color: "#4d9ad5", fontSize: "40px", marginRight: "10px" }}
  />
  <div>
    <p style={{ margin: 0 }}><i>InsuranceDekho</i></p>
    <p style={{ margin: 0 }}>BadhteIndiaKaBharosa</p>
  </div>
</div>


                  </div>
                  <div className="col-7">
                   <img src={man} alt="image1"/>

                  </div>
</div>

          <div className="container mt-5" >

  <div className='row'>
<div className="col-2"><img src={fire} alt="image1" style={{width:'20'}}/><p>Fire & Burglary</p></div>
<div className="col-2"><img src={marineHull} alt="image1" style={{width:'20'}}/><p>Specific Marine</p></div>
<div className="col-2"><img src={medicalcoverage} alt="image1" style={{width:'20'}}/><p>Contractor’s Plant & Machinery</p></div>
<div className="col-2"><img src={paccident} alt="image1" style={{width:'20'}}/><p>Workmen Compensation</p></div>
<div className="col-2"><img src={plant} alt="image1" style={{width:'20'}}/><p>Group Medical Coverage</p></div>
<div className="col-2"><img src={workmen} alt="image1" style={{width:'20'}}/><p>Group Personal Accident</p></div>
</div>
<hr/>

                  <div className="col-12 mt-5">
                    <h3 className="card-text text-center mb-3" >The InsuranceDekho Advantage</h3>
                    <p className="card-text text-center mb-5">
                      Understand your insurance policy options. Identify the best value. Enjoy peace of mind.
                    </p>
                  </div>

           
              <div className="card-group">
  <div className="card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIIAH5LogRoaUv6Uan9DE_p15hImEoX5Sjpw&s" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">5 Minutes Policy Issuance</h5>
      <p className="card-text">Say no to spending hours and days in queues doing the paperwork for your insurance policy. Get your insurance issued instantly with InsuranceDekho. The entire process from selecting the best insurance policy to getting it issued takes just 5 minutes on InsuranceDekho.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtbV1xnTwn7_7Vvk9Ny4U_hLLbftrdJU9kOw&s" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Over 50 Lac Happy Customers</h5>
      <p className="card-text">InsuranceDekho is becoming a household name in India. Till now we have been successful in providing a delightful experience to more than 50 lac customers with the help of our transparent and quick process, a dedicated support team along with the availability of numerous insurers</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div className="card">
    <img src="https://static.ffx.io/images/$zoom_0.4837458173938888%2C$multiply_0.7554%2C$ratio_1.776846%2C$width_1059%2C$x_325%2C$y_31/t_crop_custom/q_86%2Cf_auto/3bf4f7b8d7e9b42a73f25c6055795a26b94318d3" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Dedicated Support System</h5>
      <p className="card-text">Our dedicated support team is available for your assistance all the 7 days. Feel free to reach out to us in case of any confusion - be it related to the purchase of an insurance policy or assistance during the settlement of a claim, our team of experts is at your service all days.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
<hr/>

</div>
          </div>
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
      <Outlet/>

      </div>
  )
}

export default BusinessInsurance
