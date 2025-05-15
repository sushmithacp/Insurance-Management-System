import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard, faHeadphonesSimple, faCircleUser, faRightToBracket, faCommentsDollar
 } from '@fortawesome/free-solid-svg-icons';

function HealthInsurance() {
  return (
    <div>
         <Navbar/>
              <div className="container mt-5">
  <div className="row">
    
    <div className="col-8">
      
         <h2 className="card-title">Buy Health Insurance Plans and Policies Online</h2> 
         <p>A health or medical insurance policy covers your medical expenses for illnesses and injuries 
 including hospitalisation, daycare procedures, ambulance charges, medical care at home, medicine costs, and more.
    It protects the individuals and families from financial burden arising from unexpected medical expenses. Additionally,
             it helps you save taxes under section 80D of the Income Tax Act, 1961.</p>

    </div>
</div>
 <div className="row">
  <div className="col-8">
    <div className="row">
      <h3>Key Highlights</h3>

      <div className="col-6">
        <div className="row">
          <div className="col-3">
          <p style={{ marginBottom: '30px' }}><FontAwesomeIcon icon={faClipboard} style={{color: "#63E6BE", fontSize: "50px"}} /></p>
          <p style={{ marginBottom: '30px' }}><FontAwesomeIcon icon={faCircleUser} style={{color: "#d22d2d", fontSize: "50px"}} /></p>
          <p><FontAwesomeIcon icon={faCommentsDollar} style={{color: "#FFD43B", fontSize: "50px"}} /></p>
         
          </div>
          <div className="col-9">
            <p>Wide range of Plans & Companies <br/>
             (134 Plans and 22 Companies)</p>
              <p>24 x 7 Claim Support
              (We are there for the time of your need to support in claim processing)*</p>
              <p>
1 lakh+ Families insured/Happy customers
(Hear genuine customers opinion & their experiences)*</p>
          </div>
        </div>
      </div>

      <div className="col-6">
        <div className="row">
          <div className="col-3">
           <p><FontAwesomeIcon icon={faHeadphonesSimple} style={{color: "#9f36a1", fontSize: "50px"}} /></p>
           <p><FontAwesomeIcon icon={faRightToBracket} style={{color: "#24a326", fontSize: "50px"}} /></p>

          </div>
          <div className="col-9">
            <p>Free advice to help choose best plan <br/>
            Guaranteed assistance & guidance</p>
             <p>Flexible payment options
          (Ability to buy 3 year plan as well as monthly EMI options)</p>
          </div>
        </div>
      </div>

    </div>
  </div>

  <div className="col-4">
    {/* <h3></h3> */}
  </div>
</div>


</div>
<Footer/>

    </div>
  )
}

export default HealthInsurance
