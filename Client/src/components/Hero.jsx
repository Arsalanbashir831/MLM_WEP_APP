import React from 'react'
import Navbar from './Navbar'
import Button from '@mui/material/Button';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import heroImg from "../assets/graphImage.png";
import { Link } from 'react-router-dom';


const Hero = () => {
    return (
       <>
       <Navbar></Navbar>
       <div className='grid grid-rows-1' >
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
            {/* column1  */}
            <div className='relative top-11 ' >
            <h1 className='font-medium text-[40px] text-center md:text-left'>A universe of opportunities.
          <br />
            <span className='font-extrabold text-[#f96d00] '>Open to you.</span></h1>
            <p className='my-8 text-[1.2rem]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit accusamus dolore iure totam minus eveniet pariatur, officia inventore explicabo corrupti recusandae natus hic repellat porro architecto non quia ratione eos.</p>
            <div className='flex justify-center gap-4 '>
            <Button style={{backgroundColor:"#f96d00"}} variant="contained" >
                   <Link to='/Admin'>Admin Dashboard</Link> 
                </Button>
            <Button style={{backgroundColor:"#222831"}} variant="contained" endIcon={<PlayCircleIcon/>}>
                  <Link to='/company'>Discover Our Team</Link> 
                </Button>
            </div>
            </div>
            {/* column2  */}
            <div>
            <img className='my-10'  width={"100%"} src={heroImg} alt="heroImg" srcset="" />
            </div>

        </div>
       </div>
       </>
    )
}

export default Hero