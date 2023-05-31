import React from 'react';
import login from "../assets/loginMan.png";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import googleIcon from "../assets/google.png";
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div className='grid grid-cols-1 m-10 gap-[100px] md:grid-cols-2 lg:grid-cols-2 lg:m-0'>
        <div>
          <img className='relative top-28' width={"600px"} src={login} alt="" />
        </div>
        <form action="/authentication" method="get">
        <div className='m-auto relative md:top-[100px]  '>
          <div style={{ border: "1px solid black" }} className='border-solid  rounded-xl shadow-lg'>
            <h1 className='text-center my-5 font-bold text-[1.8rem]'>Login Form</h1>
            <form className='text-center my-10' action="">
              <TextField style={{ width: "80%", margin: "10px 0px" }} id="username" label="Username" variant="standard" />
              <TextField style={{ width: "80%", margin: "10px 0px" }} id="password" label="Password" variant="standard" type='password' />
            <div className='flex items-center justify-center my-2'>
            <input className='m-2' type="radio" name="userType" value="Team"/>
              <label htmlFor="">Team</label>
            <input className='m-2' type="radio" name="userType" value="Team"/>
              <label htmlFor="">Company</label>
            </div>
              <Button style={{ width: "80%", margin: "10px 0px" }} variant="contained" color="primary">
               <Link to="/Admin">Login</Link>  
              </Button>
              <div className='text-center'>
                <Button style={{ width: "80%", margin: "10px 0px", background: "white", color: "black" }} variant="contained" color="primary" type="submit">
                  <IconButton>
                    <img src={googleIcon} alt="Google Icon" width={30} height={20} />
                  </IconButton>
                  Google Sign In
                </Button>
              </div>
            </form>
          </div>
        </div>
        </form>
      </div>
    </>
  )
}

export default Login;
