import React from 'react'
import {Divider} from 'antd';
import Link from 'next/link';
import { HeartOutlined, MessageOutlined ,BookOutlined} from '@ant-design/icons';

function reply() {
  return (
   
    <div className="flex flex-col p-4 mx-4 border rounded-lg bg-sky-100">
                         
                <div className='flex flex-col'>              
                    <div className='flex flex-row gap-4'>
                        <div className="w-1/7 aspect-square relative">
                            <img
                                className="w-12 h-12 rounded-full border-2 border-purple-200 object-cover"
                                src="https://images.unsplash.com/photo-1696527318972-c8ca536c8778?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D&w=500"
                            />
                        </div> 
                    

                        <div className='flex flex-col'>       
                            <h3 className='font-semibold text-xl'>Bob</h3> 
                            <p className='font-2xs text-slate-500 text-sm'>Peer Tutor from Penang</p>                                
                        </div> 
                    </div>               
                </div>
                
                <div>
                    <p className='ml-3 pt-3'>
                    (a) You can refer to paragraph 3. It describes the meaning of confidence in real life.<br></br>(b) You can refer to paragraph 4.
                    </p>
                </div>
                <div className="flex flex-row px-5 pt-8  gap-7 ml-1 text-blue-800 text-l">
                    <Link href="/discussion"><p className="flex flex-row gap-3"><HeartOutlined /></p></Link>
                    <Link href="/discussion"><p className="flex flex-row gap-3"><MessageOutlined /></p></Link>
                    <Link href="/discussion"><p className="flex flex-row gap-3"><BookOutlined /></p></Link>                    
                </div>
                
    </div>
            
        
  )
}

export default reply;
