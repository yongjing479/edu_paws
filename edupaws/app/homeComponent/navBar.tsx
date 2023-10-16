'use client'
import React, { useState } from 'react';
import { StarOutlined, BarsOutlined, TeamOutlined, SettingOutlined, LogoutOutlined, UserOutlined, BellOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import Link from 'next/link';

const items = [
  {
    label: 'Courses',
    key: 'courses',
    icon: <BarsOutlined style={{ fontSize: '18px' }} />,
  },
  {
    label: 'Subscription',
    key: 'subscription',
    icon: <StarOutlined style={{ fontSize: '18px' }}/>,
  },
  {
    label: 'Paws',
    key: 'paws',
    icon: <SettingOutlined style={{ fontSize: '18px' }}/>,
  },
  {
    label: 'Discussion',
    key: 'discussion',
    icon: <TeamOutlined style={{ fontSize: '18px' }}/>,
  },
];

const App: React.FC = () => {
  const [current, setCurrent] = useState('mail');

  const onClick = (e: { key: React.Key }) => {
    console.log('click ', e);
    setCurrent(e.key.toString());
  };

  return (
    
    <div className='flex flex-row bg-white border'>
      <img src="logoIcon.png" alt="logo" className="w-8 h-8 ml-5 mt-5" />
      <Link href="/">
      <div className="px-2 pt-5 text-2xl text-indigo-900 font-bold ">EduPaws</div>
      </Link>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        className=" text-indigo-900 p-4 text-base font-medium ml-3 mt-3"
      >
        {items.map((item) => (
          <Menu.Item
            key={item.key}
            icon={item.icon}
          >
            <Link href={`/${item.key}`}>{item.label}</Link>
            {/* {item.label} */}
          </Menu.Item>
        ))}
      </Menu>

      <div className="ml-auto flex items-center ">
        <Link href="/" className="text-xl mr-8 hover:scale-110 transition-transform">
          <BellOutlined className="hover:after:bg-purple-500 hover:after:opacity-40 hover:after:scale-110" />
        </Link>

        <Link href="/Profile" className="text-xl mr-8 hover:scale-110 transition-transform">
          <UserOutlined className="hover:after:bg-purple-500 hover:after:opacity-40 hover:after:scale-110" />
        </Link>

        <Link href="/" className="text-xl pr-10 hover:scale-110 transition-transform">
          <LogoutOutlined className="hover:after:bg-purple-500 hover:after:opacity-40 hover:after:scale-110" />
        </Link>
      </div>
    </div>        
      
  );
};

export default App;
