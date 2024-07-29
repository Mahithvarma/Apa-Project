import axios from "axios";
import React, { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(true);
  const emailormobileRef = useRef("");
  const passwordRef = useRef("");


  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    hideProgressBar: false,
    theme: "dark",
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    const emailormobile = emailormobileRef.current.value;
    const password = passwordRef.current.value;
    if (validate()) {
      try {
        const response = await axios.post("http://localhost:5000/api/auth/adminLogin", { emailOrMobile: emailormobile, password: password }, { withCredentials: true });
        if (response) {
          console.log(response);
          navigate('/');
        }
      }
      catch (err) {
        if (err.response) {
          toast.error(err.response.data.message, toastOptions);
        }
        else {
          toast.error("Something went wrong!", toastOptions);
        }
      }
    }
  }

  const validate = (e) => {
    let emailormobile = emailormobileRef.current.value;
    let password = passwordRef.current.value;
    if (emailormobile === "") {
      alert("Email/Mobile is required");
      return false;
    }
    if (password === "") {
      alert("Password is required");
      return false;
    }
    return true;
  }
  return (
    <div className=''>

      {isAdmin ? (
        <div className="bg-gray-100 bg-home-bg min-h-screen flex items-center justify-center bg-cover bg-center h-screen">
          <div className="relative z-10 p-4 rounded-md shadow-lg bg-transparent">
            <button className="bg-white p-2 mb-3 text-sm rounded-md font-bold" onClick={() => setIsAdmin(!isAdmin)}>
              Switch to {isAdmin ? 'User' : 'Admin'} Login
            </button>
            <h1 className="text-xl font-bold mb-4 text-gray-50">Admin Login</h1>
            <form action="#" onSubmit={handleAdminLogin}>
              <div className="mb-4">
                <label className="block text-white font-bold mb-2" htmlFor="email">Email/Mobile:</label>
                <input
                  ref={emailormobileRef}
                  className="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                  id="email" type="email" placeholder="Email/Mobile" />
              </div>
              <div className="mb-4">
                <label className="block text-white font-bold mb-2" htmlFor="password">Password</label>
                <input
                  ref={passwordRef}
                  className="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                  id="password" type="password" placeholder="Password" />
              </div>
              <div className="flex items-center justify-between gap-8">
                <button
                  className="bg-slate-500 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit">
                  Sign In
                </button>
                <a className="inline-block align-baseline font-bold text-sm text-slate-50 hover:text-cyan-800"
                  href="#">
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>
          <ToastContainer />
        </div>
      ) : (
        <div className=" min-h-screen flex items-center justify-center bg-cover bg-center h-screen bg-admin-bg">
          <div className="relative z-10 p-4 rounded-md shadow-lg bg-transparent">
            <button className="bg-white p-2 mb-3 text-sm rounded-md font-bold" onClick={() => setIsAdmin(!isAdmin)}>
              Switch to {isAdmin ? 'User' : 'Admin'} Login
            </button>
            <h1 className="text-xl font-bold mb-4 text-gray-50">User Login</h1>
            <form action="#" method="POST">
              <div className="mb-4">
                <label className="block text-white font-bold mb-2" htmlFor="email">Email/Mobile:</label>
                <input
                  className="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                  id="email" type="email" placeholder="Email/Mobile" />
              </div>
              <div className="mb-4">
                <label className="block text-white font-bold mb-2" htmlFor="password">Password</label>
                <input
                  className="appearance-none border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
                  id="password" type="password" placeholder="Password" />
              </div>
              <div className="flex items-center justify-between gap-8">
                <button
                  className="bg-slate-500 hover:bg-slate-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button">
                  Sign In
                </button>
                <a className="inline-block align-baseline font-bold text-sm text-slate-50 hover:text-cyan-800"
                  href="#">
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>
          <ToastContainer />
        </div>
      )}

    </div>
  );
};

export default Login;
