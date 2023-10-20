import React from "react";
import { Progress } from "antd";

const App: React.FC = () => (
  <div style={{ width: 280 }}>
    <Progress percent={30} />
    <Progress percent={50} status="active" />
    <Progress percent={70} status="exception" />
    <Progress percent={100} />
  </div>
);

export default App;
