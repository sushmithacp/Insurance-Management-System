import { React,  useState, useEffect }  from 'react'
import Navbar from '../components/Navbar'
import Insurance from '../pages/Insurance';
import POSP from '../pages/POSP'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard, faHeadphonesSimple, faCircleUser, faRightToBracket, faCommentsDollar, faPercentage
 } from '@fortawesome/free-solid-svg-icons';
 import { jwtDecode } from 'jwt-decode'; 
import axios from 'axios';
import bajaj from '../images/bajaj.png';
import hdfc from '../images/hdfc.png';
import sf from '../images/sf.png';
import chola from '../images/chola.png';

function HealthInsurance() {
    const [policy, setPolicy] = useState(null);
    
      useEffect(() => {
        axios.get('http://localhost:5000/api/healthPolicies') 
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
    <div className="col-8">

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
  </div>
</div>

{policy && policy.length > 0 && (
  <div className="mt-3 text-center">
    <h2><b>Top 5 Health Insurance Policies</b></h2>
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
      <thead>
        <tr style={{ backgroundColor: '#f2f2f2' }}>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Bike Policy ID</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Bike Policy Number</th>
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
  style={{ padding: '6px 12px', backgroundColor: '#366bb0', color: '#fff', border: 'none', borderRadius: '4px' }}
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

export default HealthInsurance
