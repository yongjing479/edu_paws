import React, { useState } from 'react';
import { CaretRightOutlined , PlusOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {  Layout, Menu, theme , Avatar, Modal ,  Input, Button} from 'antd';
import DiscussionCard from '../DiscussionCard/discussionCard';

const {  Content, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('English', '1', <CaretRightOutlined />),
  getItem('Bahasa Malaysia', '2',<CaretRightOutlined /> ),
  getItem('Mathematics', '3', <CaretRightOutlined />),
  getItem('Science', '4', <CaretRightOutlined />),
  getItem('Mandarin', '5', <CaretRightOutlined />),
  getItem('Sejarah', '6',<CaretRightOutlined /> ),
  
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

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

  const { TextArea } = Input;
  

  return (
    
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value:boolean) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
   
        <Content style={{ margin: '0 16px' }}>
        <h1 className="text-indigo-900 text-3xl font-bold p-9 flex items-center justify-center">English</h1>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
            <DiscussionCard/>
          </div>
        </Content>

        
          <div className="pb-8 pt-7  mb-10 ml-auto pr-20">
             
              <Avatar
                onClick={showModal}
                size={64} 
                icon={<PlusOutlined />} 
                style={{ backgroundColor: '#8D6CC8' }} 
              />
           
            <Modal
                title="Create Discussion"
                visible={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                  <Button key="cancel" onClick={handleCancel}>
                    Cancel
                  </Button>,
                  <Button key="create"  onClick={handleOk} className="bg-violet-950 text-white custom-ok-button hover:bg-white">
                    Create
                  </Button>,
                ]}
              >
                <h3>Question</h3>
                <TextArea rows={4} placeholder="Type your question here" />
            </Modal>

          </div>
                
      </Layout>
    </Layout>
   
  );
};

export default App;
