import React, { useState } from 'react';
import Dialogue from '../widgets/Dialogue';
import { Add, Delete, Edit } from '@mui/icons-material';

const SubscriptionsTable = ({ data }) => {
  const [users, setUsers] = useState([...data]);

  const handleRemoveUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <>
      <div className="font-extrabold my-10 flex justify-between">
        <h1>Subscriptions Details</h1>
        <div className="text-right">
          <Dialogue type="Add" color="#0040ff" icon={<Add></Add>} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className=" min-w-full bg-white border border-gray-300 my-10">
          <thead>
            <tr>
              <th className="px-4 py-2 font-semibold">ID</th>
              <th className="px-4 py-2 font-semibold">Name</th>
              <th className="px-4 py-2 font-semibold">Description</th>
              <th className="px-4 py-2 font-semibold">Price</th>
              <th className="px-4 py-2 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-4 py-2">{user.id}</td>
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.desc}</td>
                <td className="px-4 py-2">{user.price}</td>
                <td className="  gap-2 flex flex-col px-4 py-2  md:flex justify-center md:gap-3 md:flex-row">
                  <button
                    onClick={() => handleRemoveUser(user.id)}
                    className="px-4 py-2 text-white bg-red-300 rounded hover:bg-red-600"
                  >
                    <Delete />
                  </button>
                  <Dialogue type="Edit" color="orange" icon={<Edit></Edit>} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SubscriptionsTable;
