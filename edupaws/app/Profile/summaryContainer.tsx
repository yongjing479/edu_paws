
import React, { useState } from 'react'
import { Tabs } from 'antd';
import PerformanceSummary from './performanceSummary';
import TutorRecommendation from './tutorRecommendation';


const defaultPanes = [
  { label: 'Performance Summary', children: <PerformanceSummary />, key: '1' },
  { label: 'AI Tutor Recommendtion', children: <TutorRecommendation />, key: '2' },
  
];

function summaryContainer() {
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
  )
}

export default summaryContainer;