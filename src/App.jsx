import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './shared/Header'
import Footer from './shared/Footer';
import TermsAndConditions from './components/TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import Career from './components/Careers';
import OurServices from './components/OurServices';
import Blog from './components/Blog';

function App() {

  return (
    <>
    <Router>
      <Header/>
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="/careers" element={<Career/>}/>
        <Route path="/services" element={<OurServices/>}/>
        <Route path="/blogs" element={<Blog/>}/>
        
        </Routes>
       <Footer/>

        </Router>
    </>
  );
}

export default App;
