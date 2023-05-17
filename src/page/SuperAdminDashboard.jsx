import React from 'react';
import Box from '../widgets/Box';
import AdminNav from '../components/AdminNav';
import UserTable from '../components/UserTable';
import usersData from '../data/TeamData';
import companyData from '../data/CompanyData';
import CompanyTable from '../components/CompanyTable';
import SubscriptionsTable from '../components/SubscriptionsTable';
import Subscriptions from '../data/SubscriptionsData';

const SuperAdminDashboard = () => {
  return (
    <>
      <AdminNav name={'Admin Dashboard'} />
      <div className="bg-white shadow-md rounded px-8 py-6 max-w-full mx-auto h-full text-black">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
          <Box title="Total Users" number={100} />
          <Box title="Schedule Meeting" number={20} />
          <Box title="Subscriptions" number={3} />
        </div>

        <div className="mt-8">
          <UserTable data={usersData} />
        </div>
        <div className="mt-8">
          <CompanyTable data={companyData} />
        </div>
        <div className="mt-8">
          <SubscriptionsTable data={Subscriptions} />
        </div>
      </div>
    </>
  );
};

export default SuperAdminDashboard;
