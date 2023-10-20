"user client"
import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import{Button,Space}from'antd';
import Link from 'next/link';


const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'Chapter 1 - Scientific Skills',
    children: (
        
          <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Button type='text' style= {{textAlign: 'left', marginTop: '10px'}}>1.0 Science Process Skills</Button>
          <Button type='text' style= {{textAlign: 'left', marginTop: '10px'}}>1.1 Manipulative Skills</Button>
          <Button type='text' style= {{textAlign: 'left', marginTop: '10px'}}>1.2 Leisure Science</Button>
          <Button type='text' style= {{textAlign: 'left', marginTop: '10px'}}>Quiz</Button>

        
        </div>)
  },
  {
    key: '2',
    label: 'Chapter 2 - Humans',
    children:(
        <div style={{ display: 'flex', flexDirection: 'column' }}>
<div>
      <Link href="/Chapter2-Introduction">
        <Button type="text" style={{ textAlign: 'left', marginTop: '10px' }}>
          2.0 Introduction
        </Button>
      </Link>
    </div>            
            <Button type='text' style= {{textAlign: 'left', marginTop: '10px'}}>2.1 Type of Teeth and Their Functions</Button>
            <Button type='text' style= {{textAlign: 'left', marginTop: '10px'}}>2.2 Structure of Tooth</Button>
            <Button type='text' style= {{textAlign: 'left', marginTop: '10px'}}>2.3 Dental Care</Button>
            <Button type='text' style= {{textAlign: 'left', marginTop: '10px'}}>Quiz</Button>

        </div>
    )
  },
  {
    key: '3',
    label: 'Chapter 3 - Microorganisms',
    children: (
        <div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Button type='text' style= {{textAlign: 'left', marginTop: '10px'}}>3.0 Introduction</Button>
          <Button type='text' style= {{textAlign: 'left', marginTop: '10px'}}>3.1 Microorganisms</Button>
          <Button type='text' style= {{textAlign: 'left', marginTop: '10px'}}>3.2 Life Processes of Microorganisms</Button>
          <Button type='text' style= {{textAlign: 'left', marginTop: '10px'}}>3.3 Factors Affecting The Growth of Microorganisms</Button>
          <Button type='text' style= {{textAlign: 'left', marginTop: '10px'}}>3.4 Uses of Microorganisms</Button>
          <Button type='text' style= {{textAlign: 'left', marginTop: '10px'}}>Quiz</Button>

        </div>
        </div>
      ),
  },
  {
    key: '4',
    label: 'Chapter 4 - Animals',
    children: (<div style={{ display: 'flex', flexDirection: 'column' }}>
    <Button type='text' style= {{textAlign: 'left', marginTop: '10px'}}>4.0 Introduction</Button>
    <Button type='text' style= {{textAlign: 'left', marginTop: '10px'}}>4.1 Classification of Animals</Button>
    <Button type='text' style= {{textAlign: 'left', marginTop: '10px'}}>4.2 Animals' Eating Habits</Button>
    <Button type='text' style= {{textAlign: 'left', marginTop: '10px'}}>4.3 Dentition of Animals</Button>
    <Button type='text' style= {{textAlign: 'left', marginTop: '10px'}}>Quiz</Button>

</div>
    )
  },
  {
    key: '5',
    label: 'Chapter 5 - Plants',
    children:(
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Button type='text' style= {{textAlign: 'left', marginTop: '10px'}}>5.0 Introduction</Button>
            <Button type='text' style= {{textAlign: 'left', marginTop: '10px'}}>5.1 Ways of Reproduction in Plants</Button>
            <Button type='text' style= {{textAlign: 'left', marginTop: '10px'}}>5.2 Importamce of Plant Reproduction</Button>
            <Button type='text' style= {{textAlign: 'left', marginTop: '10px'}}>5.3 Technology in PLant Reproduction</Button>
            <Button type='text' style= {{textAlign: 'left', marginTop: '10px'}}>Quiz</Button>

        </div>
    )
  },
  {
    key: '6',
    label: 'Chapter 6 - Measurement',
    children:(
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Button type='text' style= {{textAlign: 'left', marginTop: '10px'}}>6.0 Introduction</Button>
            <Button type='text' style= {{textAlign: 'left', marginTop: '10px'}}>6.1 Area</Button>
            <Button type='text' style= {{textAlign: 'left', marginTop: '10px'}}>6.2 Volume</Button>
            <Button type='text' style= {{textAlign: 'left', marginTop: '10px'}}>Quiz</Button>
        </div>
    )
  },
];

const App: React.FC = () => <Collapse defaultActiveKey={['1']} ghost items={items} />;

export default App;