"use client"
import { Button, Space } from 'antd';

function level() {
    return (
    <div className='flex justify-center' style={{ marginTop: '15px' }}>
      <Space size={20}>
        <span></span>
        <Button type="primary" className='bg-purple-800'>Malay</Button>
        <Button type="primary" className='bg-purple-800'>English</Button>
        <Button type="primary" className='bg-purple-800'>Chinese</Button>
        <Button type="primary" className='bg-purple-800'>Tamil</Button>
        <Button type="primary" className='bg-purple-800'>Mathematics</Button>
        <Button type="primary" className='bg-purple-800'>Science</Button>
        <Button type="primary" className='bg-purple-800'>More Subjects</Button>
      </Space>
      </div>
    );
  }
  
  export default level;
  