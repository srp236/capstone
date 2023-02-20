import defImg from './Rectangle.png';
import { LinkedinFilled, StarFilled, LeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { Card, Avatar } from 'antd';
import React from 'react';
import './home.css';

const { Meta } = Card;

const CardList = () => {
    const info = [
      {
        name:'Tatiana Salermo',
        email:'linkedin.com/tatiana',
        interests:['Fashion','Food'],
        nameIL:'TS',
        role:'Business Analyst',
        office:'New Brunswick, NJ',
        links:'220',
        social:'',
        color:'rgb(230,26,57)'
      },
      {
        name:'Harris Wadley',
        email:'linkedin.com/harris',
        interests:['Food','Sports'],
        nameIL:'HW',
        role:'Data Engineer',
        office:'New Brunswick, NJ',
        links:'378',
        social:'',
        color:'grey'
      },
      {
        name:'Alex Lavasani',
        email:'linkedin.com/alex',
        interests:['Pets','Outdoors'],
        nameIL:'AL',
        role:'Data Engineeer',
        office:'New Brunswick, NJ',
        links:'120',
        social:'',
        color:'rgb(230,26,57)'
      },
      {
        name:'Sheyeanne Powell',
        email:'linkedin.com/powell',
        interests:['BTS','Music'],
        nameIL:'SP',
        role:'Software Developer',
        office:'New Brunswick, NJ',
        links:'135',
        social:'https://www.linkedin.com/in/sheyeanne-powell-079598237/',
        color:'grey'
      },
      {
        name:'Aasish Munusamny',
        email:'linkedin.com/asish',
        interests:['Pets','Outdoors'],
        nameIL:'AM',
        role:'Business Analyst',
        office:'New Brunswick, NJ',
        links:'248',
        social:'',
        color:'grey'
      }
    ]
  
    const navigate = useNavigate();
  
    return (
      info.map(item => (
        <Card onClick={()=>navigate('/memberPage', {state:{member: item, role: item.role}})} className='memberCards'>
          <Meta title={<><h2 className='memberName'>{item.name}</h2>{}<StarFilled style={{position:'absolute',right:'10px', top:'10px', color:item.color}}></StarFilled></>}
          avatar={
            <Avatar className='nameAvatar' style={{border:"5px solid white", fontSize:"50px", fontWeight:"light"}} size={150}><p>{item.nameIL}</p></Avatar>
          }
          description={
            <div className='cardDesc'>
              <a><LinkedinFilled className='linkIcon'/>{item.email}</a>
              <h3>Common Interests</h3>
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

export default function Link() {
    const navigate = useNavigate();

    return (
        <>
        <div className='homeBody grey-background'>
        <LeftOutlined style={{fontSize:'20px', padding:'10px 15px'}} onClick={()=>navigate('/profile')}/>
        <div className='head' style={{marginTop:'0px'}}>
          <h1 style={{color:'#5236AB', fontWeight:"lighter", fontSize:"xx-large"}}>Link Up!</h1>
          <h3 style={{fontSize:"large", fontWeight:"500", paddingBottom:'20px'}}>Select & Connect.</h3>
          {/* <p className='starInfo'> <StarFilled className='star'/> A star indicates a member who has chosen to indicate their interest in mentoring </p> */}
        </div>
        <div className='content'>
          <CardList/>
        </div>
          <div className='space'/>
        </div>
      </>
      )
}