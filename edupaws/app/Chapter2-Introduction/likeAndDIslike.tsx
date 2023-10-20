"use client"
import React, { useState } from 'react';
import { Button } from 'antd';

function LikeDislikeButtons() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  const buttonStyle = {
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '4px 20px',
    cursor: 'pointer',
  };

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  const handleDislikeClick = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div className='ml-5'>
        <Button type='primary' style={{ ...buttonStyle }} onClick={handleLikeClick} className='bg-violet-700'>{likes} Like</Button>
        <Button type='primary' style={{ ...buttonStyle }} onClick={handleDislikeClick} className='bg-violet-700 ml-5'>{dislikes} Dislike</Button>
    </div>
  );
}

export default LikeDislikeButtons;
