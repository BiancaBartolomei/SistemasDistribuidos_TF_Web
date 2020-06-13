import React from 'react';
import login_img from './Images/Sistema.jpg'
import './Login.css';
import "antd/dist/antd.css";
import { Row, Col, Form, Input, Button, Card, Layout } from 'antd';



const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      erro: '',
    }
  }
  render(){
    const loginAuth = (values) => {
      console.log(values);
      if(values.email === '' || values.senha === ''){
          this.setState({erro: "Preencha o campo de email e senha corretamente."})
      } else {
        fetch('http://localhost:3300/login',{
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: values.email,
            senha: values.senha
          })
        })
          .then((response) => response.json())
          .then((responseJson) => {
            if(responseJson.length === 0){
              this.setState({erro: "Usuário e/ou senha incorreta."})
            } else {
              this.setState({erro: ""})
              console.log('aaa')
              this.props.history.push('/main');
    
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }
      
    }

    return (
      <>
      <Layout>
        <Row style={{height: '100vh'}}>
          <Col span={17}>
            <Row><img alt="example" src={login_img} style={{width: '70vw', height: '100vh'}}/></Row>
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
        onFinish={loginAuth}
        // onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="email"
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
          name="senha"
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
          <Button type="primary" htmlType="submit" >
            Submit
          </Button>
        </Form.Item>
      </Form>
      </Col>
      </Row>
        </Col>
        </Row>
        </Layout>
      </>
    );
  }
  
}


