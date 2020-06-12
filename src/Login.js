import React from 'react';
import logo from './logo.svg';
import login_img from './Images/Sistema.jpg'
import ReactDOM from "react-dom";
import './Login.css';
import "antd/dist/antd.css";
import { Row, Col, Form, Input, Button, Card } from 'antd';
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
export default class Login extends React.Component {
  constructor() {
    super();

    // Initialize the state
    this.state = {
      todos: []
    };
  }
render(){
  return (
    <>
      <Row>
      <Col span={16}>
      <Row>
      <Card
      style={{ width: "100%", height: "100%"}}
      cover={<img alt="example" src={login_img} />}
  >
  
  </Card>
  </Row>
      </Col>
      
      <Col >
      <Row style={{paddingTop: "80%", paddingLeft: "15%"}}>
        <Col>
        <h5>Painel do Administrador</h5>
      <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      // onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

  

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </Col>
    </Row>
      </Col>
      </Row>
    </>
  );
}
  
}


