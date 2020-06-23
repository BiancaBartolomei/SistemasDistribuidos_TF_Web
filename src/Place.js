import React from 'react';
import logo from './logo.svg';
import login_img from './Images/Sistema.jpg';
import ReactDOM from "react-dom";
import './style.css';
import "antd/dist/antd.css";
import { Row, Col, Form, Input, Button, Card, Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    UnorderedListOutlined,
    LogoutOutlined,
    UploadOutlined,
  } from '@ant-design/icons';


const { Header, Sider, Content } = Layout;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};


export default class Place extends React.Component {
  constructor() {
    super();
    this.state = {
        collapsed: false,
    }
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  saveChanges(){

  }

  render(){


    return (
      <>
      <Layout style={{height:'100vh'}}>
          <Sider >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1" icon={<UserOutlined />} onClick={() => {this.props.history.push({pathname:'/Main'})}}>
                Requisições Pendentes
              </Menu.Item>
              <Menu.Item key="2" icon={<UnorderedListOutlined />} onClick={() => {this.props.history.push({pathname:'/All'})}}>
                Lista de Estabelecimentos
              </Menu.Item>
              <Menu.Item key="3" icon={<LogoutOutlined />} onClick={() => {this.props.history.push({pathname:'/'})}}>
                Sair da conta
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Content
              className="site-layout-background"
              style={{

                padding: 24,
              }}
            >
              <Card>
                <Form
                  {...layout}
                  name="basic"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={this.saveChanges}
                  // onFinishFailed={onFinishFailed}
                >
                  <Form.Item
                    label="Nome"
                    name="nome"
                    rules={[
                      {
                        required: true,
                        message: 'Coloque o nome do estabelecimento',
                      },
                    ]}
                  >
                    <Input style={{ width: '60%' }} />
                  </Form.Item>

                  <Form.Item
                    label="CNPJ"
                    name="cnpj"
                    rules={[
                      {
                        required: true,
                        message: 'Coloque o CNPJ',
                      },
                    ]}
                  >
                    <Input style={{ width: '60%' }} />
                  </Form.Item>
                  

                  <Form.Item
                    label="Área"
                    name="area"
                    rules={[
                      {
                        required: true,
                        message: 'Coloque a área',
                      },
                    ]}
                  >
                    <Input style={{ width: '60%' }} />
                  </Form.Item>

                  <Form.Item
                    label="Capacidade"
                    name="capacidade"
                    rules={[
                      {
                        required: true,
                        message: 'Coloque a capacidade',
                      },
                    ]}
                  >
                    <Input style={{ width: '60%' }} />
                  </Form.Item>

                  <Form.Item
                    label="Localização"
                    name="localização"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input.Group compact>
                      <Input style={{ width: '30%' }} defaultValue="0571" />
                      <Input style={{ width: '30%' }} defaultValue="26888888" />
                    </Input.Group>

                  </Form.Item>

                  <Form.Item
                    label="Enviado por"
                    name="enviado"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <Input style={{ width: '60%' }} disabled={true}/>
                  </Form.Item>
              

                  <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" >
                      Salvar
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Content>
          </Layout>
        </Layout>
        </>
    );
  }
  
}


