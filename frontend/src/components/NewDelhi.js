import React from 'react'
import Navbar from '../components/Navbar'
import POSP from '../pages/POSP'

function NewDelhi() {
  return (
    <div>          
      <Navbar/>
        <div className='container mt-5'>
    <div className="card mb-3" style={{maxwidth: '540px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://media.licdn.com/dms/image/v2/C4E03AQGtjy6GBPylOA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1625377657981?e=2147483647&v=beta&t=U3FfHFWNlfeU2i6NCcTj1JWAYpD0H2epZM_oRJ5kkF4" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Deepanshu Jaglan</h5>
        <p className="card-text">Experience 6 Yrs | Rating: 5</p>
        <p className="card-text"><small className="text-muted">New Delhi</small></p>
      </div>
    </div>
  </div>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="data:image/jpeg;base64,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" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Pankaj Singh</h5>
        <p className="card-text">Experience 2 Yrs | Rating: 4</p>
        <p className="card-text"><small className="text-muted">New Delhi</small></p>
      </div>
    </div>
  </div>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgrcJtHu83KSrTD7tfC0HOluYRQpUTUBjH4A&s" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Daya Kishore</h5>
        <p className="card-text">Experience 8 Yrs | Rating: 5</p>
        <p className="card-text"><small className="text-muted">New Delhi</small></p>
      </div>
    </div>
  </div>
</div>
      </div>
      <POSP/>
                
      
      </div>
  )
}

export default NewDelhi