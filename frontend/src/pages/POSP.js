import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile, faBriefcase, faArrowAltCircleRight, faFileImage, faInbox
 } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';
 import facebook from '../images/facebook.svg';
 import youtube from '../images/youtube.svg';
 import insta from '../images/insta.svg';
 import linkedin from '../images/linkedin.svg';
 import tw from '../images/tw.svg';
import happysmiles from '../images/happysmiles.svg';
import google from '../images/google.svg';
import file from '../images/file.svg';

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
        
          
    
    <div className="col-3">
    
                <div className="p-3 text-center"><b>Insurance Dekho</b></div>
                <p><b>link: https://www.insurancedekho.com</b></p>
              
                 <img src={facebook} alt="image1" style={{width:'20',marginRight: '20px',marginBottom: '20px'}}/>
                 <img src={youtube} alt="image1" style={{width:'20',marginRight: '20px',marginBottom: '20px'}}/>
                 <img src={insta} alt="image1" style={{width:'20',marginRight: '20px',marginBottom: '20px'}}/>
                 <img src={linkedin} alt="image1" style={{width:'20',marginRight: '20px',marginBottom: '20px'}}/>
                 <img src={tw} alt="image1" style={{width:'20',marginRight: '20px',marginBottom: '20px'}}/>
                 <p>Email : support@insurancedekho.com</p>
                <p>Call : 755 1196 989</p>
                


              </div>
              <div className="col-2">
                <div className="p-3"><b>Products</b></div>
                 <p>Car Insurance</p>
                <p>Bike Insurance</p>
                <p>Health Insurance</p>
                <p>Life Insurance</p>
                <p>Term Insurance</p>
                <p>Investment</p>
                <p>Business</p>
                <p>Travel Insurance</p>
                <p>Tax Saving Schemes</p>

              </div>
              <div className="col-2">
                <div className="p-3"><b>Policy</b></div>
                <p>Privacy Policy</p>
                <p>Grievance Redressal</p>
                <p>Fraud Detection</p>
                <p>Shipping Policy</p>
                <p>Terms of Use</p>
                <p>Cancellation & Refund</p>
                <p>E-Insurance Account</p>
              </div>
              <div className="col-3">
                <div className="p-3"><b>General</b></div>
                <p>Contact Us</p>
                <p>Feedback</p>
                <p>Fraud identification</p>
                <p>Disclaimer</p>
                <p>Annual Reports/Annual Returns</p>
                <p>Solicitation Process</p>
                <p>ID Alumni Page</p>
                <p>Corporate Social Responsibility</p>
              </div>
              <div className="col-2">
                <div className="p-3"></div>
                <div className="col-12" style={{ display: 'flex', alignItems: 'center',marginBottom: '20px' }}>
                       <img src={happysmiles} alt="image1" style={{width:'20'}}/>
                        <div>
                          <p style={{ margin: 0 }}>11 Mn+</p>
                          <p style={{ margin: 0 }}>Happy Smiles</p>
                        </div>
                      </div>
                      <div className="col-12" style={{ display: 'flex', alignItems: 'center',marginBottom: '20px' }}>
                       <img src={google} alt="image1" style={{width:'20'}}/>
                        <div>
                          <p style={{ margin: 0 }}>4.8</p>
                          <p style={{ margin: 0 }}>Rated on Google</p>
                        </div>
                      </div>
                      <div className="col-12" style={{ display: 'flex', alignItems: 'center' }}>
                       <img src={file} alt="image1" style={{width:'20'}}/>
                        <div>
                          <p style={{ margin: 0 }}>95k+</p>
                          <p style={{ margin: 0 }}>Claims Served</p>
                        </div>
                      </div>
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

