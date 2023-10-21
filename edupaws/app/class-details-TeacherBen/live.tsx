import { Button } from 'antd';
import React from 'react';
import styled from 'styled-components';

const Frame = styled.div`
  width: 1000px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px; /* Rounded corners */
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.2); /* Box shadow */
`;

const RedText = styled.p`
  margin: 0;
  color: red; /* Set the text color to red */
`;

const Image = styled.img`
  width: 200px;
  height: auto;
`;

const SmallImage = styled(Image)`
  width: 20px; /* Set the width you want for the warning icon */
  height: auto; /* Maintain aspect ratio */
`;

const RedH1 = styled.h1`
  color: red; /* Set the text color to red */
`;

const RoundEdgeRectangleFrame = () => {
  return (
    <Frame>
      <div className="flex text-indigo-950">
        <Image src="TeacherBen.png" />
        <div>
          <div className='ml-3 mt-2 font-semibold flex'>
            <h1 className='text-xl'>Upcoming Live Stream Class !!!</h1>
            <div className='ml-12 w-14'>
              <Image src="live-button-12324.svg.png" />
            </div>
          </div>
          <div className='flex ml-3 mt-1'>
            <SmallImage src="warning-circle-svgrepo-com (1).svg" className='w-2 h-2' />
            <RedH1 className='ml-1 text-sm'>Only for Premium</RedH1>
          </div>
          <div className='ml-4 mt-2 font-semibold text-sm'>
            <h1>School Level: Form 1</h1>
            <h1>Date: 27/4/2025 (Saturday)</h1>
            <h1>Time: 12pm-2pm</h1>
            <h1>Chapter: Chapter 2- Humans</h1>
          </div>
          <div className='mt-4 ml-7 '>
            <Button type='primary' className='bg-violet-700'>Book Now</Button>
            <Button type='primary' style={{ backgroundColor: 'lightgrey', color: 'black',marginLeft:'40px' }}>Join Now</Button>
          </div>
        </div>
      </div>
    </Frame>
  );
};

export default RoundEdgeRectangleFrame;
