import React, { useState } from 'react';
import AdminNav from '../components/AdminNav';
import ProductCard from '../components/ProductCard';
import Cart from '../components/Cart';

const navigation = [
  { id: '1', name: 'Shop' },
  { id: '2', name: 'Cart' },
];

const UserAdmin = () => {
  const [navigate, setNavigator] = useState('1');

  const navigationHandler = (index) => {
    setNavigator(index);
  };

  return (
    <div>
      <AdminNav name="User 1"></AdminNav>
      <div className="bg-white shadow-md rounded px-8 py-6 max-w-full mx-auto h-full text-black">
        <div className="flex flex-col   md:grid grid-cols-6 gap-10">
          <div className="bg-white text-black shadow-md rounded h-auto md:h-[80vh] text-center md:col-span-1">
            <div className=" flex flex-col gap-3 md:grid grid-rows-5 md:gap-20 my-10">
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
          {navigate === '1' && (
            <div className="col-span-5">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
              </div>
            </div>
          )}
          {navigate === '2' && (
            <div className="col-span-4">
              <Cart></Cart>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserAdmin;
