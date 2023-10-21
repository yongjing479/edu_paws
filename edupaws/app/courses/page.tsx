import React from 'react';
import Level from './courses-and-teachers/Level';
import Courses from './courses-and-teachers/Courses';
import Classes from './courses-and-teachers/Classes';

const coursesAndTeachers = () => {
  return (
    <div>
      <Level />
      <Courses/>
      <div style={{ marginTop: '15px' }}></div>
      <span></span>
      <div className="flex justify-center">
      <h1 className='text-xl font-semibold mt-5'>Classes</h1></div>
      <Classes/>
      
        </div>
    )
}

export default coursesAndTeachers