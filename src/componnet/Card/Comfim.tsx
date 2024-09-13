import React, { useState } from 'react';
import { Form, Input, Button, Alert } from 'antd';

const Comfim = () => {
  const [code, setCode] = useState('');
  const [idCourse, setIdCourse] = useState('');
  const [error, setError] = useState('');

  const handleFinish = (values: { code: string }) => {
    setError('');

    const { code } = values;

    // Kiểm tra hợp lệ
    if (!code || code.length !== 6) {
      setError('Mã xác thực phải có 6 chữ số.');
      return;
    }

    // Xử lý đăng nhập (gọi API hoặc logic đăng nhập ở đây)
    console.log('Đăng nhập với mã:', code);
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Xác Thực Mã</h2>
      {error && <Alert message={error} type="error" showIcon />}
      <Form
        name="comfim"
        onFinish={handleFinish}
        layout="vertical"
        style={{ marginTop: '20px' }}
      ><Form.Item
      label="Mã Khóa Học"
      name="idCouse"
      rules={[{ required: true, message: 'Vui lòng nhập mã khóa học!' }]}
    >
        
             <Input 
            placeholder="Nhập mã Khóa Học" 
            maxLength={6}
            onChange={(e) => setIdCourse(e.target.value)} 
          />
</Form.Item>
          <br />
          <Form.Item
          label="Mã Xác Thực"
          name="code"
          rules={[{ required: true, message: 'Vui lòng nhập mã xác thực!' }]}
        >
          <Input 
            placeholder="Nhập mã xác thực 6 chữ số" 
            maxLength={6}
            onChange={(e) => setCode(e.target.value)} 
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Xác Thực
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Comfim;
