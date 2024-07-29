import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import defaultHomeLogo from '../../assets/default-home-icon.png';
import defaultHomeLogo3 from '../../assets/default-home-logo3.png';

const Home = () => {
  return (
    <div className="">
      {/* <h1>Welcome to My Fullstack App</h1> */}
      <div className="text-center">
        <div className="flex flex-row justify-center items-center">
          <img className="h-96 w-96 ml-56 mt-28" src={defaultHomeLogo3} alt="" />
          <div
            className="bg-cover bg-no-repeat w-full ml-56"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1530053969600-caed2596d242')",
            }}
          >
            <h1 className="font-black font-serif text-xl md:text-4xl bg-white mix-blend-lighten uppercase "> <span className="text-6xl">Apartment</span>
              <br />Management </h1>
            <div className="bg-white font-semibold font-serif text-slate-500 text-sm ">
              Efficiently manage your apartment complex with our comprehensive platform, featuring real-time availability tracking and a suite of advanced tools to streamline operations and enhance resident satisfaction
            </div>
          </div>
        </div>
        <div class="relative inline-flex  group items-center">
                <div
                    class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                </div>
                <a href="#" title="Get quote now"
                    class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    role="button">view the map
                </a>
            </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
