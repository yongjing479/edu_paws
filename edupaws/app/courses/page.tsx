import React from 'react';
import Level from './courses-and-teachers/Level';
import Courses from './courses-and-teachers/Courses';
import Classes from './courses-and-teachers/Classes';
import NavBar from "../home/navBar";

const coursesAndTeachers = () => {
  return (
    <div>
      <NavBar/>
      <div className='mt-6'>
      <Level />
      <Courses/>
      <div style={{ marginTop: '15px' }}></div>
      <span></span>
      <div className="flex justify-center">
      <h1 className='text-xl font-semibold mt-5'>Classes</h1></div>
      <Classes/>
      </div>
        </div>
    )
}

export default coursesAndTeachers