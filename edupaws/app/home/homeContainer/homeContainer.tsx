import React, { useState } from 'react';
import { Tabs } from 'antd';
import IncompleteCourses from './IncompleteCourses'; 
import CompletedCourses from './CompletedCourses'; 

const defaultPanes = [
  { label: 'Incomplete Courses', children: <IncompleteCourses />, key: '1' },
  { label: 'Completed Courses', children: <CompletedCourses />, key: '2' },
];

const App: React.FC = () => {
  const [activeKey, setActiveKey] = useState(defaultPanes[0].key);
  const [items] = useState(defaultPanes);

  const onChange = (key: string) => {
    setActiveKey(key);
  };

  const onEdit = () => {
    // Handle tab edits if needed.
  };

  return (
    <div className="py-10 px-20">
      <div className="bg-purple-100 border-solid border-purple-950  rounded-lg shadow p-4">
        <Tabs
          hideAdd
          onChange={onChange}
          activeKey={activeKey}
          type="editable-card"
          onEdit={onEdit}
          items={items}
        />
      </div>
    </div>
  );
};

export default App;
