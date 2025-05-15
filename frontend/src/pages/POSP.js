import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile, faBriefcase, faArrowAltCircleRight, faFileImage, faInbox
 } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';

function POSP() {
  return (
    <div>
   
            <div className="container mt-5">
  <div className="row">
  
              
      <h4 className="card-title mt-3 text-center"><Link className="nav-link active" aria-current="page" ><img src="https://static.insurancedekho.com/pwa/img/id-main-logo.svg" alt="" style={{width: 200}} ></img></Link><b>What does InsuranceDekho do?</b></h4>
                <p>InsuranceDekho is an online platform that lets you compare and buy insurance quotes 
                  from top-rated insurance companies across Motor, Health, Life, Travel and other insurance from 
                  multiple companies. Buying an insurance policy on InsuranceDekho is very simple.<FontAwesomeIcon icon={faFaceSmile} style={{color: "orange", fontSize: "20px"}}/></p>
    <hr/>
    <h2>Our Top Most Insurances</h2>
      <h4 className="card-title mt-3"><b>Car Insurance</b></h4>
      <p>Once you’ve secured the car of your dreams, the next step is to get car insurance from a reliable provider.
    Think of it as a safety net for your beloved ride and the loved ones who will use it. Car insurance, also called      
    four wheeler insurance, is a contract between an insurer and you, the policyholder to protect you from unpredictable
    circumstances like accidents, theft or natural calamities. In India, car owners have the choice between three types
   of four-wheeler insurance, namely Standalone own-damage insurance, Third-party insurance, and Comprehensive coverage</p>
    <hr/>

 <h4 className="card-title mt-3"><b>Bike Insurance</b></h4>
      <p>If you own a bike, you know its value: the thrill of adventure, fun rides with the family, and the convenience of travelling in the local area. Indian households very quickly become attached to their bikes, and to ensure these sentiments are protected, getting bike insurance is very important. Bike Insurance protects your vehicle from the potential risk of damage and ensures that your bike continues to provide memories even after a setback.</p>
    <hr/>
    <h4 className="card-title mt-3"><b>Health Insurance</b></h4>
      <p>A health or medical insurance policy covers your medical expenses for illnesses and injuries including hospitalisation, daycare procedures, ambulance charges, medical care at home, medicine costs, and more. It protects the individuals and families from financial burden arising from unexpected medical expenses. Additionally, it helps you save taxes under section 80D of the Income Tax Act, 1961.</p>
    </div>
    <hr/>  <div className="col-12 mt-5">
          <div className="row">
        
          
    
    <div className="col-4">
    
                <div className="p-3 text-center"><b>Insurance Dekho</b></div>
                <p><b>link: https://www.insurancedekho.com</b></p>
                <p><FontAwesomeIcon icon={faBriefcase} style={{color: "blue", fontSize: "20px",marginRight: '20px'}}/>
                <FontAwesomeIcon icon={faArrowAltCircleRight} style={{color: "blue", fontSize: "20px", marginRight: '20px'}}/>
                <FontAwesomeIcon icon={faFileImage} style={{color: "blue", fontSize: "20px", marginRight: '20px'}}/>
                <FontAwesomeIcon icon={faInbox} style={{color: "blue", fontSize: "20px", marginRight: '20px'}}/></p>
                <p>Email : support@insurancedekho.com</p>
                <p>Call : 755 1196 989</p>
                


              </div>
              <div className="col-3">
                <div className="p-3 text-center"><b>Products</b></div>
                 <p>Health Insurance Plans</p>
                <p>Best Health Insurance Companies</p>
                <p>Mediclaim Policy</p>
                <p>Health Insurance Claim Settlement </p>
                <p>Critical Health Insurance</p>
              </div>
              <div className="col-3">
                <div className="p-3 text-center"><b>Policy</b></div>
                <p>Postal Life Insurance Scheme</p>
                <p>Life Insurance Types</p>
                <p>Life Insurance Claim Settlement </p>
                <p>Term Insurance Vs Life Insurance</p>
                <p>Best Life Insurance Companies</p>
              </div>
              <div className="col-2">
                <div className="p-3 text-center"><b>General</b></div>
                 <p>Investment Plans</p>
                <p>Fixed Deposit</p>
                <p>Tax-Saving Fixed</p>
                <p>Child Investment Plans</p>
                <p>Best Investment Plans</p>
              </div>
    </div>
    </div>
  
</div>
    <hr/>

<Footer/>
    </div>
  )
}

export default POSP

