"use client"
import React from 'react'
import Chapters from './chapter'
import { Button, Divider, Space } from 'antd'
import { } from 'styled-jsx/css'
import Live from './live'
import NavBar from "../home/navBar";

const page = () => {
  const frameContainerStyle= {
    width: '450px',
    textAlign: 'left' as const,
    margin: '0 auto',
  };

  const containerStyle = {
    display: 'flex',
  };
  return (
    //picture
    <div>
      <NavBar/>
      <div style={containerStyle} className='bg-purple-100 flex gap-10 justify-center text-indigo-950'>
      <div className="w-1/5 aspect-square relative  mt-5">
        <img className="w-full h-full rounded-full border border-purple-100 object-cover mb-5" src="TeacherBen.png" alt="Teacher-Ben" />
      </div>
      <div>
      <div className='flex flex-col  mt-6'>
        <h1 className='text-4xl font-bold mt-4 '>Teacher Ben</h1>
      </div>
      

      <p className='flex text-xs mt-3'>From Kuala Lumpur</p>

      <div className="flex mt-1">
        <img src="/work-case-svgrepo-com.svg" alt="Earth" className="w-4 h-4" />
        <p className="text-indigo-950 text-xs pl-1 ">Tutors at NEWPAGES</p>
      </div>
      <div className='flex mt-1'>
        <img src="/earth-svgrepo-com.svg" className='w-4 h-4'></img>
        <p className='text-xs pl-1'>English |</p>
        <img src='/person-svgrepo-com.svg' className='w-4 h-4 ml-1'></img>
        <p className='text-xs pl-1 '>350 students viewed </p>
      </div>
      <div className='flex mt-3'>
        <Button type="primary" style={{ width: '100px' }} className="bg-violet-700 mt-3 ">Join</Button>
      </div>
      
      
      <div style={frameContainerStyle}>

        <p className="paragraph-text text-sm mt-4">
          Teacher John is a tech-savvy primary science teacher. He integrates technology into his lessons, using simulations and interactive apps to teach scientific principles. His modern teaching methods resonate with digitally literate students.
        </p>
        </div></div>
      </div>
      <div className='flex justify-center mt-7'>
      <Live/>
    </div>
      
      <Divider></Divider>
      <h2 className='flex justify-center font-semibold mt-5'>Form 1 | Science | Chapters</h2>
      <div className='flex justify-center mb-5'>
        <Chapters></Chapters></div>
    </div>
  )
}

export default page