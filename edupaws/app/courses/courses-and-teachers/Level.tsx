import { Button, Space } from 'antd';

function Level() {
  return (
    <div className="flex justify-center ml-5">
      <Space size={20} >
        <Button type="primary" className="bg-purple-800">Form 1</Button>
        <Button type="primary" className="bg-purple-800">Form 2</Button>
        <Button type="primary" className="bg-purple-800">Form 3</Button>
        <Button type="primary" className="bg-purple-800">Form 4</Button>
        <Button type="primary" className="bg-purple-800">Form 5</Button>
      </Space>
    </div>
  );
}

export default Level;
