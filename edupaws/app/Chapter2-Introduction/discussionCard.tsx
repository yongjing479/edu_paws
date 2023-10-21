"use client"
import React, { useState } from 'react'; // Import useState
import { Divider, Input, Button } from 'antd'; // Import Input and Button from Ant Design
import { HeartOutlined, MessageOutlined, BookOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Reply from './reply';

function discussionCard() {
    // Add a state to manage the comment input
  const [commentInput, setCommentInput] = useState('');

  // Function to handle comment submission
  const handleCommentSubmit = () => {
    // Here, you can handle the submission of the comment, e.g., save it to a database.
    // For simplicity, we'll just log the comment to the console.
    console.log('Submitted Comment:', commentInput);
    // Clear the comment input field
    setCommentInput('');
  };
  return (
    <> 
        <div className="flex flex-col text-indigo-950">
                <h3 className='font-semibold text-lg ml-8 mt-6'>Comments </h3>
                <h4 className='text-xs ml-8'>(23 comments)</h4>
                <div className='bg-violet-50 m-3 p-6 border rounded-lg flex flex-col'>
                <div className="ml-3 px-5">
            <Input
              placeholder="Write a comment"
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
            />
          </div>

         
          <div className="ml-3 px-5 mt-3 mb-7">
            <Button type="primary" onClick={handleCommentSubmit} className='bg-violet-700'>Submit Comment</Button>
          </div>
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
                    What is the function of the circulatory system?
                    </p>
                </div>
                

               
          

          <Divider />
                <div className="flex flex-row px-5 justify-between gap-40 ml-3 text-purple-800 text-l">
                    <Link href="/discussion"><p className="flex flex-row gap-3"><HeartOutlined />Like</p></Link>
                    <button className="flex flex-row gap-3"><MessageOutlined />Reply</button>
                </div>
                <Divider/>
                <Reply/>
            </div>           
        </div>
    </>
  )
}

export default discussionCard
