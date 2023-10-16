import React from 'react';
import { Select } from 'antd';

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const subjectFilter: React.FC = () => (
  
    <Select
      defaultValue="Subject"
      className='pl-7 w-full'
      style={{ width: 150 }}
      onChange={handleChange}
      options={[
        { value: 'Science', label: 'Science' },
        { value: 'Mathematics', label: 'Mathematics' },
        { value: 'English', label: 'English', disabled: true },
        { value: 'Bahasa Malaysia', label: 'Bahasa Malaysia', disabled: true },
        { value: 'History', label: 'History', disabled: true },
        { value: 'Mandarin', label: 'Mandarin', disabled: true },
      ]}
    />
    
  
);

export default subjectFilter;