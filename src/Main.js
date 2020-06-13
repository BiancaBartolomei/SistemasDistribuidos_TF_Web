import React from 'react';
import logo from './logo.svg';
import login_img from './Images/Sistema.jpg'
import ReactDOM from "react-dom";
import './Login.css';
import "antd/dist/antd.css";
import { Row, Col, Form, Input, Button, Card, Layout, Menu } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
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
export default class Main extends React.Component {
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
render(){


  return (
    <>
    <Layout style={{height:'100vh'}}>
        <Sider >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              Requisições Pendentes
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              Lista de Estabelecimentos
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
            <Card/>
          </Content>
        </Layout>
      </Layout>
      </>
  );
}
  
}


