import { LinkedinFilled, StarFilled, LeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { Card, Avatar } from 'antd';
import React from 'react';
import './home.css';
import rachel from './rachel.png';

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
        social:'https://www.linkedin.com/in/tatianasalermo',
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
        social:'http://linkedin.com/in/harris-wadley',
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
        social:'https://www.linkedin.com/in/alex-lavasani/',
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

const Rachel =  {
  name:'Rachel Smith',
  email:'linkedin.com/rachel',
  interests:['Travel','Food'],
  nameIL:'RS',
  role:'Business Analyst',
  office:'Pittsburgh, PA',
  links:'276',
  social:'',
  color:'rgb(230,26,57)'
};

export default function Link() {
    const navigate = useNavigate();

    return (
        <>
        <div className='homeBody grey-background'>
        <LeftOutlined className='back-bttn' style={{fontSize:'20px', padding:'10px 15px'}} onClick={()=>navigate('/profile')}/>
        <div className='head' style={{marginTop:'0px'}}>
          <h1 style={{color:'#5236AB', fontWeight:"lighter", fontSize:"xx-large", marginTop:'20px'}}>Your Connections</h1>
          <h3 style={{fontSize:"large", fontWeight:"500", paddingBottom:'20px'}}>Select & Connect.</h3>
        </div>
        <div className='content'>
        <Card className='memberCards' onClick={()=>navigate('/memberPage', {state:{member: Rachel, role:'Business Analyst'}})}>
          <Meta title={<><h2 className='memberName'>Rachel Smith</h2>{}<StarFilled style={{position:'absolute',right:'10px', top:'10px', color:'grey'}}></StarFilled></>}
          avatar={
            <Avatar className='nameAvatar' style={{border:"5px solid white", fontSize:"50px", fontWeight:"light"}} src={rachel} size={150}><p></p></Avatar>
          }
          description={
            <div className='cardDesc'>
              <a><LinkedinFilled className='linkIcon'/>linkedin.com/rachel</a>
              <h3>Common Interests</h3>
              <ul>
                <li>Travel</li>
                <li>Food</li>
              </ul>
            </div>
          }></Meta>
        </Card>
          <h1 style={{color:'#5236AB', fontWeight:"lighter", fontSize:"xx-large", marginTop:'10px', marginBottom:'20px'}}>Suggested Connections</h1>

          <CardList/>
        </div>
          <div className='space'/>
        </div>
      </>
      )
}
