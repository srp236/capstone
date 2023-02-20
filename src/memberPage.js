import { useNavigate, useLocation } from 'react-router-dom';
import { LinkOutlined, MessageOutlined, LeftOutlined } from '@ant-design/icons';
import { Avatar, Row,Col, Button } from 'antd';
import React from 'react';
import './home.css';

const ProfileList1 = () => {
    const {state} = useLocation();
    const { member } = state;

    const info = [
        {
            title:'Role',
            text:member.role
        },
        {
            title:'Office',
            text:member.office
        },
        {
            title:'New Member Buddy',
            text:'Sydney Clark'
        },
        {
            title:'Alma Mater',
            text:'University of Delaware'
        },
        {
            title:'Veteran Status',
            text:'N/A'
        },
        {
            title:'Hobbies & Interests',
            text:<><p>{member.interests[0]}<br/>{member.interests[1]}</p></>
        },
    ]
    return (
        info.map(item => (
        <div className='lists'>
            <div style={{color:'rgb(82,54,171)', fontSize:'18px', fontWeight:'600'}}>{item.title}</div>
            <div style={{color:'black', fontWeight:'400'}}>{item.text}</div>
        </div>
        ))   
      )
}
const ProfileList2 = () => {
    const {state} = useLocation();
    const { member } = state;
    const info = [
        {
            title:'SBU',
            text:'CSG East'
        },
        {
            title:'Member Manager',
            text:'Margaret Piliere'
        },
        {
            title:<a style={{color:'rgb(82,54,171)', fontSize:'18px', fontWeight:'400',textDecorationLine:'underline'}} href={member.social}>Linkedin Profile</a>,
            text:<><br/></>
        },
        {
            title:'Grad Year',
            text:'2017'
        },
        {
            title:'Location',
            text:'Warren, NJ'
        },
    ]
    return (
        info.map(item => (
        <div className='lists'>
            <div style={{color:'rgb(82,54,171)', fontSize:'18px', fontWeight:'600'}}>{item.title}</div>
            <div style={{color:'black', fontWeight:'400'}}>{item.text}</div>
        </div>
        ))   
      )
}

export default function MemberPage() {
    const navigate = useNavigate();
    const {state} = useLocation();
    const { member } = state;
    return (
        <div>
            <div className='profile-header'>
                <div className='profile-head-text'>
                    <LeftOutlined style={{fontSize:'20px'}} onClick={()=>navigate('/link')}/>
                    <div className='link-section'>
                        <LinkOutlined style={{fontSize:'25px'}}/>
                        <div style={{fontWeight:'100', fontSize:'15px'}}>BUDDIES</div>
                        <h4 style={{textDecorationLine:'underline', fontWeight:'100'}}>{member.links}</h4>
                    </div>
                </div>
                <Avatar className='profile-img nameAvatar' style={{color:'white', border:"5px solid white", fontSize:"50px", fontWeight:"light"}} size={130}>{member.nameIL}</Avatar>
            </div>
            <div className='userName'>
                <h1 style={{color:'black', fontWeight:"lighter", fontSize:"x-large", paddingBottom:'10px'}}>{member.name}</h1>
                <Button className='connect-button'><MessageOutlined />Connect Now</Button>
                <Button className='connect-button'><MessageOutlined />Connect Now</Button>
            </div>
            <Row className='rows'>
                <Col span={12}>
                    <ProfileList1></ProfileList1>
                </Col>
                <Col span={12} style={{paddingLeft:'30px'}}>
                    <ProfileList2></ProfileList2>
                </Col>
            </Row>
            <div className='space'/>
        </div>
    )
}