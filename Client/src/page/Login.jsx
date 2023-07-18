import React, { useState } from 'react';
import login from "../assets/loginMan.png";
import TextField from '@mui/material/TextField';
import axios from 'axios'

const Login = () => {
  const [type, setType] = useState('');

   const fetchData = async () => {
      try {
        let username1 = document.getElementById("username").value
        let password1 = document.getElementById("password").value
        console.log(username1, password1)
        const response = await axios.post('http://localhost:3000/auth/'+type,{username:username1,password:password1});
        console.log(response.status)
      } catch (error) {
        console.log(error);
      }
    };
  return (  
    <>
    {console.log(type)}
      <div className='grid grid-cols-1 m-10 gap-[100px] md:grid-cols-2 lg:grid-cols-2 lg:m-0'>
        <div>
          <img className='relative top-28' width={"600px"} src={login} alt="" />
        </div>
            <div className='m-auto relative md:top-[100px]'>
            <div style={{ border: "1px solid black" }} className='border-solid  rounded-xl shadow-lg text-center'>
              <h1 className='text-center my-5 font-bold text-[1.8rem]'>Login Form</h1>
              <TextField style={{ width: "80%", margin: "10px 0px" }}  name="username" id="username" label="Username" variant="standard" />
              <TextField style={{ width: "80%", margin: "10px 0px" }}  name="username" id="password" label="Password" variant="standard" type='password' />
              <div className='flex items-center justify-center my-2'>
                <input onChange={() => setType('team')} className='m-2' type="radio"  name ='userType'  value='team'/>
                <label htmlFor="">Team</label>
                <input onChange={() => setType('company')} className='m-2' type="radio" name = 'userType' value='company' />
                <label htmlFor="">Company</label>
              </div>
              <button onClick={fetchData} style={{ width: "80%", margin: "10px 0px" }} >
                Login
              </button>
              <div className='text-center'>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default Login;
