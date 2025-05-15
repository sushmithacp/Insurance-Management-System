import React from 'react'
import Navbar from '../components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer'


function TermInsurance() {
  return (
      <div>
         <Navbar/>

          <div className="container mt-5">
              <div className="row" >
                  <div className="col-12" mb-3>
                      <h1>Get <strong>₹1 crore</strong> Term Insurance plan</h1>
                      <h1>starting from <strong>₹16/day</strong></h1>
                      <div className="row" >
                  <div className="col-6" mb-3>

                      <p>TATA AIA Life   <FontAwesomeIcon icon={faBuildingColumns} style={{color: "#102850", fontSize: "20px"}} /></p>
                      <p>ICICI Pru Life <FontAwesomeIcon icon={faBuildingColumns} style={{color: "#102850", fontSize: "20px"}} /></p>
                      <p>Axis Max Life  <FontAwesomeIcon icon={faBuildingColumns} style={{color: "#102850", fontSize: "20px"}} /></p>
                      <p>Bajaj Allianz   <FontAwesomeIcon icon={faBuildingColumns} style={{color: "#102850", fontSize: "20px"}} /></p>
                      <p>LIC Life  <FontAwesomeIcon icon={faBuildingColumns} style={{color: "#102850", fontSize: "20px"}} /></p>
                      
                      </div>
                  <div className="col-6" mb-3>

                      <p>Bandhan Life  <FontAwesomeIcon icon={faBuildingColumns} style={{color: "#102850", fontSize: "20px"}} /></p>
                      <p>Canara HSBC  <FontAwesomeIcon icon={faBuildingColumns} style={{color: "#102850", fontSize: "20px"}} /></p>
                      <p>PNB MetLife  <FontAwesomeIcon icon={faBuildingColumns} style={{color: "#102850", fontSize: "20px"}} /></p>
                      <p>HDFC Life  <FontAwesomeIcon icon={faBuildingColumns} style={{color: "#102850", fontSize: "20px"}} /></p>
                      <p>Digit Life <FontAwesomeIcon icon={faBuildingColumns} style={{color: "#102850", fontSize: "20px"}} /></p>
                      
                      </div>

              </div>
              </div>
              
<h4 className="card-title mt-3 text-center"><b>What is Term Insurance?</b></h4>
                <p>Term insurance offers financial coverage to policyholder’s dependants 
                    if they meet an unfortunate demise during the policy term. Let us understand it 
                    with an example of two individuals, Ashok and Suraj. Ashok is 35 years old man who has a wife, 
                    dependent parents, and a child, on the other hand, there is Suraj who is 40 years old with dependent parents, 
                    spouse, child, and who has been diagnosed with a critical illness. Now, in the event that 
                    either Ashok meets an unfortunate demise or Suraj is diagnosed with a critical illness, 
                    this plan will financially replace them in both of these. Thus, term life insurance plans 
                    will financially support your dependents even if you are not around. 
                    Scroll through the section to know all about term insurance plans.</p>

                    <h4 className="card-title mt-3 text-center"><b>Best Term Life Insurance Plans in India 2025</b></h4>
                    <p className="card-title mt-3 text-center">The top 5 term insurance plans are as follows:</p>
                    <h5>1. Max Life Smart Secure Plus</h5>
                <p>The Max Life Smart Secure Plus Plan is like a financial safety net for your family. This term insurance plan is made to meet your financial needs and provide reliable help during tough times. The Smart Secure Plus Plan by Max Life gives you two types of death benefits: one for terminal illness and another as an exit value. On top of that, you can choose extra benefits like breaks in premium payments, coverage for both partners and added payouts for accidental death. It's not just a term insurance plan; it is a solution to keep your finances secure and adapt to any unexpected changes.</p>
<h5>2. ICICI iProtect Smart</h5>
<p>The ICICI iProtect Smart Term Insurance Plan offers enhanced protection with coverage against death, terminal illness, and disability. It provides comprehensive additional benefits, allowing policyholders to choose options such as accidental death benefit and accelerated critical illness benefit. Special premium rates are available for non-tobacco users, making it an attractive choice for those who maintain a healthy lifestyle.</p>
<h5>3. HDFC Life Click 2 Protect Super</h5>
<p>HDFC Life Click 2 Protect Super is a versatile term insurance plan designed to cater to your changing needs, offering a dynamic life cover and comprehensive protection. This plan understands the evolving nature of your life and provides a range of coverage options tailored to your specific requirements. With the flexibility to choose from multiple coverage options, the plan ensures that your income is safeguarded.<br/>
Moreover, the HDFC Life Click 2 Protect Super plan goes beyond basic life coverage, offering additional benefits such as a return of premium option, an extra amount in case of accidental death, and acceleration of death benefit on the diagnosis of specified terminal illnesses until age 80.</p>    
<h5>4. Tata AIA Samporn Raksha Supreme</h5>
<p>Tata AIA Samporn Raksha Supreme is a comprehensive term insurance plan offering various benefits to secure your family's financial future in your absence. One of the key advantages of this plan is the opportunity to avail tax benefits in accordance with applicable income tax laws. The plan also provides a flexible premium payment structure, allowing you to choose from various options such as single, monthly, half-yearly, quarterly, or yearly payments, ensuring convenience.<br/>

The plan offers four distinct options, namely Life Option, Life Plus Option, Life Income Option, and Credit Protect Option, each tailored to meet specific insurance needs. Women policyholders can enjoy preferential premium rates, providing an added advantage.</p>
    <h5>5. Bajaj Allianz Life eTouch</h5>
    <p>Bajaj Allianz Life eTouch Online Term is a valuable term life insurance plan designed to offer comprehensive protection for individuals. The plan falls under the category of non-linked, non-participating, life, regular premium payment, individual, and pure risk premium plans. This means it's a simple, easy-to-understand policy that focuses on providing coverage without any complicated financial components. The Bajaj Allianz Life eTouch Online Term plan not only offers life cover but also includes benefits for accidental death, accidental total permanent disability, and critical illness. What sets it apart is the flexibility it provides!<br/>
You can choose from their four variant options to enhance your protection based on your specific needs. Another notable feature is the option for the nominee to receive the policy benefits either as a lump-sum amount or in convenient monthly installments. Furthermore, there's an added incentive for those leading a healthy lifestyle, as non-tobacco users can enjoy lower premium rates.</p>
              </div>
          </div>
          <Footer />
      </div>
  )
}

export default TermInsurance