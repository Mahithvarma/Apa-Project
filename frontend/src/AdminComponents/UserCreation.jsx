import React, { useRef, useState } from 'react';
import axios from 'axios';


const UserCreation = () => {

  const [additionalMembers, setAdditionalMembers] = useState([]);

  const blockRef = useRef("");
  const mobileRef = useRef("");
  const emailRef = useRef("");
  const alterMobile = useRef("");
  const flatref = useRef("");

  const handleChange = () => {
    const mobile = mobileRef?.current.value;
    const email = emailRef?.current.value;
    const password = passwordRef?.current.value;
    const block = blockRef?.current.value;
    const flatNo = flatref?.current.value;
    const setAdditionalMembers = additionalMembers;
    const response = axios.post("http://localhost:5000/api/auth/familyRegister", {setAdditionalMembers, mobile, alternativeMobile, email, password, block, flatNo });
    if(response){
      alert("success");
    }
  };

  const addMember = () => {
    setAdditionalMembers([...additionalMembers, {}]);
  };

  const removeMember = (index) => {
    const newMembers = additionalMembers.filter((_, i) => i !== index);
    setAdditionalMembers(newMembers);
  };
  return (
    <div className="max-w-md mx-auto mt-4 mb-8 p-6 bg-white rounded-lg shadow-lg">
      <h1 className='font-bold text-xl mb-4'>New Family~</h1>
      <form id="user-form">
        <div className="user-info space-y-4">
          <div className="form-group">
            <label htmlFor="primary-member" className="block text-sm font-bold text-gray-700">Primary Member:</label>
            <input type="text" id="primary-member" name="primary-member" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div className="form-group">
            <label htmlFor="adhar" className="block text-sm font-bold text-gray-700">Aadhaar Number:</label>
            <input type="text" id="adhar" name="adhar" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div className="form-group">
            <label htmlFor="age" className="block text-sm font-bold text-gray-700">Age:</label>
            <input type="number" id="age" name="age" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div id="additional-info" className="space-y-4">
            {additionalMembers.map((_, index) => (
              <div key={index} className="user-info relative space-y-4">
                <div className="form-group">
                  <label htmlFor="secondary-member" className="block text-sm font-bold text-gray-700">Secondary Member:</label>
                  <input type="text" name="secondary-member" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div className="form-group">
                  <label htmlFor="adhar"  className="block text-sm font-bold text-gray-700">Aadhaar Number:</label>
                  <input type="text" name="adhar" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <div className="form-group">
                  <label htmlFor="age" className="block text-sm font-bold text-gray-700">Age:</label>
                  <input type="number" name="age" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
                <button type="button" className="remove-button absolute pt-3 pr-3 top-0 font-medium right-0 text-red-500" onClick={() => removeMember(index)}>Remove</button>
              </div>
            ))}
          </div>
          <div className="form-group">
            <button type="button" id="add-more" className="add-button bg-slate-700 font-bold text-white py-2 px-4 rounded-full" onClick={addMember}>Add Member</button>
          </div>
          <div className="form-group">
            <label htmlFor="mobile" className="block text-sm font-bold text-gray-700">Mobile Number:</label>
            <input ref={mobileRef} type="tel" id="mobile" name="mobile" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div className="form-group">
            <label htmlFor="alternate-mobile" className="block text-sm font-bold text-gray-700">Alternate Mobile Number:</label>
            <input ref={alterMobile} type="tel" id="alternate-mobile" name="alternate-mobile" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div className="form-group">
            <label htmlFor="email"  className="block text-sm font-bold text-gray-700">Email:</label>
            <input ref={emailRef} type="email" id="email" name="email" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div className="form-group">
            <label htmlFor="password"  className="block text-sm font-bold text-gray-700">Password:</label>
            <input ref={emailRef} type="password" id="password" name="password" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div className="form-group">
            <label htmlFor="block"  className="block text-sm font-bold text-gray-700">Block:</label>
            <input ref={blockRef} type="text" id="block" name="block" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div className="form-group">
            <label htmlFor="flatNo"  className="block text-sm font-bold text-gray-700">Flat NO:</label>
            <input ref={flatref} type="number" id="flatNo" name="flatNo" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
          </div>
          <div className="form-buttons flex justify-between mt-4">
            <button type="button" id="cancel-button" className="button bg-gray-500 text-white py-2 px-4 rounded-md">Cancel</button>
            <button type="submit" id="save-next-button" onClick={handleChange} className="button bg-[#8f1eff] text-white py-2 px-4 rounded-md">Save & Next</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default UserCreation
