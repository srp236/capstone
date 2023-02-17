import defImg from './Rectangle.png';
// import './App.css';   
import { HomeFilled, HomeOutlined, LinkedinFilled, StarFilled, TeamOutlined, CalendarOutlined, FileDoneOutlined } from '@ant-design/icons';
import { Card, Image, Avatar, Layout, Button,Row, Col } from 'antd';
import React from 'react';
import './home.css';

const { Meta } = Card;

const CardList = () => {
    const info = [
      {
        heading:'CGI ACADEMIA',
        title:'Launch Journey - Week 4 Day 3',
        subTitle:'Documentation & Requirements',
        option1:'Clear',
        option2:'Open',
        color:'#1AB977',
        start:'Not Started'
        
      },
      {
        heading:'CGI ACADEMIA - External',
        title:'Codeacademy: Learn SQL',
        subTitle:'CODEACADEMY COURSE',
        option1:'Clear',
        option2:'Set Reminder',
        color:'#FFAC25'
      },
      {
        heading:'CGI On Boarding',
        title:'Enroll in Critical Illness and Accident Insurance - V2',
        subTitle:'Due Date 3/2/2023',
        option1:'Clear',
        option2:'Open',
        color:'#B00020'
      },
    ]
    
    return (
      info.map(item => (
        <Row align="middle" justify="space-between">
        <Card className='taskCard' headStyle={{background:item.color, color:'white', fontSize:'large', borderRadius:"0px"}} title={item.heading}>
            <p className='taskTitle' style={{fontWeight:'500', fontSize:'medium'}}>{item.title}</p>
            <p className='taskSubTitle'>{item.subTitle}</p>
            <div className='taskBttn'>
                <Button className='opt1'>{item.option1}</Button>
                <Button className='opt2'>{item.option2}</Button>
            </div>
        </Card>
        {/* <Avatar className='nameAvatar' style={{border:"5px solid white", boxShadow:"2px 2px 10px grey", fontSize:"50px", fontWeight:"light"}}><p>{item.initial}</p></Avatar> */}
        <div className='progressC'>
        <Avatar size={60}style={{border:"5px solid rgb(82,54,171)", fontSize:"20px", fontWeight:"light", backgroundColor:'transparent'}}>66%</Avatar>
        </div>
        </Row>
      ))   
    )
  }

export default function Home() {
    return (
        <>
            {/* <div className='homeHead'>
            <h1 style={{color:'white',fontWeight:"lighter", fontSize:"xx-large"}}>Today's Tasks</h1>
        </div> */}
            <div className='homeBody purple-background'>
                <div className='head'>
                    <h1 style={{color:'grey', fontWeight:"lighter", fontSize:"xx-large"}}>Today's Tasks</h1>
                </div>
                <div className='content'>
                    <CardList/>
                </div>
                <div className='space'/>
            </div>
        </>
    )
  }