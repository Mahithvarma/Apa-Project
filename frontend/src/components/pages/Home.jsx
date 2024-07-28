import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

  // useEffect(() => {
    
  // }, []);
  return (
    <div className="p-72">
      <h1>Welcome to My Fullstack App</h1>
      <ToastContainer />
    </div>
  );
};

export default Home;
