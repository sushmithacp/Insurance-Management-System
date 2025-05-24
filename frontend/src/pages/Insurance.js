import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile, faFileZipper, faHeadphonesSimple, faQuoteLeft
 } from '@fortawesome/free-solid-svg-icons';
 import file1 from '../images/file1.svg';
 import file2 from '../images/file2.svg';
 import file3 from '../images/file3.svg';
 import works1 from '../images/works1.svg';
 import arrowd from '../images/arrowd.svg';
 import work2 from '../images/work2.svg';
 import arrowu from '../images/arrowu.svg';
 import work3 from '../images/work3.svg';
 
function Insurance() {
  return (
    <div>

      <div className='container'>
     <div className="container mt-5">
      <div className="col-12">
      <div className="card" >
      <div className="card-body">
      <h2 className="card-title text-center"> <b>Benefits of InsuranceDekho</b></h2>
      <p className="card-text text-center">Understand your insurance policy options. Identify the best value. Enjoy peace of mind.</p>
<div className="row">
<div className="col-4">

            <div className=" p-3" ><img src={file1} alt="image1" style={{width:'20'}}/> <br/><b>5 Minutes Policy Issuance*</b></div>
            <p>Say no to spending hours and days in queues doing the paperwork for your insurance policy. Get your insurance issued instantly with InsuranceDekho. The entire process from selecting the best insurance policy to getting it issued takes just 5 minutes on InsuranceDekho.</p>
          </div>
          <div className="col-4">
            <div className=" p-3"><img src={file2} alt="image1" style={{width:'20'}}/> <br/><b>Over 80 Lac Happy Customers</b></div>
            <p>InsuranceDekho is becoming a household name in India. Till now we have been successful in providing a delightful experience to more than 50 lac customers with the help of our transparent and quick process, a dedicated support team along with the availability of numerous insurers.</p>
          </div>
          <div className="col-4">
            <div className=" p-3 "><img src={file3} alt="image1" style={{width:'20'}}/><br/><b>Dedicated Support Team</b></div>
            <p>Our dedicated support team is available for your assistance all the 7 days. Feel free to reach out to us in case of any confusion - be it related to the purchase of an insurance policy or assistance during the settlement of a claim, our team of experts is at your service all days.</p>
          </div>
</div>
        </div>
        </div>
        </div>
<hr/>
          <div className="col-12">
      <div className="card" >
      <div className="card-body">
      <h2 className="card-title text-center"> How InsuranceDekho Works?</h2>
    <div className="row">
      <div className="col-1">
</div>
      <div className="col-2">
            <div className=" p-3" ><img src={works1} alt="image1" style={{width:'20'}}/> <br/></div>
               </div>
               <div className="col-2">
            <div className=" p-3" ><img src={arrowd} alt="image1" style={{width:'20'}}/> <br/></div>
               </div>
           <div className="col-2">
            <div className=" p-3" ><img src={work2} alt="image1" style={{width:'20'}}/> <br/></div>
               </div>
          <div className="col-2">
            <div className=" p-3"><img src={arrowu} alt="image1" style={{width:'20'}}/> <br/></div>
             </div>
          <div className="col-2">
            <div className=" p-3 "><img src={work3} alt="image1" style={{width:'20'}}/><br/></div>
           </div>
                <div className="col-1">
</div>
</div>
<div className="row">
    
  <div className="col-4 text-center"><h5>Fill in Your Details</h5>
  <p className="text text-center">Fill in your details and get insurance policy premium quotes from top-rated insurers instantly.</p></div>
  <div className="col-4 text-center"><h5>Select a Plan</h5>
  <p className="text text-center">From numerous available quotes, choose the one that best suits your requirements and budget.</p></div>
  <div className="col-4 text-center"><h5>Make Payment and Sit Back</h5>
  <p className="text text-center">Pay online and get your policy right away in your inbox.</p></div>
   
</div>
        </div>
        </div>
        </div>
<hr/>
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
       <hr/>
      </div>
    </div>
    
  )
}

export default Insurance
