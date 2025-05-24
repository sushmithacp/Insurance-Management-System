import React from 'react'
import Navbar from '../components/Navbar'
import POSP from '../pages/POSP'


function Noida() {
  return (
    <div>
           <Navbar/>
    <div className='container mt-5'>
    <div className="card mb-3" style={{maxwidth: '540px'}}>
  <div className="row g-0">
    <div className="col-md-4">
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJeGuFAzn6eMoTPHzBH_a64CDWQwAJhY98sg&s" className="img-fluid rounded-start" alt="..."/>

      </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Rakesh</h5>
        <p className="card-text">Experience 6 Yrs | Rating: 5</p>
        <p className="card-text"><small className="text-muted">Noida</small></p>
      </div>
    </div>
  </div>
  <div className="row g-0">
    <div className="col-md-4">
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyvdp80n0FDhJ7g5VKfNjXGMOMR7bekOZ8DQ&s" className="img-fluid rounded-start" alt="..."/>
   </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">manoj</h5>
        <p className="card-text">Experience 8 Yrs | Rating: 3</p>
        <p className="card-text"><small className="text-muted">Noida</small></p>
      </div>
    </div>
  </div>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ8B1azME0vebScwHzKn_Wm2RtJIO3vVPQLQ&s" className="img-fluid rounded-start" alt="..."/>
       </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Agnish</h5>
        <p className="card-text">Experience 4 Yrs | Rating: 4</p>
        <p className="card-text"><small className="text-muted">Noida</small></p>
      </div>
    </div>
  </div>
</div>
      </div>
      <POSP/>
    </div>
  )
}

export default Noida