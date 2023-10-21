import React from 'react'
import {Divider} from 'antd';
import { HeartOutlined, MessageOutlined ,BookOutlined} from '@ant-design/icons';
import Link from 'next/link';
import Reply from './reply';

function discussionCard() {
  return (
    <> 
        <div className="flex flex-col text-indigo-950">
                <h3 className='font-semibold text-lg mb-2 ml-2'>Question 1 </h3>
                <div className='bg-violet-50 m-3 p-6 border rounded-lg flex flex-col'>
                
                <div className='flex flex-row gap-4'>
                    <div className="w-1/7 aspect-square relative">
                        <img
                            className="w-12 h-12 rounded-full border-2 border-purple-200 object-cover"
                            src="https://images.unsplash.com/photo-1697369975788-4c330f46b0da?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2071"
                        />
                    </div> 

                    <div className='flex flex-col'>       
                        <h3 className='font-semibold text-xl'>Jeny</h3> 
                        <p className='font-sm text-slate-500 text-sm'>Learner from Kajang, Selangor</p> 
                                                
                    </div>            
                </div>
              
                <div>
                    <p className='ml-3 pt-3'>
                    For the section b for exam set 1, how to do this question? <br></br>(a) What is confidence according to the passage? (2 marks) <br></br> (b) How is confidence conveyed? (2 marks)
                    </p>
                </div>
                <Divider/>
                <div className="flex flex-row px-5 justify-between gap-40 ml-3 text-purple-800 text-l">
                    <Link href="/discussion"><p className="flex flex-row gap-3"><HeartOutlined />Like</p></Link>
                    <Link href="/discussion"><p className="flex flex-row gap-3"><MessageOutlined />Reply</p></Link>
                    <Link href="/discussion"><p className="flex flex-row gap-3"><BookOutlined />Save</p></Link>                    
                </div>
                <Divider/>
                <Reply/>
            </div>           
        </div>
    </>
  )
}

export default discussionCard
