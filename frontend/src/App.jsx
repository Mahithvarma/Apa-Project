import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AdminRegister from './components/pages/AdminRegister';
import Contact from './components/pages/Contact';
import Help from './components/pages/Help';
import Home from './components/pages/Home';
import Login from './components/pages/Login';

const App = () => {
  return (
    <Router>
      <div>
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
