import React from 'react'
import 'antd/dist/antd.css';
import './index.css';
import Item from './item.js';
import Add from '../components/add.js';
import { Layout, Menu, Row,Col,Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;


export default class worksheet extends React.Component{
    // constructor(props){
    //     super(props);
    // }
    
    render(){
     return(
        <Layout className="layout">
        <Header style={{ height: '34px' }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '34px',width:'200px', margin: '0 auto'  }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
           
          </Menu>
          <Add></Add>
        </Header>
        <Content  style={{ padding: '0 20px' }}>
          <Breadcrumb style={{ margin: '16px 0',textAlign: 'center' }}>
            <Breadcrumb.Item >排班表</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff',minHeight: 580 }}>
            <Row type="flex" justify="center" className="daytitles">
            <Col span={4} className="day-row"></Col>
            <Col span={4} className="day-row ">星期一</Col>
            <Col span={4} className="day-row">星期二</Col>
            <Col span={4} className="day-row">星期三</Col>
            <Col span={4} className="day-row">星期四</Col>
            <Col span={4} className="day-row">星期五</Col>
            </Row>

            <Col span={4} type="flex" justify="center">
            <Row type="flex" justify="center" className="courserow time-row">第一、二节课</Row>
            <Row type="flex" justify="center" className="courserow time-row">第三、四节课</Row>
            <Row type="flex" justify="center" className="courserow time-row">第五、六节课</Row>
            <Row type="flex" justify="center" className="courserow time-row">第七、八节课</Row>
            </Col>

            <Col span={4} type="flex" justify="center">
           <Item/> <Item/> <Item/> <Item/>
            </Col>
            <Col span={4} type="flex" justify="center">
            
            </Col>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
         )
   }

}