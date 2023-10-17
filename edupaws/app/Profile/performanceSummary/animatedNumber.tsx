import React from 'react';
import CountUp from 'react-countup';
import { Col, Row, Statistic } from 'antd';

const formatter = (value:number) => <CountUp end={value} separator="," />;

const App: React.FC = () => (
    <div className='p-2 text-center'>
        <Row gutter={8}>
            <Col span={8}>
            <Statistic
                title={
                <span className="font-medium text-xl text-gray-800">Quiz (min)</span>
                }
                value={10}
                formatter={formatter}
            />
            </Col>
            <Col span={8}>
            <Statistic
                title={
                <span className="font-medium text-xl text-gray-800">Average Scores (%)</span>
                }
                value={100}
                precision={2}
                formatter={formatter}
            />
            </Col>
            <Col span={8}>
            <Statistic
                title={
                <span className="font-medium text-xl text-gray-800">Total Study Hour (hr)</span>
                }
                value={20}
                precision={2}
                formatter={formatter}
            />
            </Col>
        </Row>
  </div>
);

export default App;
