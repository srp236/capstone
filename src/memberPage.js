import { LeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import defImg from './Rectangle.png';
import { Card, Image, Avatar, Layout } from 'antd';
import { TabBar } from 'antd-mobile'
import React from 'react';
import './home.css';

export default function MemberPage() {

    const navigate3 = useNavigate();
    return (
        <>
        <div className="top"><LeftOutlined onClick={()=>navigate3('/profile')} /></div>

        <Card className='concon' style={{}}>
            <div className='homeHead'>
            </div>
            <Avatar className='homeImg' size={150}></Avatar>
        </Card>
    <div className='userInfo'>
      <h1 style={{color:'black', fontWeight:"lighter", fontSize:"xx-large"}}>Member Name</h1>
      <a style={{fontSize:"large", fontWeight:"500", color:"rgb(82,54,171)"}}>Linkedin Profile</a>
    </div>
    <div className='profileBody'>
    </div>
  </>
    )
}