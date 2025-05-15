import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
 
function BikeInsuranceDetails() {
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
          <p style={{color: "darkblue"}}>brand new Bike?</p>
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

      <h4 className="card-title mt-3 text-center"><b>What Is Bike Insurance?</b></h4>
                <p>If you own a bike, you know its value: the thrill of adventure, fun rides with the family,
                   and the convenience of travelling in the local area. Indian households very quickly become 
                   attached to their bikes, and to ensure these sentiments are protected, getting bike insurance 
                   is very important. Bike Insurance protects your vehicle from the potential risk of damage and
                    ensures that your bike continues to provide memories even after a setback.</p>
                     <div className='container mt-5'>
    <div className="card mb-3" style={{maxwidth: '540px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs0LxmUOGPzTQ-jSYkJhcQDGNT00Si9U6UGQ&s" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">New India Bike Insurance</h5>
        <p className="card-text">Starting from 714</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
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
        <p className="card-text">Starting from 812</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
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
        <p className="card-text">Starting from 844 </p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
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
<Footer/>

    </div>
  )
}

export default BikeInsuranceDetails
