import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Cards from '../components/Cards'
import './Home.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile, faFileZipper, faHeadphonesSimple, faQuoteLeft
 } from '@fortawesome/free-solid-svg-icons';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <Cards/>
      <div className="container mt-5">
      <div className="col-12">
      <div className="card" >
      <div className="card-body">
      <h2 className="card-title text-center"> <b>Benefits of InsuranceDekho</b></h2>
      <p className="card-text text-center">Understand your insurance policy options. Identify the best value. Enjoy peace of mind.</p>
<div className="row">
<div className="col-4">

            <div className=" p-3 text-center" ><FontAwesomeIcon icon={faFileZipper} style={{color: "#59981b", fontSize: "50px"}}/> <br/><b>5 Minutes Policy Issuance*</b></div>
            <p>Say no to spending hours and days in queues doing the paperwork for your insurance policy. Get your insurance issued instantly with InsuranceDekho. The entire process from selecting the best insurance policy to getting it issued takes just 5 minutes on InsuranceDekho.</p>
          </div>
          <div className="col-4">
            <div className=" p-3 text-center"><FontAwesomeIcon icon={faFaceSmile} style={{color: "#bd51a0", fontSize: "50px"}}/> <br/><b>Over 80 Lac Happy Customers</b></div>
            <p>InsuranceDekho is becoming a household name in India. Till now we have been successful in providing a delightful experience to more than 50 lac customers with the help of our transparent and quick process, a dedicated support team along with the availability of numerous insurers.</p>
          </div>
          <div className="col-4">
            <div className=" p-3 text-center"><FontAwesomeIcon icon={faHeadphonesSimple} style={{color: "#FFD43B", fontSize: "50px"}}/> <br/><b>Dedicated Support Team</b></div>
            <p>Our dedicated support team is available for your assistance all the 7 days. Feel free to reach out to us in case of any confusion - be it related to the purchase of an insurance policy or assistance during the settlement of a claim, our team of experts is at your service all days.</p>
          </div>
</div>
        </div>
        </div>
        </div>
      <div className="col-12 mt-5">
      <div className="row">
      <h2 className="title text-center"><b>Customer's Speak</b></h2>
      <p className="text text-center">Know why did they choose InsuranceDekho!</p>

<div className="col-4">

            <div className=" p-3 text-center"><FontAwesomeIcon icon={faQuoteLeft} style={{color: "#dba861", fontSize: "50px"}}/> <br/><b>Dedicated Support Team</b><b>Simple and Fast Process</b></div>
            <p>I chose InsuranceDekho to buy my ICICI Lombard car insurance policy, 
              and I’m so glad I did! The process was quick, straightforward, and completely stress-free.
               I easily compared plans, found the right coverage, and got my policy in minutes. No hidden 
               fees or confusing steps. If you want a simple and hassle-free way to get car insurance,
               InsuranceDekho is the way to go!</p>
          </div>
          <div className="col-4">
            <div className=" p-3 text-center"><FontAwesomeIcon icon={faQuoteLeft} style={{color: "#dba861", fontSize: "50px"}}/> <br/><b>Smooth Third-Party Accident Claim</b></div>
            <p>Last week my car hit a pedestrian by accident, and it injured him severely. After taking him to the hospital emergency, 
              I was quick with my action to inform ICICI Lombard, who was my insurer. They handled the whole case from start to end and settled the third-party claim efficiently. I’m thankful for their support during this 
              stressful time and I'm glad that I sought advice from InsuranceDekho while selecting ICICI Lombard as my insurer..</p>
          </div>
          <div className="col-4">
            <div className=" p-3 text-center"><FontAwesomeIcon icon={faQuoteLeft} style={{color: "#dba861", fontSize: "50px"}}/> <br/><b>Excellent customer support</b></div>
            <p>I needed some help with my reimbursement claim process in regard of the documents required.
               I contacted ICICI Lombard customer care and they helped me out quickly after paying genuine attention 
               to my problem. Have to give credit to InsuranceDekho for helping in make a wise decision while purchasing
                car insurance.</p>
          </div>
</div>
</div>
      </div>
<Footer/>
      </div>
  )
}

export default Home
