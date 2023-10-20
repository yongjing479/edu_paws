// components/ButtonWithCover.js
"use client"
import React from 'react';
import styled from 'styled-components'; // Import 'styled' from Styled Components

const ButtonContainer = styled.div`
    display: flex;
    align-items: center; /* Align items vertically in a row */
    background-color: #f0f0f0;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  `;

const CoverImage = styled.img`
    max-width: 40px;
    max-height: 40px;
    height: auto;
  `;

const Title = styled.p`
    margin: 0 10px; /* Add margin between the image and the title */
  `;

function PlaylistButton({ imageUrl, title }: { imageUrl: any, title: any }) {
  const navigateToVideoPage = (e: any) => {
    e.preventDefault();
    console.log("hello3");
  }

  return (
    <ButtonContainer onClick={navigateToVideoPage} className='bg-violet-500 hover:bg-violet-700 cursor-pointer'>
      <CoverImage src={imageUrl} alt="Cover" />
      <Title>{title}</Title>
    </ButtonContainer>
  );
}

export default PlaylistButton;
