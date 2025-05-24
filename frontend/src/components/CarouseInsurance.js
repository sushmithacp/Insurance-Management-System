import React from 'react'
import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
import img1 from '../images/img1.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPercentage
 } from '@fortawesome/free-solid-svg-icons';

function CarouseInsurance() {
  return (
      <div>
         <Navbar/>
              <div className="container-fluid">
  <div className="row">
    
    <div className="col-7">
      {/* <img src="../images/img1.jpeg" alt='image1' ></img>  */}
      <img src={img1} alt="image1" />
    </div>

    <div className="col-5 mb-4">
  <div className='container-fluid'>
    <form 
      className="p-4 border rounded shadow-sm bg-light" 
      onSubmit={(e) => {
        e.preventDefault();

        const name = e.target.name.value.trim();
        const age = e.target.age.value;
        const dob = e.target.dob.value;
        const income = e.target.income.value;
        const phone = e.target.phone.value.trim();

        if (!name || !age || !dob || !income || !phone) {
          alert("Please fill in all the fields.");
          return;
        }

        if (!/^\d{10}$/.test(phone)) {
          alert("Please enter a valid 10-digit phone number.");
          return;
        }

        alert("Thank You!, Our relationship manager will call you regarding your Insurance Plans.");
      }}
    >
      <h3 className="text-center mb-4">
        <FontAwesomeIcon icon={faPercentage} style={{ color: "#5c1aad", fontSize: "20px" }} /> offer text
        <br />
        Get Online Discount up to 25% off*
      </h3>

      <p>Buy Health Plans from Rs. 10/day*</p>

      <div className="mb-3">
        <label>Name</label>
        <input type="text" name="name" className="form-control mb-3" placeholder="Name" />

        <label>Age</label>
        <input type="number" name="age" className="form-control mb-3" placeholder="Age" />

        <label>Date Of Birth</label>
        <input type="date" name="dob" className="form-control mb-3" />

        <label>Annual Income (In lakhs)</label>
        <input type="number" name="income" className="form-control mb-3" placeholder="Annual Income" />

        <label>Phone Number</label>
        <input type="text" name="phone" className="form-control mb-4" placeholder="Phone Number (10 digits)" />
      </div>

      <button type="submit" className="btn btn-danger w-100">View Plans</button>
    </form>
  </div>
</div>


</div>

 <div className="container">
 <div className="row">
  <div className="col-12 mb-4">
 <h2 className="card-title text-center">Best Life/Term Insurance Plans for High Returns</h2> 
         <p>When it comes to financial planning, securing the future of yourself and your loved ones is extremely important. 
          Life insurance beyond being a safety net, can also serve as an investment tool if you invest in the right kind of plan.
           Several investment plans offer great returns, some of which have been enlisted below.</p>
           <p>Bajaj Allianz POS Goal Surkasha: The Bajaj Allianz POS Goal Suraksha plan is a Non-Participating Non-linked 
            Life Insurance Plan. This plan provides both maturity and death benefits. Under maturity benefit, if the policyholder
             meets an unfortunate death, then financial assistance will be given to the family of the policyholder. On the other 
             hand, if the policyholder survives the policy term, maturity benefit will be paid out. In addition, the Bajaj Allianz 
             POS Goal Suraksha is also a wealth creation plan. For instance, if you invest INR 1 lakh for 10 years, 
            then will be able to get INR 27 lakh, after 20 years.</p>
            <p>HDFC Life Sanchay Fixed Maturity Plan: The HDFC Life Sanchay Fixed Maturity Plan is a non-linked, 
              non-participating, Individual, savings, life insurance plan. You can buy this plan as both a joint and a single plan.
               Ideal for long-term investors, it ensures a secure future with disciplined savings. By locking in INR 1 lakh for 10 
               years, this plan has the potential to yield INR 25 lakh after 20 years, offering an impressive return on investment. 
              HDFC Life Sanchay stands out for its fixed maturity benefit and a sense of financial security</p>
              <p>Axis Max Life Smart Wealth Plan: The Axis Max Life Smart Wealth Plan has a minimum entry age of 91 days and a maximum 
                entry age of 65 years. This plan provides maturity benefits, death benefits, and surrender benefits to the policyholders. Offering a dual advantage of protection and savings,
                 this plan ensures financial security and growth. With flexible premium payment options and a choice of funds catering
                  to investors risk appetite, it empowers investors to customise their portfolios.</p>
                  <p>TATA AIA Guaranteed Return Insurance Plan: The TATA AIA Guaranteed Return Insurance Plan is an Individual,
                     non-linked, non-participating, life insurance savings plan. This plan provides guaranteed returns so that your 
                     financial needs are never left compromised. The TATA AIA Guaranteed Return Insurance Plan provides life insurance 
                     coverage from day 1. Moreover, this plan also works as loan collateral and provides lumpsum payout options - lumpsum,
                      regular income, and whole life.</p>
                      <p>HDFC Life Click 2 Wealth: The HDFC Life Click 2 Wealth is yet another investment plan that offers great returns in
                         the long run. This plan provides the option to choose between 11 different funds to get maximum returns. You can
                          even switch between the different funds during the policy term. Moreover, to further enhance the plan benefits,
                           you can even include riders such as HDFC Life Income Benefit on Accidental Disability Rider,
                         HDFC Life Critical Illness Rider, and more.</p>
  </div>
 </div>
 </div>

</div>
{/* <Footer/> */}
</div>
  )
}

export default CarouseInsurance