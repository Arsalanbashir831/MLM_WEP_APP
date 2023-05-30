import React from 'react'


const AdminNav = ({name}) => {
  return (
    <>
     <div className="bg-myorange shadow-md rounded px-8 py-6 max-w-full mx-auto text-white flex justify-between">
        <h1>{name}</h1>
            <h2 className='cursor-pointer'>Logout</h2>
     </div>
    </>
  )
}

export default AdminNav