import React, { useState } from 'react';
import AdminNav from '../components/AdminNav';
import Home from '../components/Home';
import Products from '../components/Products';
import Team from '../components/Team';

const navigation = [
  { id: '1', name: 'Home' },
  { id: '2', name: 'Product' },
  { id: '3', name: 'Team' },
];

const CompanyDashboard = () => {
  const [navigate, setNavigator] = useState('1');

  const navigationHandler = (index) => {
    setNavigator(index);
  };

  return (
    <>
      <AdminNav name="Forever Living" />
      <div className="bg-white shadow-md rounded px-8 py-6 max-w-full mx-auto h-full text-black">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
          <div className="bg-white text-black shadow-md rounded  text-center md:col-span-1">
            <div className=" flex flex-col gap-3  md:grid grid-rows-5 md:gap-20 my-10">
              {navigation.map((nav) => (
                <div
                  key={nav.id}
                  id={nav.id}
                  className={`cursor-pointer ${
                    navigate === nav.id ? 'text-orange-500 font-bold' : 'text-black'
                  }`}
                  onClick={() => navigationHandler(nav.id)}
                >
                  <h2>{nav.name}</h2>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-5">
            {navigate === '1' && <Home />}
            {navigate === '2' && <Products />}
            {navigate === '3' && <Team />}
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyDashboard;
