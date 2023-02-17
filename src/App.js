import logo from './logo.png';
import { HomeFilled, HomeOutlined, LinkedinFilled, StarFilled, TeamOutlined, CalendarOutlined, FileDoneOutlined } from '@ant-design/icons';
import { Route, Routes, MemoryRouter as Router, useNavigate, useLocation,BrowserRouter } from 'react-router-dom';
import { Card, Image, Avatar, Layout } from 'antd';
import { TabBar, NavBar } from 'antd-mobile'
import React from 'react';
import './home.css';
import MemberPage from './memberPage';
import Home from './home';
import Profile from './profile';
import Link from './link';

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
      title:'profile',
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

export default () => {
  return (
    <Router initialEntries={['/profile']}>
      <div className="app">
        <div className='top'>
          <Image height={50}  style={{paddingTop:"10px"}} src={logo}></Image>
        </div>
        <div className="body">
          <Routes>
            <Route exact path='/home' element={<Home />}></Route>
            <Route exact path='/chat' element={<Chat />}></Route>
            <Route exact path='/calender' element={<Calender/>}></Route>
            <Route exact path='/profile' element={<Profile />}></Route>
            <Route exact path='/link' element={<Link/>}></Route>
            <Route exact path='/memberPage' element={<MemberPage/>}></Route>
          </Routes>
        </div>
        <div className= 'bottom'>
          <div className='bottom-gradient'></div>
          <BottomNavBar />
        </div>
      </div>
    </Router>
  )
}

function Chat() {
  return <div>Tasks Page Test</div>
}
function Calender() {
  return <div>Calender Page Test</div>
}