import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import SubjectFilter from "../subjectFilter";
import AnimatedNumber from "./animatedNumber";


interface DataType {
  key: React.Key;
  level: string;
  date: string;
  quiz: string;
  timeSpent: string;
  score: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: "Level",
    dataIndex: "level",
  },
  {
    title: "Date",
    dataIndex: "date",
  },
  {
    title: "Quiz",
    dataIndex: "quiz",
  },
  {
    title: "Time Spent",
    dataIndex: "timeSpent",
  },
  {
    title: "Score",
    dataIndex: "score",
  },
];

const data: DataType[] = [
  {
    key: "1",
    level: "Form 1",
    date: "2 July 2023",
    quiz: "Chapter 1 : Introduction to Scientifix Investigation",
    timeSpent: "10 m 2 s",
    score: 100,
  },
  {
    key: "2",
    level: "Form 1",
    date: "13 July 2023",
    quiz: "Chapter 2 : Cell As A Unit of Life",
    timeSpent: "10 m 2 s",
    score: 100,
  },
];

const performanceSummary: React.FC = () => (
  <>
    <SubjectFilter />
    <Table className="p-4 " columns={columns} dataSource={data} size="small" />
    <AnimatedNumber/>
    {/* <div className="p-4 text-teal-800 text-l font-medium mr-auto">
      <h3 className="mb-2">Quiz (min)</h3>
      <h3 className="mb-2">Average Scores (%) </h3>
      <h3>Total Study Hours (hr) </h3>
    </div> */}
  </>
);

export default performanceSummary;
