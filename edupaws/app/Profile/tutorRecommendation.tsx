import React from 'react'
import { Button } from 'antd';
import Link from 'next/link';
import SubjectFilter from './subjectFilter';

function tutorRecommendation() {
  return (
    <div>
      <SubjectFilter/>
      <div className="flex flex-row p-6 gap-4">
        <div className="bg-white flex flex-col p-5 bg- items-center justify-center rounded-lg shadow-md border border-purple-500">

          <div className="rounded-image">
           <img src="TeacherBen.png" alt="Teacher-Ben" className='w-20 h-20 rounded-full'/>
          </div>

          <h3 className="text-indigo-950 text-lg font-semibold mt-3">Teacher Ben</h3>
          <p className="text-sm text-center"> 5 years teaching experience<br></br>Chill teaching method</p>
          <div className='flex flex-row gap-2'>
          <Link href="/"><Button type="primary" className="bg-violet-900 mt-5">Class details</Button></Link>
          <Link href="/"><Button type="primary" className="bg-violet-900 mt-5">Join</Button></Link>
          </div>
        </div>

        <div className="bg-white flex flex-col p-5 bg- items-center justify-center rounded-lg shadow-md border border-purple-500">

          <div className="rounded-image">
           <img src="TeacherLim.png" alt="Teacher-Ben" className='w-20 h-20 rounded-full'/>
          </div>

          <h3 className="text-indigo-950 text-lg font-semibold mt-3">Teacher Lim</h3>
          <p className="text-sm text-center"> 7 years teaching experience<br></br>Patient teaching way</p>
          <div className='flex flex-row gap-2'>
          <Link href="/"><Button type="primary" className="bg-violet-900 mt-5">Class details</Button></Link>
          <Link href="/"><Button type="primary" className="bg-violet-900 mt-5">Join</Button></Link>
          </div>
        </div>
    
      </div>
  </div>
  )
}

export default tutorRecommendation;
