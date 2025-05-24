import { React,  useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons';
import bajaj from '../images/bajaj.png';
import hdfc from '../images/hdfc.png';
import sf from '../images/sf.png';
import chola from '../images/chola.png';
import Insurance from '../pages/Insurance';
import POSP from '../pages/POSP'
import CarouseInsurance from './CarouseInsurance';
import { jwtDecode } from 'jwt-decode'; 
import axios from 'axios';

function TermInsurance() {
     const [policy, setPolicy] = useState(null);
            
              useEffect(() => {
                axios.get('http://localhost:5000/api/termPolicies') 
                  .then(res => { setPolicy(res.data)
                    console.log("Fetched policies:", res.data);
              }
            )
                  .catch(err => console.error(err));
              }, []);
            
            
             const handleClick = async (amount, policyId, policid, policnum, policov) => {
              const token = localStorage.getItem("token");
                const decoded = jwtDecode(token);
             const userId = decoded.userId; 
            
              const keyResponse = await axios.get("http://localhost:5000/api/razorpayPayments/getKey");
              
              const razorpayKey = keyResponse.data.key;
            
              const orderResponse = await axios.post("http://localhost:5000/api/razorpayPayments/create-order", { amount });
              const order = orderResponse.data;
            
              const options = {
                key: razorpayKey,
                amount: amount * 100,
                currency: "INR",
                name: "Sushmitha",
                description: "Test Transaction",
                order_id: order.id,
                handler: async function (response) {
                  alert("Payment successful! ID: " + response.razorpay_payment_id);
            
                  const paymentData = {
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_signature: response.razorpay_signature,
                    userId,
                    policyId,
                    amount,
                    policid,
                    policnum,
                    policov
                  };
            
                  try {
                    const verifyRes = await axios.post("http://localhost:5000/api/razorpayPayments/verify-payment", paymentData);
                  } catch (err) {
                    console.error("Verification failed:", err.response?.data || err.message);
                    alert("Payment verification failed");
                  }
                },
                theme: {
                  color: "#3399cc",
                },
              };
            
              const rzp1 = new window.Razorpay(options);
              rzp1.open();
            };
  return (
      <div>
        

                <CarouseInsurance/>
          <div className="container mt-5">
              <div className="row" >
                
                {policy && policy.length > 0 && (
  <div className="mt-3 text-center">
    <h2><b>Top 5 Term Insurance Policies</b></h2>
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
      <thead>
        <tr style={{ backgroundColor: '#f2f2f2' }}>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Term Policy ID</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Term Policy Number</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Status</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Start Date</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>End Date</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Coverage</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Premium</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Currency</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Action</th>
        </tr>
      </thead>
      <tbody>
        {policy.map((p, index) => (
          
          <tr key={index} style={{ textAlign: 'center' }}>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{p.policy_id}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{p.policy_number}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{p.status}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{p.start_date}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{p.end_date}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>₹{p.coverage_amount}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>₹{p.premium}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{p.currency}</td>
            <td style={{ border: '1px solid #ddd', padding: '8px' }}>
             <button
  style={{ padding: '6px 12px', backgroundColor: '#FFD43B', color: '#fff', border: 'none', borderRadius: '4px' }}
  onClick={() => handleClick(p.premium, p._id, p.policy_id, p.policy_number, p.coverage_amount)
    
  }>
  <strong>Buy</strong>
</button>

            </td>
          </tr>
          
        ))}
      </tbody>
    </table>
  </div>
)}
              
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

export default TermInsurance