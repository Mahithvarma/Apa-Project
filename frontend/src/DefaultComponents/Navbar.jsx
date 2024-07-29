// eslint-disable-next-line no-unused-vars
import React from 'react';
import NavIcon from '../assets/images/nav-icon.png';

// const Navbar = () => {
//   return (
//     <nav>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/login">Login</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//         <li><Link to="/help">Help</Link></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className="bg-transparent sticky w-full">
      <header className="flex flex-col lg:flex-row justify-between items-center p-4">
        <div className="flex w-64 mx-4 border-b-2 lg:border-b-0 items-center p-4 lg:p-0">
          {/* <h1 className="flex text-3xl font-bold lg:text-3xl ml-8 text-[#000000] ">Apartment Management</h1> */}
          {/* <p className="text-lg text-[#000000] font-light ml-4 mt-1">Order Now</p> */}
          <img src={NavIcon} alt="Logo" />
        </div>

        <nav className={'visible'}>
          <ul className="flex flex-col p-4 space-y-4 lg:space-y-0 items-center lg:flex-row lg:space-x-4 lg:p-5 lg:mr-8">
            <li>
              <Link className="font-semibold text-xl m-4 p-2 text-[#000000a0] hover:text-[#8f1eff] transition-all duration-300" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="font-semibold text-xl m-4 p-2 text-[#000000a0] hover:text-[#8f1eff] transition-all duration-300" to="/About">
                About
              </Link>
            </li>
            <li>
              <Link className="font-semibold text-xl m-4 p-2 text-[#000000a0] hover:text-[#8f1eff] transition-all duration-300" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="font-semibold text-xl m-4 p-2 text-[#000000a0] hover:text-[#8f1eff] transition-all duration-300" to="/Service">
                Service
              </Link>
            </li>
            <li>
              <Link className="font-semibold text-md m-4 px-6 py-2  bg-[#8b41df] text-[#ebebeb] hover:bg-[#ae6ef8] transition-all duration-300" to="/login">
                Login
              </Link>
            </li>

          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
