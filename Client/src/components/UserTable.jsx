
import React, { useState } from 'react';


const UserTable = ({data}) => {

  const [users, setUsers] = useState([...data]);

  const handleRemoveUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <>
    <div className='font-extrabold my-10'>
      <h1>Team Meeting Details</h1>
    </div>
    <table className="min-w-full bg-white border border-gray-300 my-10">
      <thead>
        <tr>
          <th className="px-4 py-2 font-semibold">ID</th>
          <th className="px-4 py-2 font-semibold">Name</th>
          <th className="px-4 py-2 font-semibold">Company</th>
          <th className="px-4 py-2 font-semibold">Meeting Date</th>
          <th className="px-4 py-2 font-semibold">Actions</th>
        </tr>
      </thead>
      <tbody className='text-center over'>
        {users.map((user) => (
          <tr key={user.id}>
            <td className="px-4 py-2">{user.id}</td>
            <td className="px-4 py-2">{user.username}</td>
            <td className="px-4 py-2">{user.company}</td>
            <td className="px-4 py-2">{user.meetingDate}</td>
            <td className="px-4 py-2">
              <button
                onClick={() => handleRemoveUser(user.id)}
                className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
};

export default UserTable;
