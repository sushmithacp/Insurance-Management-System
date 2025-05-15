import React from 'react'
import Navbar from '../components/Navbar'

function News() {
  return (
    <div>
       <Navbar/>
      <div className='container mt-5'>
    <div className="card mb-3" style={{maxwidth: '540px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://cdn.5280.com/2020/04/local-news-stock_getty-images.jpg" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Union Budget 2025: Key Highlights</h5>
        <p className="card-text">Major announcements and highlights of the 2025 Union Budget. From zero income tax on earnings up to ₹12lakhs and revised tax slabs to increased FDI in insurance, boost in support for agriculture</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">From October 1st, Life Insurance Refund Will Be Higher When You Surrender Your Policy</h5>
        <p className="card-text">With the new updates and introduction of the new Special Surrender Value (SSV) regulations, life insurance policy holders will now get more money refunded as compared to before 1st of October 2024.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://images.ctfassets.net/lzny33ho1g45/1myGI9Ws1d0hbffMs6BcnD/35520a6e4691a177bc13c19615177098/best_news_apps.jpg?w=1520&fm=jpg&q=31&fit=thumb&h=760" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Union Cabinets Gives An Approval For Health Coverage For All Over 70 Years</h5>
        <p className="card-text">Irrespective of their income, all Indian citizens above the age of 70 years will get free health coverage under the Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (AB PM-JAY). </p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
      </div>
      
    </div>
  )
}

export default News
