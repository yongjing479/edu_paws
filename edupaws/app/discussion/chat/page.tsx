import React from 'react'
import { Divider } from 'antd';
import { SendOutlined , BulbFilled } from '@ant-design/icons';

function chat() {
  return (
    <div className="flex flex-col h-full">
      <div className="h-16 p-3 bg-cyan-600 flex flex-row gap-4 text-lg text-white font-semibold ">
        <div className="w-1/7 aspect-square relative">
          <img
            className="w-12 h-12 rounded-full border-2 border-cyan-400 object-cover"
            src="https://images.unsplash.com/photo-1696527318972-c8ca536c8778?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI0fHRvd0paRnSlateEdnfHxlbnwwfHx8fHw%3D&w=500"
          />
        </div>
        <div className="flex flex-row gap-1">
          <span className="pt-2">Bob</span>
          <BulbFilled className="mt-1 mb-1 text-l text-yellow-400" />
        </div>
      </div>
     
      <div className="bg-slate-100 flex-grow font-bold text-2xl text-gray-600 text-center pt-80">   
        Don't be shy<br></br> to ask questions !
      </div>
      <Divider/>
      <div className="flex flex-row p-3">
        <input
          type="text"
          placeholder="Type a message..."
          className="w-full h-12 rounded px-4 focus:outline-none "
        />
        <SendOutlined
          className="mr-3 pt-1 text-blue-500 cursor-pointer"  
        />
      </div>

    </div>

  )
}

export default chat;
