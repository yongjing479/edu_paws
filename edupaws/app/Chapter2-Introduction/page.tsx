"use client"
import React, { useState } from 'react';
import { Button , Modal } from 'antd';
import PlaylistButton from './PlaylistButton';
import LikeDislikeButtons from './likeAndDIslike';
import DiscussionCard from './discussionCard';
import NavBar from "../home/navBar";
import Link from 'next/link';

const Video = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const containerStyle = {
    display: 'flex',
  };

  const videoStyle = {
    flex: 1,
  };

  const titleStyle = {
    padding: '10px',
  };

  const playlistItems = [
    { imageUrl: 'TeacherBen.png', title: '2.1 Type of Teeth and Their Functions' },
    { imageUrl: 'TeacherBen.png', title: '2.2 Structure of Tooth' },
    { imageUrl: 'TeacherBen.png', title: '2.3 Dental Care' },
    { imageUrl: 'TeacherBen.png', title: 'Quiz' },
  ];

  return (
    
    <div className='text-indigo-950'>
      <NavBar/>
      <div style={containerStyle} className="bg-purple-100 border rounded-lg shadow p-4 mt-5 ml-16 mr-16">
        <div style={videoStyle}>
          <video
            src="/The Human Body _ Science for Kids.mp4"
            controls
            className="w-42 h-18"
          ></video>
          <h1 className='text-xl font-semibold mt-4'>2.0 Introduction</h1>
        </div>
        <div className='ml-4'>
          <div style={titleStyle}>
            <h1 className='mb-4'>Chapter 2 - Humans</h1>
            {playlistItems.map((item, index) => (
              <div key={index} style={{ marginTop: '10px' }}>
                <PlaylistButton
                  imageUrl={item.imageUrl}
                  title={item.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center mt-4 ml-16">
        <img className="w-14 h-14 rounded-full border border-purple-100 object-cover" src="TeacherBen.png" alt="Teacher-Ben" />
        <div className="ml-4">
          <div>
            <h2 className='font-semibold'>Teacher Ben</h2>
          </div>
          <div>
            <h4 className='text-sm'>350 students viewed</h4>
          </div>
        </div>

        <div className='flex items-center place-items-center'>
          <Button type="primary" className="bg-violet-700 ml-5">Join</Button>
          <LikeDislikeButtons></LikeDislikeButtons>
          <Button type="primary" className="bg-violet-700 ml-5">Note</Button>
        </div>
      </div>
      <div className='ml-10 mr-10'>
            <DiscussionCard />
      </div>
     <div className="pt-5 flex justify-center mb-5">
      <Button className=" bg-amber-200 flex justify-center" onClick={showModal}>
          Finish
        </Button>
     </div>
      
      <Modal 
      title="" 
      open={isModalOpen} 
      onOk={handleOk} 
      onCancel={handleCancel} 
      style={{width:"15"}} 
      className="text-center"
      footer={[
        <Button key="cancel" onClick={handleCancel} className="mr-5">
          Cancel
        </Button>,
        <Link href="/home"><Button key="feed"  onClick={handleOk} className="bg-violet-950 text-white custom-ok-button hover:bg-white">
          Feed Baddie Now
        </Button></Link>,]}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="w-1/5 aspect-square relative  mt-5">
          <img className="w-full h-full rounded-full object-cover mb-5" src="https://cdn3d.iconscout.com/3d/premium/thumb/chicken-leg-7266604-5972485.png?f=webp" alt="Teacher-Ben" />
      </div>
          <p className='pt-18 text-xl'>You have earned a <span className="font-semibold">drumstick</span><br></br>for Baddie</p>
        </div>
      </Modal>

    </div>
  );
};

export default Video;
