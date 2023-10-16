"use client";

import React from "react";
import { Button } from "antd";
import Link from "next/link";
import { CheckCircleTwoTone } from "@ant-design/icons";
import { Space, Divider } from "antd";

function subscriptionBox() {
  return (
    <div className="subscriptionBox flex flex-row p-6 gap-4">
      <div className="content p-5 bg-fuchsia-50 rounded-lg shadow-md text-center">
        <h1 className="font-bold text-violet-900 text-2xl mb-3 pt-11">Basic Pack</h1>
        <Divider />

       <div className="space-y-2 mt-4 text-left text-gray-700 ">
          <div className="flex items-center ">
          <Space>
            <CheckCircleTwoTone twoToneColor="#52c41a" />
          </Space>
          <p className="inline-block pl-3">Limited access to all subjects</p>
        </div>

        <div className="flex items-center">
          <Space>
            <CheckCircleTwoTone twoToneColor="#52c41a" />
          </Space>
          <p className="inline-block pl-3">Quiz</p>
        </div>

        <div className="flex items-center">
          <Space>
            <CheckCircleTwoTone twoToneColor="#52c41a" />
          </Space>
          <p className="inline-block pl-3">Limited AI performance summary</p>
        </div>

        <div className="flex items-center">
          <Space>
            <CheckCircleTwoTone twoToneColor="#52c41a" />
          </Space>
          <p className="inline-block pl-3">AI tutor recommendation</p>
        </div>

        <div className="flex items-center">
          <Space>
            <CheckCircleTwoTone twoToneColor="#52c41a" />
          </Space>
          <p className="inline-block pl-3">Peer assisted learning system</p>
        </div>
 
        <div className="flex items-center pt-20 mt-20 ">
            <h4 className="font-bold text-violet-900 text-2xl letter-spacing-3 pt-6">RM 0</h4>
          </div>
        </div>

          <Button type="primary" className="bg-purple-800 font-medium text-l block w-32 mx-auto mt-5">
            It's Free
          </Button>
       
      </div>

{/* second box */}
      <div className="content p-5 bg-fuchsia-50 rounded-lg shadow-md text-center">
          
          <img src="premium.png" className="w-10 h-11 ml-8 pb-2 absolute" />
          <h1 className="font-bold text-violet-900 text-2xl mb-3">Monthly </h1>
          <h1 className="font-bold text-violet-900 text-2xl mb-3">Premium Pack</h1>
          
          <Divider />

       <div className="space-y-2 mt-4 text-left text-gray-700">
          <div className="flex items-center">
            <Space>
              <CheckCircleTwoTone twoToneColor="#52c41a" />
            </Space>
            <p className="inline-block pl-3">Full acess to all subjects</p>
          </div>

        <div className="flex items-center">
          <Space>
            <CheckCircleTwoTone twoToneColor="#52c41a" />
          </Space>
          <p className="inline-block pl-3">Quiz</p>
        </div>

        <div className="flex items-center">
          <Space>
            <CheckCircleTwoTone twoToneColor="#52c41a" />
          </Space>
          <p className="inline-block pl-3">AI performance summary</p>
        </div>

        <div className="flex items-center">
          <Space>
            <CheckCircleTwoTone twoToneColor="#52c41a" />
          </Space>
          <p className="inline-block pl-3">AI tutor recommendation</p>
        </div>

        <div className="flex items-center">
          <Space>
            <CheckCircleTwoTone twoToneColor="#52c41a" />
          </Space>
          <p className="inline-block pl-3">Peer assisted learning system</p>
        </div>

        <div className="flex items-center">
          <Space>
            <CheckCircleTwoTone twoToneColor="#52c41a" />
          </Space>
          <p className="inline-block pl-3">Live tutoring session</p>
        </div>

        <div className="flex items-center">
          <Space>
            <CheckCircleTwoTone twoToneColor="#52c41a" />
          </Space>
          <p className="inline-block pl-3">Ads-free experience</p>
        </div>

        <div className="flex items-center pt-10 ">
            <h4 className="font-bold text-violet-900 text-2xl letter-spacing-3">RM 25.00</h4>
          </div>
        </div>

        <Link href="/">
          <Button type="primary" className="bg-violet-900 font-medium  block w-32 mx-auto mt-5">
            Subscribe
          </Button>
        </Link>
      </div>

{/* third box */}
      <div className="content p-5 bg-fuchsia-50 rounded-lg shadow-md text-center">
        <img src="premium.png" className="w-10 h-11 ml-8 pb-2 absolute" />
        <h1 className="font-bold text-violet-900 text-2xl mb-3">Anually </h1>
        <h1 className="font-bold text-violet-900 text-2xl mb-3">Premium Pack</h1>
        <Divider />

       <div className="space-y-2 mt-4 text-left text-gray-700">
          <div className="flex items-center">
          <Space>
            <CheckCircleTwoTone twoToneColor="#52c41a" />
          </Space>
          <p className="inline-block pl-3">Full acess to all subjects</p>
        </div>

        <div className="flex items-center">
          <Space>
            <CheckCircleTwoTone twoToneColor="#52c41a" />
          </Space>
          <p className="inline-block pl-3">Quiz</p>
        </div>

        <div className="flex items-center">
          <Space>
            <CheckCircleTwoTone twoToneColor="#52c41a" />
          </Space>
          <p className="inline-block pl-3">AI performance summary</p>
        </div>

        <div className="flex items-center">
          <Space>
            <CheckCircleTwoTone twoToneColor="#52c41a" />
          </Space>
          <p className="inline-block pl-3">AI tutor recommendation</p>
        </div>

        <div className="flex items-center">
          <Space>
            <CheckCircleTwoTone twoToneColor="#52c41a" />
          </Space>
          <p className="inline-block pl-3">Peer assisted learning system</p>
        </div>

        <div className="flex items-center">
          <Space>
            <CheckCircleTwoTone twoToneColor="#52c41a" />
          </Space>
          <p className="inline-block pl-3">Live tutoring session</p>
        </div>

        <div className="flex items-center">
          <Space>
            <CheckCircleTwoTone twoToneColor="#52c41a" />
          </Space>
          <p className="inline-block pl-3">Ads-free experience</p>
        </div>

        <div className="flex items-center pt-10 ">
            <h4 className="font-bold text-violet-900 text-2xl letter-spacing-3">RM 250.00</h4>
          </div>
        </div>

        <Link href="/">
          <Button type="primary" className="font-medium bg-violet-900 block w-32 mx-auto mt-5">
            Subscribe
          </Button>
        </Link>
      </div>
      
    </div>
  );
}

export default subscriptionBox;
