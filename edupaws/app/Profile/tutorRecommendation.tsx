import React from 'react'
import { Button } from 'antd';
import Link from 'next/link';
import SubjectFilter from './subjectFilter';

function tutorRecommendation() {
  return (
    <div>
      <SubjectFilter/>
      <div className="flex flex-row p-6 gap-4">
        <div className="flex flex-col p-5 bg- items-center justify-center rounded-lg shadow-md">
      
          <h3 className="text-indigo-950 text-lg font-semibold mt-3">Teacher Ben</h3>
          <p className="text-base">Chill & creative <br></br>teaching method</p>
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
