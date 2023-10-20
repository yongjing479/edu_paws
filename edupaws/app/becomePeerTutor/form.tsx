'use client'
import { PlusOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import {
  Button,
  Cascader,
  Form,
  Input,
  InputNumber,
  Slider,
  Upload,
  Switch,
  Modal
} from 'antd';

import { CheckCircleFilled } from '@ant-design/icons';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';



const { TextArea } = Input;

const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const FormDisabledDemo: React.FC = () => {

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


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' , padding:'20px'}}>
    <div style={{ maxWidth: '600px', width: '100%',}}>

      <div className="flex flex-row pt-20 mt-10 pb-10 gap-3 text-center">
        <CheckCircleFilled className="text-emerald-600 text-2xl text-center" />
        <h3 className="font-bold text-xl text-sky-800 text-center">Verification Process</h3>
      </div>

      <div className=" bg-purple-100 p-5">
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
         paddingBottom="10px"
        >
          <Form.Item label="Full Name">
            <Input />
          </Form.Item>

          <Form.Item label="Age">
            <InputNumber />
          </Form.Item>

          <Form.Item label="School">
            <Input />
          </Form.Item>

          <Form.Item label="Level">
            <Cascader
              options={[
                {
                  value: 'Lower secondary',
                  label: 'Lower secondary',
                  children: [
                    {
                      value: 'Form 1',
                      label: 'Form 1',
                    },
                    {
                      value: 'Form 2',
                      label: 'Form 2',
                    },
                    {
                      value: 'Form 3',
                      label: 'Form 3',
                    },
                  ],
                },
                {
                  value: 'Higher secondary',
                  label: 'Higher secondary',
                  children: [
                    {
                      value: 'Form 4',
                      label: 'Form 4',
                    },
                    {
                      value: 'Form 5',
                      label: 'Form 5',
                    },
                  ],
                },
              ]}
            />
          </Form.Item>

          <Form.Item label="Subject" >
            <Cascader
              options={[
                {
                  value: 'English',
                  label: 'English',
                 
                },
                {
                  value: 'Bahasa Malaysia',
                  label: 'Bahasa Malaysia',
                 
                },

              {
                value: 'Mathematics',
                label: 'Mathematics',
              },
              {
                value: 'Science',
                label: 'Science',
              }, {
                value: 'Sejarah',
                label: 'Sejarah',
              },
              {
                value: 'Geography',
                label: 'Geography',
              }, {
                value: 'RBT',
                label: 'RBT',
              }
              ]}
            />
          </Form.Item>

          <Form.Item label="Reason">
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
            <Upload action="/upload.do" listType="picture-card">
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            </Upload>
          </Form.Item>

          <Form.Item label="Tutoring skill">
            <Slider />
          </Form.Item>
          
          <div className="flex flex-row gap-3 pb-10 ">
          <Switch defaultChecked onChange={onChange} />
          <h3 className='font-semibold text-base '>Send me a copy</h3>
          </div>

          <div className="flex flex-row gap-4">   
          <Form.Item>
            <Button className="bg-emerald-500 text-white font-semibold">Save</Button>
          </Form.Item>

          <Form.Item>
            <Button onClick={showModal} className="bg-emerald-500 text-white font-semibold">Submit</Button>
          </Form.Item>
          
          <Modal 
          title="Test Link" 
          open={isModalOpen} 
          onOk={handleOk} 
          onCancel={handleCancel} 
          footer={[
                  <Button key="cancel" onClick={handleCancel}>
                    Try it later
                  </Button>,
                  <Button key="create"  onClick={handleOk} className="bg-violet-950 text-white custom-ok-button hover:bg-white">
                    Take the test now
                  </Button>,
                ]}>
            <p className="font-semibold text-sky-800"><span>Science</span> <br></br> https://docs.google.com/forms/d/1OvBXv5xhc_rISXMTXx1t10ughA0ItamhNxTvp1ozz8Y/prefill</p>
          </Modal>  
          </div> 
        </Form>
      </div>
    </div>
  </div>
  );
};

export default () => <FormDisabledDemo />;