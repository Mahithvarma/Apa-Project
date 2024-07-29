// import React from 'react';

// const Footer = () => {
//   return (
//     <footer>
//       <p>© 2024 My Fullstack App</p>
//     </footer>
//   );
// };

// export default Footer;

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div id="footer" className="bg-[#494949] text-[#ebebeb] p-1">
      <footer>
        <div className="container mx-auto m-2 flex flex-col lg:flex-row justify-between items-center border-b border-gray-800 pb-4 mb-4">
          <div className="mb-4 lg:mb-0">
            <h1 className="text-2xl font-bold"></h1>
            <p className="text-2xl font-black font-semibold">Contact: <span className="text-xl font-black">925721888</span></p>
            <p className="text-xl font-black ml-8"> example@gmail.com </p>
          </div>
          {/* <div>
            <h2 className="text-lg font-semibold mb-2">Contribute Us</h2>
          </div> */}
        </div>
        <div className="text-center">
          <p>&copy; {year} All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;