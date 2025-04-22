import { Card, Button,Row, Progress } from 'antd';
import React from 'react';
import './home.css';

const CardList = () => {
    const info = [
      {
        heading:'CGI ACADEMIA yasssss yup',
        title:'Launch Journey - Week 4 Day 3',
        subTitle:'Documentation & Requirements',
        option1:'Clear',
        option2:'Open',
        stat:'Not Started',
        percent:'0'
        
      },
      {
        heading:'CGI ACADEMIA - External',
        title:'Codeacademy: Learn SQL',
        subTitle:'CODEACADEMY COURSE',
        option1:'Clear',
        option2:'Set Reminder',
        stat:'Started',
        percent:'66'
      },
      {
        heading:'CGI On Boarding',
        title:'Enroll in Critical Illness and Accident Insurance - V2',
        subTitle:'Due Date 3/2/2023',
        option1:'Clear',
        option2:'Open',
        stat:'Not Started',
        percent:'0'
      },
    ]
    
    return (
      info.map(item => (
        <Row align="middle" justify="space-between">
        <Card className='taskCard' headStyle={{background:'linear-gradient(to right, rgb(230,26,57), rgb(82,54,171))', color:'white', fontSize:'large', borderRadius:"0px"}} title={item.heading}>
            <p className='taskTitle' style={{fontWeight:'500', fontSize:'medium'}}>{item.title}</p>
            <p className='taskSubTitle'>{item.subTitle}</p>
            <div className='taskBttn'>
                <Button className='opt1'>{item.option1}</Button>
                <Button className='opt2'>{item.option2}</Button>
            </div>
        </Card>
        {/* <Avatar className='nameAvatar' style={{border:"5px solid white", boxShadow:"2px 2px 10px grey", fontSize:"50px", fontWeight:"light"}}><p>{item.initial}</p></Avatar> */}
        <div className='progressC'>
          <Progress  style={{paddingBottom:'10px'}} type="circle" strokeWidth={10} strokeColor='rgb(230,26,57)' width={70} percent={item.percent}/>
          <div>{item.stat}</div>
        </div>
        </Row>
      ))   
    )
  }

export default function Home() {
    return (
        <>
            <div className='homeBody'>
                <div className='head'>
                    <h1 style={{color:'rgb(82,54,171)', fontWeight:"lighter", fontSize:"xx-large"}}>Today's Tasks</h1>
                </div>
                <div className='content'>
                    <CardList/>
                </div>
                <div className='space'/>
            </div>
        </>
    )
  }
