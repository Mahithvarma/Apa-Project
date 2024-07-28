import React from 'react';

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
    <div className=" bg-[#fffefe] fixed w-full z-10">
      <header className="flex flex-col lg:flex-row justify-between items-center">
        <div className="flex w-full mx-4 border-b-2 lg:border-b-0 items-center p-4 lg:p-0">
          <h1 className="flex text-3xl font-bold lg:text-3xl text-[#000000] ">Apartment Management</h1>
          {/* <p className="text-lg text-[#000000] font-light ml-4 mt-1">Order Now</p> */}
        </div>

        <nav className={'visible'}>
          <ul className="flex flex-col p-4 space-y-4 lg:space-y-0 items-center lg:flex-row lg:space-x-4 lg:p-5 lg:mr-8">
            <li>
              <Link className="font-semibold p-4 text-[#000000] hover:text-[rgb(255,255,255)] hover:bg-black hover:p-2 hover:rounded-lg" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="font-semibold p-4 text-[#000000] hover:text-[#ffffff] hover:bg-black hover:p-2 hover:rounded-lg" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="font-semibold p-4 text-[#000000] hover:text-[#ffffff] hover:bg-black hover:p-2 hover:rounded-lg" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="font-semibold p-4 text-[#000000] hover:text-[#ffffff] hover:bg-black hover:p-2 hover:rounded-lg" to="/help">
                Help
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
