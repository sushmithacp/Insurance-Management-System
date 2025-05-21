import { React,  useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { jwtDecode } from 'jwt-decode'; 
import axios from 'axios';

function CarInsuranceDetails() {
  const [policy, setPolicy] = useState(null);
console.log("poliii",policy);

  useEffect(() => {
    axios.get('http://localhost:5000/api/policies') 
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
      <Navbar />
      <div className="container mt-5">
        <div className="row">

          <div className="col-2">
            <div className=" p-3 text-center"></div>
          </div>


          <div className="col-8">
            <div className="bg-white p-3">Home {'>'} Car Insurance</div>
            <h2 className="card-title">Car Insurance</h2>

            <div className="card" style={{ border: "1px solid rgba(0, 0, 0, 0.2)", height: "40vh" }}>
              <div className="card-body">

                <div className="row">

                  <div className="col-8">
                    <h4 className="card-title">Car insurance starting from<b> ₹ 6/day*</b></h4>
                    <p className="card-text">Car No {'>'} Select Plan {'>'} Policy Issued</p>
                    <p>Insurance companies and agents utilize text messages for various purposes, including policy reminders, payment reminders, sales outreach, claims updates, and marketing promotions</p>
                    <p style={{ color: "darkblue" }}>brand new car?</p>
                  </div>
 <div className="col-4 d-flex align-items-center">
                    <img
                      src="https://images.hindustantimes.com/auto/img/2023/09/28/600x338/1234_1674800137519_1695887161971.jpg"
                           className="img-fluid"
                      alt="Car"
                      style={{ maxHeight: "150px", objectFit: "cover" }}
                    />
                  </div>



                </div>
          </div>
              </div>
            </div>   
              
{policy && policy.length > 0 && (
  <div className="mt-3 text-center">
    <h2><b>Top Car Insurance Policies</b></h2>
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
      <thead>
        <tr style={{ backgroundColor: '#f2f2f2' }}>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Policy ID</th>
          <th style={{ border: '1px solid #ddd', padding: '8px' }}>Policy Number</th>
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
  style={{ padding: '6px 12px', backgroundColor: '#de601b', color: '#fff', border: 'none', borderRadius: '4px' }}
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

<h4 className="card-title mt-3 text-center"><b>What is Car Insurance?</b></h4>
                <p>Once you’ve secured the car of your dreams, the next step is to get car insurance from a reliable a provider.
                   Think of it as a safety net for your beloved ride and the loved ones who will use it. Car insurance, 
                   also called four wheeler insurance, is a contract between an insurer and you, the policyholder 
                   to protect you from unpredictable circumstances like accidents, theft or natural calamities. 
                   In India, car owners have the choice between three types of four-wheeler insurance, 
                  namely Standalone own-damage insurance, Third-party insurance, and Comprehensive coverage.</p><br></br>
                  
                  <p>According to the Motor Vehicles Act of 1988, every car owner must have at least a third-party 
                    insurance policy. This provides coverage in case you are ever involved in an accident causing 
                    physical or property damage. You could also choose to level up and opt for comprehensive insurance
                     plans which will provide coverage in case of theft, damage via natural causes, or mechanical issues</p><br></br>
             
                   <p>Today, getting car insurance or renewing an existing 4-wheeler policy has never been easier. 
                    One can find multiple policy options online for a variety of price ranges, but at InsuranaceDekho, 
                    we believe in helping you stay protected without breaking the bank. Choose from the policy options below,
                     or talk to us to find the four-wheeler policy that best fits your needs.</p>
             


         

        </div>
      </div>
<Footer/>

    </div>
  )
}

export default CarInsuranceDetails
