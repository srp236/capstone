import logo from './logo.svg';
// import './App.css';
// import { Button, Card, Image } from 'antd-mobile';
import { UserOutline, MessageOutline, PlayOutline } from 'antd-mobile-icons';
import { Route, Routes, MemoryRouter as Router, useNavigate, useLocation,BrowserRouter } from 'react-router-dom';
import { Card, Image, Avatar, Layout } from 'antd';
import { Col, Row } from 'antd';
import { TabBar } from 'antd-mobile'
import { Space } from 'antd';
import React from 'react';
import './home.css';

const { Meta } = Card;

const BottomNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const setRouteActive = (value) => {
    navigate(value);
  }

  const tabs = [
    {
      key:'/profile',
      title:'Profile',
      icon:<UserOutline />,
    },
    {
      key:'/home',
      title:'Home',
      icon:<PlayOutline />
    },
    {
      key:'/chat',
      title:'Chat',
      icon:<MessageOutline />,
    },
  ]

  return (
    <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
      {tabs.map(item => (
        <TabBar.Item
          key={item.key}
          icon={item.icon}
        />
      ))}
    </TabBar> 
  )
}

const CardList = () => {
  const info = [
    {
      name:'Member 1',
      email:'linkedin.com/member1',
      picture:'temp',
      interests:['BTS','dance','music']
    },
    {
      name:'Member 2',
      email:'linkedin.com/member2',
      picture:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      interests:['food','sports', 'music']
    },
    {
      name:'Member 3',
      email:'linkedin.com/member3',
      picture:"https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
      interests:['pets','outdoors','food']
    },
    {
      name:'Member 4',
      email:'linkedin.com/member4',
      picture:"https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
      interests:['pets','outdoors','food']
    }
  ]

  return (
    info.map(item => (
      <div onClick={() =>{alert("test")}}>
      <Card className='memberCards'>
        <Meta avatar={<Avatar size={150} src={<Image preview={false} placeholder={item.picture} src={item.picture}/>}/>} title={<h2>{item.name}</h2>}
        description={
          <div className='cardDesc'>
            <a>{item.email}</a>
            <h3>Common Interests</h3>
            <ul>
              <li>{item.interests[0]}</li>
              <li>{item.interests[1]}</li>
            </ul>
          </div>
        }></Meta>
      </Card>
      </div>
    ))   
  )
}

export default () => {
  return (
    <Router initialEntries={['/profile']}>
      <div className="app">
        <div className="body">
          <Routes>
            <Route exact path='/profile' element={<Profile />}></Route>
            <Route exact path='/home' element={<Home />}></Route>
            <Route exact path='/chat' element={<Chat />}></Route>
          </Routes>
        </div>
        <div className= 'bottom'>
          <BottomNavBar />
        </div>
      </div>
    </Router>
  )
}

function Home() {
  return <div>Home Page Test</div>
}
function Profile() {
  return (
    <>
    <Space direction='vertical' size="middle">
    <h1 style={{color:'#5236AB'}}>Link Up!</h1>
    <h3>Select and befriend.</h3>
    <div className='profileBody'>
      <CardList/>
    </div>
    </Space>
  </>
  )
}
function Chat() {
  return <div>Chat Page Test</div>
}

{/* <Card className='memberCards'style={{ borderRadius: '16px' }}>
<Row justify="start">
  <Col span={12}>
    <Image src={logo}/>
  </Col>
  <Col span={12}>
    <h1>Sheyeanne Powell</h1>
    <a href="https://linkedin.com/your/profile/url" class="social-icon si-rounded si-small si-linkedin">
      <i class="icon-linkedin"></i>
      <i class="icon-linkedin"></i>member.email@cgi.com
  </a>
  <h3 className='cardTitle'>Common Interests</h3>
  <ul>
    <li>Food</li>
    <li>Sports</li>
  </ul>
  </Col>
</Row>
</Card> */}

{/* <Card className='memberCards'>
<Meta avatar={<Avatar size={150} src={<Image preview={false} src={"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}/>}/>}
title={<div className='name'>Member Name</div>}
description={
  <div className='memberInfo'>
    <h4>linkedIn.com/memberName</h4>
    <div>common interests</div>
    <ul>
      <li>sports</li>
      <li>food</li>
    </ul>
  </div>
}></Meta>
</Card>
<Card className='memberCards'>
<Row>
<Col flex="40%">
  <Image  preview={false} src={"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}/>
</Col>
<Col flex="60%">
  <Row className='memberInfo'>
    <h2 className='name'>Member Name</h2>
    <h3 className='linked'>Member Name</h3>

    {/* <h3>linkedin.com/membername</h3> */}
//   </Row>
// </Col>
// </Row>
// </Card> */}