// import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePic from "../../assets/images/HomePic.png";

const Home = () => {
  return (
    <div className="relative min-h-screen flex">
      
      
      <div className="w-1/2 bg-transparent flex items-center justify-center p-8 relative">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Your Text Here</h1>
          <p className="text-lg">Additional text or content can go here.</p>
        </div>
      </div>

      <div className="w-1/2 h-96 relative mt-36">
      <img
          src={HomePic}
          alt="Home"
          className="object-cover w-full h-full"
        />
      </div>
      
    <ToastContainer />
    </div>
  );
};

export default Home;
