import React from 'react';
import logo from './logo.svg';
import login_img from './Images/Sistema.jpg'
import ReactDOM from "react-dom";
import './style.css';
import "antd/dist/antd.css";
import { Row, Col, Form, Input, Button, Card, Layout, Menu, Table, Tag, Space } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    UnorderedListOutlined,
    LogoutOutlined,
    RightOutlined,
  } from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export default class All extends React.Component {
  constructor() {
    super();
    this.state = {
        collapsed: false,
        data: []
    }
  }

  componentDidMount() {
    document.title = "Lista de Estabelecimentos"
    fetch('http://localhost:3300/allPlaces',{
        method: 'GET'})
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({data: responseJson})
            console.log(this.state.data)
        })
        .catch((error) => {
          console.error(error);
        });
    }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };


render(){

    const columns = [
        {
          title: 'Nome',
          dataIndex: 'name',
          key: 'name',
          render: text => <a>{text}</a>,
        },
        {
          title: 'CNPJ',
          dataIndex: 'cnpj',
          key: 'cnpj',
        },
        {
          title: 'Área',
          dataIndex: 'area',
          key: 'area',
        },
        {
          title: 'Endereço',
          dataIndex: 'endereco',
          key: 'endereco',
        },
        {
          title: 'Capacidade',
          dataIndex: 'max_qnt',
          key: 'max_qnt',
        },
        {
          title: 'Latitude',
          dataIndex: 'lat',
          key: 'lat',
        },
        {
          title: 'Longitude',
          dataIndex: 'long',
          key: 'long',
        },        
        {
          title: 'Editar',
          key: 'action',
          render: (text, record) => (
            <Button type="primary" shape="circle" icon={<RightOutlined />} onClick={(e) => {this.props.history.push({pathname:'/Edit', state: {record:record}})}}/>
          ),
        },
      ];

  return (
    <>
    <Layout style={{height:'100vh'}}>
        <Sider >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['2']}>
            <Menu.Item key="1" icon={<UserOutlined />} onClick={() => {this.props.history.push({pathname:'/Main'})}}>
              Requisições Pendentes
            </Menu.Item>
            <Menu.Item key="2" icon={<UnorderedListOutlined />}>
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
            <Card><Table columns={columns} dataSource={this.state.data} /></Card>
          </Content>
        </Layout>
      </Layout>
      </>
  );
}
  
}


