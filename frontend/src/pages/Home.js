import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Cards from '../components/Cards'
import happysmiles from '../images/happysmiles.svg';
import google from '../images/google.svg';
import file from '../images/file.svg';
import './Home.css'; 

import bajaj from '../images/bajaj.png';
import hdfc from '../images/hdfc.png';
import sf from '../images/sf.png';
import chola from '../images/chola.png';
import Insurance from '../pages/Insurance';
import POSP from '../pages/POSP'

function Home() {
  return (
    <div>
      <Navbar/>
      <Carousel/>
      <Cards/>
      
      <div className="container mt-5" >
        <div className='row'>
            <div className="col-3"></div>

      <div className="col-2" style={{ display: 'flex', alignItems: 'center' }}>
       <img src={happysmiles} alt="image1" style={{width:'20'}}/>
        <div>
          <p style={{ margin: 0 }}>11 Mn+</p>
          <p style={{ margin: 0 }}>Happy Smiles</p>
        </div>
      </div>
      <div className="col-2" style={{ display: 'flex', alignItems: 'center' }}>
       <img src={google} alt="image1" style={{width:'20'}}/>
        <div>
          <p style={{ margin: 0 }}>4.8</p>
          <p style={{ margin: 0 }}>Rated on Google</p>
        </div>
      </div>
      <div className="col-2" style={{ display: 'flex', alignItems: 'center' }}>
       <img src={file} alt="image1" style={{width:'20'}}/>
        <div>
          <p style={{ margin: 0 }}>95k+</p>
          <p style={{ margin: 0 }}>Claims Served</p>
        </div>
      </div>
            <div className="col-3"></div>

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

export default Home
