
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Insurance from './pages/Insurance';
import InsuranceAdvisors from './pages/InsuranceAdvisors';
import Renew from './pages/Renew';
import Support from './pages/Support';
import News from './pages/News';
import POSP from './pages/POSP';
import Popupbusiness from './components/Popupbusiness'
import CarInsuranceDetails from './components/CarInsuranceDetails'
import BikeInsuranceDetails from './components/BikeInsuranceDetails'
import HealthInsurance from './components/HealthInsurance'
import FamilyHealthInsurance from './components/FamilyHealthInsurance'
import BusinessInsurance from './components/BusinessInsurance'
import TermInsurance from './components/TermInsurance'
import InvestmentInsurance from './components/InvestmentInsurance'
import GuaranteedInsurance from './components/GuaranteedInsurance'
import CarouseInsurance from './components/CarouseInsurance';
import NewDelhi from './components/NewDelhi';
import Pune from './components/Pune';
import Hyderabad from './components/Hyderabad';
import Bangaluru from './components/Bangaluru';
import Kolkata from './components/Kolkata';
import Noida from './components/Noida';
import Lucknow from './components/Lucknow';
import Gurgaon from './components/Gurgaon';

import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Admin from './pages/Admin';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'>
<Route index  element={<Home/>} /> 
<Route  path='/insurance' element={<Insurance/>} />
<Route  path='/insuranceadvisors' element={<InsuranceAdvisors/>} />
<Route  path='/renew' element={<Renew/>} />
<Route  path='/support' element={<Support/>} />
<Route  path='/news' element={<News/>} />
<Route  path='/posp' element={<POSP/>} />
<Route  path='/popupbusiness' element={<Popupbusiness/>} />
<Route path='/car-insurance' element={<CarInsuranceDetails/>} />
<Route path='/bike-insurance' element={<BikeInsuranceDetails/>} />
<Route path='/health-insurance' element={<HealthInsurance/>} />
<Route path='/health-insurance' element={<FamilyHealthInsurance/>} />
<Route path='/business-insurance' element={<BusinessInsurance/>} />
<Route path='/term-insurance' element={<TermInsurance/>} />
<Route path='/investment-insurance' element={<InvestmentInsurance/>} />
<Route path='/guaranteed-insurance' element={<GuaranteedInsurance/>} />
<Route path='/carouse-insurance' element={<CarouseInsurance/>} />
<Route path='/newDelhi-insurance' element={<NewDelhi/>} />
<Route path='/pune-insurance' element={<Pune/>} />
<Route path='/Hyderabad-insurance' element={<Hyderabad/>} />
<Route path='/Bangaluru-insurance' element={<Bangaluru/>} />
<Route path='/Kolkata-insurance' element={<Kolkata/>} />
<Route path='/Noida-insurance' element={<Noida/>} />
<Route path='/Lucknow-insurance' element={<Lucknow/>} />
<Route path='/Gurgaon-insurance' element={<Gurgaon/>} />

<Route path="/register" element={<Register />} />
<Route path="/login" element={<Login />} />
<Route path="/profile" element={<Profile />} />
<Route path="/admin" element={<Admin />} />

      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
