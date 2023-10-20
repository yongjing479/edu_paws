import React from 'react';
import { Progress,Button, Space } from 'antd';
import Link from 'next/link';

function IncompleteCourses() {
  return (
    <div className="flex flex-row p-6 gap-4">
      <div className="flex flex-col p-5 bg-slate-50 items-center justify-center rounded-lg shadow-md">
        <Space wrap>
          <Progress type="dashboard" percent={75} />
        </Space>
        <h3 className="text-indigo-950 text-lg font-semibold mt-3">Science</h3>
        <p className="text-indigo-950 text-base">Chap 3: Microorganisms</p>
        <Link href="/"><Button type="primary" className="bg-violet-900 mt-5">Resume</Button></Link>
      </div>

      <div className="flex flex-col p-5 bg-slate-50 items-center justify-center rounded-lg shadow-md">
        <Space wrap>
          <Progress type="dashboard" percent={50} />
        </Space>
        <h3 className="text-indigo-950 text-lg font-semibold mt-3">Mathematics</h3>
        <p className="text-indigo-950 text-base">Chap 4: Teorem Pythagoras</p>
        <Link href="/"><Button type="primary" className="bg-violet-900 mt-5">Resume</Button></Link>
      </div>
    </div>
  );
}

export default IncompleteCourses;
