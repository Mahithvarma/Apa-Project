import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const getRandomLightColor = () => {
  const letters = 'BCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
};

const AdminMain = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.querySelectorAll('.grid-card').forEach(card => {
      card.style.backgroundColor = getRandomLightColor();
    });
  }, []);
  return (
    <div className="flex flex-col items-center p-6 bg-cyan-100 min-h-screen">
      <div className="bg-gray-600 bg-opacity-75 p-6 mb-6 rounded-lg shadow-lg w-full max-w-lg text-center">
        <h2 className="text-white text-2xl font-bold">Apartment Details</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mb-6">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <a id="total-flats" href="/userCreation" className="text-cyan-600 text-lg font-bold pl-4 pr-4">Add User</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <p id="total-flats" className="text-cyan-600 text-lg font-bold">Total Available Flats: 100</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <p id="available-flats" className="text-green-700 text-lg font-bold">Available Flats: 30</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <p id="filled-flats" className="text-red-700 text-lg font-bold">Filled Flats: 70</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {['Block A', 'Block B', 'Block C'].map((block, index) => (
          <div key={index} className="grid-card p-6 rounded-lg shadow-lg text-center transition-transform transform hover:-translate-y-1 hover:shadow-2xl">
            <div className="icon mb-4">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7V22H10V16H14V22H22V7L12 2Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">{block}</h3>
            <p>Total Available: {20 + 10 * index}</p>
            <p>Filled: {10 + 15 * index}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminMain
