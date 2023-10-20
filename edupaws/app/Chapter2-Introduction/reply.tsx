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
                                src="TeacherBen.png"
                            />
                        </div> 
                    

                        <div className='flex flex-col'>       
                            <h3 className='font-semibold text-xl'>Teacher Ben</h3> 
                            <p className='font-2xs text-slate-500 text-sm'>Owner</p>                                
                        </div> 
                    </div>               
                </div>
                
                <div>
                    <p className='ml-3 pt-3'>
                    The circulatory system transports blood, carrying oxygen and nutrients, throughout the body and removes waste products.
                    </p>
                </div>
                <div className="flex flex-row px-5 pt-8  gap-7 ml-1 text-blue-800 text-l">
                    <button className="flex flex-row gap-3"><HeartOutlined /></button>
                    <button className="flex flex-row gap-3"><MessageOutlined /></button>
                </div>
                
    </div>
            
        
  )
}

export default reply;
