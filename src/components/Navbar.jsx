import React from 'react';
import logo from "../assets/logo.png";
import MenuIcon from '@mui/icons-material/Menu';
// import Button from '../widgets/Button';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Button from '@mui/material/Button';
import { BrowserRouter, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
   
      <nav className='navbar p-2 '>
        <ul className=' flex '>
          <li className='flex-1 sm:w-64'>
            <img width={'100px'} src={logo} alt="" />
          </li>
          <div className=' flex items-center gap-2  text-center'>
            <li className='hidden sm:flex flex-1 w-[5.5rem] '>
              {/* <Button name = "Sign In" color="myorange"text="white" ></Button> */}

              <Button style={{backgroundColor:"#f96d00"}} variant="contained">
                 <Link to='/login'>  Sign In </Link>  
                </Button>
            </li>
            <li className='hidden sm:flex  flex-1 w-30'>
            <Button style={{backgroundColor:"#222831" , color:"white"}} variant="contained" endIcon={<ExitToAppIcon/>}> 
            <Link to='/register'>  Register </Link> 
                   
                </Button>
            {/* <Button  name = "Register" color="cement" text="white" ></Button> */}
            </li>
            <li className='flex-1 w-auto sm:hidden'>
             <MenuIcon></MenuIcon>
            </li>
          </div>
        </ul>
      </nav>
      
    </>
  );
}

export default Navbar;
