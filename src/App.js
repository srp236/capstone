import logo from './logo.svg';
import defImg from './Rectangle.png';
// import './App.css';   
// import { Button, Card, Image } from 'antd-mobile';
import { HomeFilled, HomeOutlined, LinkedinFilled, StarFilled, TeamOutlined, CalendarOutlined, FileDoneOutlined } from '@ant-design/icons';
import { Route, Routes, MemoryRouter as Router, useNavigate, useLocation,BrowserRouter } from 'react-router-dom';
import { Card, Image, Avatar, Layout } from 'antd';
import { TabBar } from 'antd-mobile'
import React from 'react';
import './home.css';
import MemberPage from './memberPage';

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
      key:'/home',
      title:'Home',
      icon:<HomeOutlined />
    },
    {
      key:'/chat',
      title:'Chat',
      icon:<FileDoneOutlined />,
    },
    {
      key:'/calender',
      title:'Calender',
      icon:<CalendarOutlined />,
    },
    {
      key:'/profile',
      title:'Profile',
      icon:<TeamOutlined />,
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
      picture:defImg,
      interests:['BTS','dance'],
      initial:'M1'
    },
    {
      name:'Member 2',
      email:'linkedin.com/member2',
      picture:defImg,
      interests:['food','sports'],
      initial:'M2'
    },
    {
      name:'Member 3',
      email:'linkedin.com/member3',
      interests:['pets','outdoors'],
      initial:'M3'
    },
    {
      name:'Member 4',
      email:'linkedin.com/member4',
      interests:['pets','outdoors'],
      initial:'M4'
    }
  ]

  const navigate2 = useNavigate();

  return (
    info.map(item => (
      <Card onClick={()=>navigate2('/memberPage')} className='memberCards'>
        <Meta title={<h2 className='memberName'>{item.name}</h2>}
        avatar={
          <Avatar className='nameAvatar' style={{border:"5px solid white", boxShadow:"2px 2px 10px grey", fontSize:"50px", fontWeight:"light"}} size={150}><p>{item.initial}</p></Avatar>
        }
        description={
          <div className='cardDesc'>
            <a><LinkedinFilled className='linkIcon'/>{item.email}</a>
            <h3>common interests</h3>
            <ul>
              <li>{item.interests[0]}</li>
              <li>{item.interests[1]}</li>
            </ul>
          </div>
        }></Meta>
      </Card>
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
            <Route exact path='/calender' element={<Calender/>}></Route>
            <Route exact path='/memberPage' element={<MemberPage/>}></Route>
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
    <div className='profileHead'>
      <h1 style={{color:'#5236AB', fontWeight:"lighter", fontSize:"xx-large"}}>Link Up!</h1>
      <h3 style={{fontSize:"large", fontWeight:"500"}}>Select & Connect.</h3>
      <p className='starInfo'> <StarFilled className='star'/> A star indicates a member who has chosen to indicate their interest in mentoring </p>
    </div>
    <div className='profileBody'>
      <CardList/>
    </div>
  </>
  )
}
function Chat() {
  return <div>Tasks Page Test</div>
}
function Calender() {
  return <div>Calender Page Test</div>
}