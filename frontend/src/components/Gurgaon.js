import React from 'react'
import Navbar from '../components/Navbar'
import POSP from '../pages/POSP'


function Gurgaon() {
  return (
    <div>     
            <Navbar/>
            <div className='container mt-5'>
    <div className="card mb-3" style={{maxwidth: '540px'}}>
  <div className="row g-0">
    <div className="col-md-4">
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAxOiUg8oTe5fJZfkD7vJtgLzo8uGAb5TZ6A&s" className="img-fluid rounded-start" alt="..."/>

      </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Shishir</h5>
        <p className="card-text">Experience 6 Yrs | Rating: 5</p>
        <p className="card-text"><small className="text-muted">Gurgaon</small></p>
      </div>
    </div>
  </div>
  <div className="row g-0">
    <div className="col-md-4">
                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNg-RPBctqDxAvc0eXO0gER04eLH-oD2ZEUA&s" className="img-fluid rounded-start" alt="..."/>
  </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Praveen</h5>
        <p className="card-text">Experience 8 Yrs | Rating: 4.5</p>
        <p className="card-text"><small className="text-muted">Gurgaon</small></p>
      </div>
    </div>
  </div>
  <div className="row g-0">
    <div className="col-md-4">
                       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVJryALHAyd_yxUzOTFH-HCTNmpwQv9S6XYA&s" className="img-fluid rounded-start" alt="..."/>
  
  </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">gaurav</h5>
        <p className="card-text">Experience 4 Yrs | Rating: 4</p>
        <p className="card-text"><small className="text-muted">Gurgaon</small></p>
      </div>
    </div>
  </div>
</div>
      </div>
      <POSP/>
</div>
  )
}

export default Gurgaon