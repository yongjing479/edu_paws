import React from 'react';
import styled from 'styled-components';

const Frame = styled.div`
  width: 1000px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px; /* Rounded corners */
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.2); /* Box shadow */
`;

const Text = styled.p`
  margin: 0;
`;

const Image = styled.img`
  width: 100px;
  height: auto; 
`;

const RoundEdgeRectangleFrame = () => {
  return (
    <Frame>
      <div className="flex">
        <Image src="TeacherBen.png" />
        <div className='ml-3 font-semibold flex' >
        <Text>Upcoming Live Stream Class !!!</Text>
        <div className='ml-12 w-14'>
        <Image src="live-button-12324.svg.png"/> </div>
        </div>
      </div>
    </Frame>
  );
};

export default RoundEdgeRectangleFrame;
