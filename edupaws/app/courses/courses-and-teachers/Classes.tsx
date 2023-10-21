"use client"
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from 'antd';
import Link from 'next/link';
import 'swiper/css';

function Classes() {
  const initialClasses = [
    {
      "id": 1,
      "teacher_name": "Teacher Ben",
      "teacher_image_url": "TeacherBen.png",
      "preferred_language": "English",
      "number_of_views": 350,
      "live": "yes",
      "description": "A passionate and enthusiastic primary science...",
      "joined": false, // Add a "joined" property
    },
    {
      "id": 2,
      "teacher_name": "Teacher Lim",
      "teacher_image_url": "TeacherLim.png",
      "preferred_language": "Chinese",
      "number_of_views": 270,
      "live": "no",
      "description": "An inclusive and culturally aware science teacher...",
      "joined": false,
    },
    {
      "id": 3,
      "teacher_name": "Teacher Siti",
      "teacher_image_url": "source355x388_kz.jpg",
      "preferred_language": "Malay",
      "number_of_views": 355,
      "live": "no",
      "description": "An inclusive and culturally aware science teacher...",
      "joined": false,
    },
    {
      "id": 4,
      "teacher_name": "Teacher Devi",
      "teacher_image_url": "TeacherDevi.jpg",
      "preferred_language": "Tamil",
      "number_of_views": 170,
      "live": "yes",
      "description": "A charismatic and dynamic primary Science teacher...",
      "joined": false,
    },
  ];

  const [classes, setClasses] = useState(initialClasses);

  const handleJoinClick = (classId) => {
    // Find the class with the given ID
    const updatedClasses = classes.map((cls) => {
      if (cls.id === classId) {
        // Toggle the "joined" property
        return {
          ...cls,
          joined: !cls.joined,
        };
      }
      return cls;
    });

    setClasses(updatedClasses);
  };

  return (
    <div className="items-center h-screen">
      <Swiper
        className='flex p-6 gap-4 justify-center align-middle w-4/5 mt-10'
        spaceBetween={10}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {classes.map(i => {
          const classDetailsURL = `/class-details-${i.teacher_name.replace(/\s+/g, '')}`;

          return (
            <SwiperSlide key={i.id} className='bg-white flex flex-col p-5 items-center justify-center rounded-lg shadow-md border border-purple-500 relative'>
              <div className="absolute top-0 right-0 flex justify-center">
                {i.live === "yes" ? (
                  <img src="/live-button-12324.svg.png" alt="Live Button" className="h-5 mt-3 mr-3" />
                ) : null}
              </div>
              <div className="rounded-image flex justify-center">
                <img src={i.teacher_image_url} alt="Teacher-Ben" className='w-20 h-20 rounded-full' />
              </div>
              <h3 className="flex justify-center text-indigo-950 text-lg font-semibold mt-3">{i.teacher_name}</h3>
              <div className="flex justify-center  items-center">
                <img src="/earth-svgrepo-com.svg" alt="Earth" className="w-4 h-4 mt-1" />
                <p className="text-indigo-950 text-sm pl-1 mt-1">{i.preferred_language}</p>
              </div>
              <div className="flex justify-center  items-center">
                <img src="/person-svgrepo-com.svg" alt="Person" className="w-5 h-5 mt-1" />
                <p className="text-indigo-950 text-sm ml-1 mt-1">{i.number_of_views} students viewed</p>
              </div>
              <p className="text-indigo-950 text-sm text-center mt-1">{i.description}</p>
              <div className='flex justify-center flex-row gap-2'>
                <Link href={classDetailsURL}>
                  <Button type="primary" className="bg-violet-700 mt-5">Class details</Button>
                </Link>
                <Button
                  type="primary"
                  className="bg-violet-700 mt-5"
                  onClick={() => handleJoinClick(i.id)}
                >
                  {i.joined ? 'Joined' : 'Join'} {/* Toggle between "Join" and "Joined" */}
                </Button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Classes;
