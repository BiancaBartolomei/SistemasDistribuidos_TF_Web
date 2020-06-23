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
  constructor(props) {
    super(props);
    this.state = {
        collapsed: false,
        place: this.props.location.state.record,
    }
    console.log(this.state.place)
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed, 
    });
  };

  saveChanges(){

  }

  render(){

    const deleteRequest = () => {
      fetch(`http://localhost:3300/request/${this.state.place.user_id}&${this.state.place.place_id}`,{
        method: 'DELETE',
      })
        .then((response) => response.json())
        .then((responseJson) => {
          if(responseJson){
            this.props.history.push('/main');
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }

    const saveChanges = (values) =>{
      var that = this;
      fetch('http://localhost:3300/place',{
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              name: values.nome,
              cnpj: values.cnpj,
              area: values.area,
              max_qnt: values.capacidade,
              lon: values.lon,
              lat: values.lat,
              endereco: values.endereco,
            })
          })
            .then((response) => response.json())
            .then((responseJson) => {
                deleteRequest()
            })
            .catch((error) => {
              console.error(error);
            });
    }


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
                    nome: this.state.place.name,
                    cnpj: this.state.place.cnpj,
                    area: this.state.place.area,
                    capacidade: this.state.place.max_qnt,
                    endereco: this.state.place.endereco,
                    lat: this.state.place.lat,
                    lon: this.state.place.long,
                    enviado: this.state.place.username,

                  }}
                  onFinish={saveChanges}
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
                    label="Endereço"
                    name="endereco"
                    rules={[
                      {
                        required: true,
                        message: 'Coloque o endereço',
                      },
                    ]}
                  >
                    <Input 
                    style={{ width: '60%' }} />
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
                    label="Latitude"
                    name="lat"
                    rules={[
                      {
                        required: true,
                        message: 'Coloque a latitude',
                      },
                    ]}
                  >
                    <Input style={{ width: '60%' }} />
                  </Form.Item>

                  <Form.Item
                    label="Longitude"
                    name="lon"
                    rules={[
                      {
                        required: true,
                        message: 'Coloque a longitude',
                      },
                    ]}
                  >
                    <Input style={{ width: '60%' }} />
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
                      Aceitar
                    </Button>
                    <Button type="link" htmlType="button" onClick={() => deleteRequest()}>
                      Recusar
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


