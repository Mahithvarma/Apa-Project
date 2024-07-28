import React, { useRef, useState } from 'react';



const Login = () => {
  const [isAdmin, setIsAdmin] = useState(true);
  const emailormobileRef = useRef("");
  const passwordRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailormobileRef.current.value, passwordRef.current.value);
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
            <form action="#" onSubmit={handleSubmit}>
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
        </div>
      )}
    </div>
  );
};

export default Login;
