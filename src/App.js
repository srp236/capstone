import logo from './logo.png';
import { HomeOutlined, LoadingOutlined, TeamOutlined, CalendarOutlined, FileDoneOutlined, MessageOutlined } from '@ant-design/icons';
import { Route, Routes, MemoryRouter as Router, useNavigate, useLocation } from 'react-router-dom';
import { Image, Calendar, Avatar, Button } from 'antd';
import { TabBar } from 'antd-mobile'
import React, { useEffect, useState } from 'react';
import './home.css';
import MemberPage from './memberPage';
import Home from './home';
import Profile from './profile';
import Link from './link';
import rachel from './rachel.png'

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
    <Router initialEntries={['/link']}>
      <div className="app">
        <div className='top'>
          <Image height={50}  style={{paddingTop:"10px"}} src={logo}></Image>
        </div>
        <div className="body">
          <Routes>
            <Route exact path='/chat' element={<Chat />}></Route>
            <Route exact path='/home' element={<Home />}></Route>
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
  const navigate = useNavigate();
  const info =
    {
      name:'Rachel Smith',
      email:'linkedin.com/smith',
      img:rachel,
      interests:['Travel','Food'],
      nameIL:'RS',
      role:'Business Analyst',
      office:'Pittsburgh, PA',
      links:'276',
      social:'',
      color:'rgb(230,26,57)',
      nmb:'Katie Parker'
    }

  const FindBuddy = () => {
    if(!loading) {
      return <div className='buddy'>
        <p style={{fontStyle:'italic', fontSize:'40px'}}>Buddy Up!</p>
        <p style={{fontSize:'17px'}}>Your New Member Buddy is:</p>
        <Avatar src={rachel} style={{border:"5px solid white", fontSize:"50px", fontWeight:"light"}} size={180}></Avatar>
        <p style={{fontSize:'25px'}}>Rachel Smith</p>
        <p style={{fontSize:'15px'}}>Software Developer @ Pittsburg, PA</p>
        <div className='buddyBttn'> 
          <Button onClick={()=>navigate('/memberPage', {state:{member: info}})}>Open Profile <TeamOutlined/></Button>
          <Button>Open Chat <MessageOutlined/></Button>
        </div>
      </div>
    }
  }
  const antIcon = (<LoadingOutlined style={{fontSize: 80, color:'white'}}spin/>)
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 7000);
    return () => clearTimeout(timer);
  })
  
  return <div className='buddy' style={{justifyContent:'center', height:'700px'}}>
  {/* return <div className='gradient-background buddy' style={{justifyContent:'center', height:'700px'}}> */}
    {/* <div>Tasks Page Test</div> */}
    {/* <Spin indicator={antIcon} style={{position:'absolute', botttom:'10px',color:'white', fontSize:'30px', fontWeight:'400', display:'flex', flexDirection:'column-reverse', alignItems:'center'}} tip='Finding Your Buddy...' spinning={loading} />
    <FindBuddy></FindBuddy>
    <div className='' style={{height:'300px'}}></div> */}
    {/* <Home/> */}

  </div>
}

function Calender() {
  return <div className='cal'>
    <Calendar className='call'
    ></Calendar>
  </div>
}