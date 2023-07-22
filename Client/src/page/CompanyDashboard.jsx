import React, { useEffect, useState } from 'react';
import AdminNav from '../components/AdminNav';
import Home from '../components/Home';
import Products from '../components/Products';
import Team from '../components/Team';
import Training from "../components/Training"
import { Button } from '@mui/material';
import { Add, Delete, Edit } from '@mui/icons-material';
import axios from 'axios';

const navigation = [
  { id: '1', name: 'Home' },
  { id: '2', name: 'Product' },
  { id: '3', name: 'Team' },
  { id: '4', name: 'Training' },
];

const CompanyDashboard = () => {
  const [navigate, setNavigator] = useState('1');
  const [companyData , setCompanyData]= useState('')
  
  useEffect(() => {
    // Fetch company data using the company ID from localStorage
    const companyId = localStorage.getItem('id');

    const fetchCompanyData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/company/${companyId}`);
        console.log(response.data);
        setCompanyData(response.data);
     
      } catch (error) {
        console.error('Error fetching company data:', error);
      }
    };

    fetchCompanyData();
  }, []);


  const navigationHandler = (index) => {
    setNavigator(index);
  };
  

  return (
  
    <>
      <AdminNav name={companyData.companyName} />
      <div className="bg-white shadow-md rounded px-8 py-6 max-w-full mx-auto h-full text-black">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10">
          <div className="bg-white text-black shadow-md rounded  text-center md:col-span-1">
            <div className=" flex flex-col gap-3  md:grid grid-rows-5 md:gap-20 my-10">
              {navigation.map((nav) => (
                <div
                  key={nav.id}
                  id={nav.id}
                  className={`cursor-pointer ${navigate === nav.id ? 'text-orange-500 font-bold' : 'text-black'
                    }`}
                  onClick={() => navigationHandler(nav.id)}
                >
                  <h2>{nav.name}</h2>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-5">
            {navigate === '1' && <Home 
            team={companyData.team? companyData.team.length : 0} 
            tutorials={companyData.tutorial? companyData.tutorial.length : 0 } 
            products={companyData.products? companyData.products.length : 0} 
            mostSoldProducts={companyData.products? companyData.products : [] }  />}
            {navigate === '2' && <Products productData={companyData.products} />}
            {navigate === '3' && <Team  teamData={companyData.team} />}
            {navigate === '4' && (
              <>
              <div className='text-right'>
                <button
                  className="bg-blue-300 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2" 
                >
                  <Add></Add>
                </button>
                </div>
                <Training />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyDashboard;
