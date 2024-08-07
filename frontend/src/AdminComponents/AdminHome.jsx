import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePic1 from "../assets/images/HomePic1.png";
import map from "../assets/images/map.png";
import { Link, Element, animation as scroll } from 'react-scroll';

const AdminHome = () => {
  return (
    <div>

      <div className="relative min-h-screen flex-col">
        <div className="w-full bg-transparent flex items-center justify-end">
          <div className="text-center">
          <a href="/adminMain">adminMain</a>
            <h1 className="text-4xl font-bold mr-52">Admin Home Page</h1>
            <p className="text-lg mr-52">Additional text or content can go here.</p>
            <Link to="map_section" smooth={true} duration={500}>
              <button type="button" class="mr-56 mt-4 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200  font-medium rounded-lg text-sm px-12 py-2.5 text-center me-2 mb-2">map</button>
            </Link>
          </div>
          <div className="">
            <img
              src={HomePic1}
              alt="Home"
              className="object-cover w-full h-96 mt-44"
            />
          </div>
        </div>
        <Element name="map_section">
          <div className=''>
            <img src={map} alt="" className='w-1/2 h-96 m-20' />
          </div>
        </Element>
        <ToastContainer />
      </div>
    </div>
  )
}

export default AdminHome
