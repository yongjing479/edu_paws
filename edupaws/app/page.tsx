"use client"
import Link from 'next/dist/client/link'
import React,{ useState} from 'react'
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';


const page = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return (
    <div className='p-3 max-w-lg mx-auto'>
        <h1 className='text-3xl text-center font-semibold my-7'>
            Sign Up</h1>
        <form className='flex flex-col gap-4'>
          <h2>Username</h2>
            <input type="text" placeholder='Username'
            id='username' className='bg-slate-100 p-3 rounded-lg'/>
          <h2>Email </h2>
            <input type="text" placeholder='Email'
            id='email' className='bg-slate-100 p-3 rounded-lg'/>
          <h2>Password </h2>
            <input type="text" placeholder='Password'
            id='password' className='bg-slate-100 p-3 rounded-lg'/>
            
        </form>
        <div className='flex flex-col gap-4 '>
          <button style={{ backgroundColor: '#9C4DF4',margin:'30px 0' }} className="text-white p-3 rounded-lg uppercase hover:opacity-95">
  Sign up
</button>
</div>

<Radio.Group onChange={onChange} value={value}>
  <Radio value={1} >Learner</Radio>
  <Radio value={2} >Peer Tutor</Radio>
  <Radio value={3} >Tutor</Radio>
</Radio.Group>

        <div className='flex gap-2 mt-5'></div>
        <p>Have a account?</p>
        <Link href='/sign-in'>
            <span className='text-blue-500'>Sign in</span>
        </Link>
    </div>
  )
}

export default page