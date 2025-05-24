import { React,  useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Insurance from '../pages/Insurance';
import POSP from '../pages/POSP'
 import { jwtDecode } from 'jwt-decode'; 
import axios from 'axios';
import img1 from '../images/bike-landing.svg';
import bajaj from '../images/bajaj.png';
import hdfc from '../images/hdfc.png';
import sf from '../images/sf.png';
import chola from '../images/chola.png';

function BikeInsuranceDetails() {
  const [policy, setPolicy] = useState(null);
  
    useEffect(() => {
      axios.get('http://localhost:5000/api/bikePolicies') 
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
    
    <div className="col-2">
      <div className=" p-3 text-center"></div>
    </div>

 
<div className="col-8">
  <div className="bg-white p-3">Home {'>'} Bike Insurance</div>
  <h2 className="card-title">Bike Insurance</h2>

  <div className="card" style={{ border: "1px solid rgba(0, 0, 0, 0.2)" , height: "40vh"}}>
    <div className="card-body">
      
      <div className="row">
       
        <div className="col-8">
          <h4 className="card-title">Bike insurance starting from<b> ₹ 6/day*</b></h4>
          <p className="card-text">Bike No {'>'} Select Plan {'>'} Policy Issued</p>
          <p>Insurance companies and agents utilize text messages for various purposes, including policy reminders, payment reminders, sales outreach, claims updates, and marketing promotions</p>
          <p style={{color: "darkblue"}}>Disclaimer: Actual Premium might vary basis your Insurance</p>
        </div>

       
        <div className="col-4 d-flex align-items-center">
          <img
            src="https://cms-img.coverfox.com/essentials-for-buying-a-long-term-comprehensive-bike-insurance-plan.webp"
            
            className="img-fluid"
            alt="Bike"
            style={{ maxHeight: "150px", objectFit: "cover" }}
          />
        </div>
      </div>
       </div>
  
</div>
  </div>

{policy && policy.length > 0 && (
  <div className="mt-3 text-center">
    <h2><b>Top Bike Insurance Policies</b></h2>
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
  style={{ padding: '6px 12px', backgroundColor: '#1de7ab', color: '#fff', border: 'none', borderRadius: '4px' }}
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
                     <div className='container mt-5'>
<div className='row'>
  <div className="col-md-8">
      <h4 className="card-title mt-3 text-center"><b>What Is Bike Insurance?</b></h4>
                <p>If you own a bike, you know its value: the thrill of adventure, fun rides with the family,
                   and the convenience of travelling in the local area. Indian households very quickly become 
                   attached to their bikes, and to ensure these sentiments are protected, getting bike insurance 
                   is very important. Bike Insurance protects your vehicle from the potential risk of damage and
                    ensures that your bike continues to provide memories even after a setback.</p>
                    </div>
  <div className="col-md-4">

                          <img src={img1} alt="image1" />
  </div>

                          </div>
                          <h4 className="card-title mt-3 text-center">Why Do You Need Bike Insurance?</h4>
                          <p>1.Legal Requirement - In India, having at least a third-party liability cover is mandatory to legally ride on the roads. Failure to comply can lead to fines or even license suspension</p>
                          <p>2.Financial Security - Bike insurance protects you from the financial burden of repairing damages to your vehicle or another party’s, especially in accidents</p>
                          <p>3.Protection Against Theft - If your bike is stolen, comprehensive coverage can compensate you for the loss, mitigating out-of-pocket expenses.</p>
                          <p>4.Personal Accident Cover - Most bike insurance policies include personal accident coverage, providing financial support for medical treatment in case of injuries sustained due to an accident.</p>
                          <p>5.Third-Party Liability - If your bike is involved in an accident causing damage or injury to someone else, third-party liability coverage pays for their expenses or legal claims, reducing your financial risk.</p>
                          <h4 className="card-title mt-3 text-center">Key Features of a Bike Insurance Policy</h4>
                          <p>Below listed are the key features and benefits of buying a bike insurance policy:

Legal Compliance: The Indian Motor Act 1988 makes it mandatory to purchase third-party insurance for every motor vehicle. Hence third-party bike insurance is necessary to purchase as it fulfils a legal obligation.

Third-Party Liability Coverage: The Third-party liability policy covers the compensation you are obliged to pay for damaging any third person's property or causing injury to a third person by your bike. It also covers the compensation to be paid if the accident caused a disability or death of the victim.

Own Damage Protection: In a Comprehensive Plan or a standalone own damage insurance policy, the risks of your bike getting damaged are covered in the insurance plan. It covers the damages caused by accidents, natural calamities, theft, fire, vandalism, etc.</p>

                    </div>

                     <div className='container mt-5'>
    <div className="card mb-3" style={{maxwidth: '540px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs0LxmUOGPzTQ-jSYkJhcQDGNT00Si9U6UGQ&s" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">New India Bike Insurance</h5>
        <p className="card-text">Starting from $714</p>
        <p className="card-text"><small className="text-muted">Claim Settlement Ratio - 98.54%</small></p>
      </div>
    </div>
  </div>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHgduFJ425AWP2fFR_OZYfZ6Qemt478x11zNAKZjBTIzTCnDYTDZPd_FyzOcalbTrk8TI&usqp=CAU" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">HDFC Ergo Bike Insurance</h5>
        <p className="card-text">Starting from $812</p>
        <p className="card-text"><small className="text-muted">Claim Settlement Ratio - 100%</small></p>
      </div>
    </div>
  </div>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSSi8fWPdddbs0NquTbta4JqdJqCEtdvfs-w&s" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Bharat Bike Insurance</h5>
        <p className="card-text">Starting from $844 </p>
        <p className="card-text"><small className="text-muted">Claim Settlement Ratio - 98.65%</small></p>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  


    <div className="col-2">
      <div className=" p-3 text-center"></div>
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

export default BikeInsuranceDetails
