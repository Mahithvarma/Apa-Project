// import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './DefaultComponents/Footer';
import Navbar from './DefaultComponents/Navbar';
import AdminRegister from './DefaultComponents/pages/AdminRegister';
import Contact from './DefaultComponents/pages/Contact';
import Help from './DefaultComponents/pages/Help';
import Home from './DefaultComponents/pages/Home';
import Login from './DefaultComponents/pages/Login';

const App = () => {
  return (
    <Router>
      <div className="bg-[#fbfbfb]">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin-register" element={<AdminRegister />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
