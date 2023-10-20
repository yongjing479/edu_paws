import React from "react";
import { Progress } from "antd";

const App: React.FC = () => (
  <div style={{ width: 280 }}>
    <p> Happiness</p>
    <Progress percent={100} strokeColor="#7ED957"/> 
    <p>Food</p>
    <Progress percent={100} strokeColor="#7ED957"/> 
    <p>Health</p>
    <Progress percent={100} strokeColor="#7ED957" />
  </div>
);

export default App;
