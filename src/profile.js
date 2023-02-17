import { useNavigate } from 'react-router-dom';
import {LinkOutlined} from '@ant-design/icons';
import { Avatar, Row,Col } from 'antd';
import React from 'react';
import './home.css';

const ProfileList1 = () => {
    const info = [
        {
            title:'Role',
            text:'Business Analyst'
        },
        {
            title:'Office',
            text:'New Brunswick, NJ'
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
            text:<><p>Cooking<br/>Travel</p></>
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
    const info = [
        {
            title:'BSU',
            text:'CSG East'
        },
        {
            title:'Member Manager',
            text:'Margaret Piliere'
        },
        {
            title:<a style={{color:'rgb(82,54,171)', fontSize:'18px', fontWeight:'400',textDecorationLine:'underline'}}>Linkedin Profile</a>,
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

export default function Profile() {
    const navigate = useNavigate();
    return (
        <div>
            <div className='profile-header'>
                <div className='profile-head-text'>
                    <h1>My Profile</h1>
                    <div className='link-section'>
                        <LinkOutlined style={{fontSize:'25px'}}/>
                        <div style={{fontWeight:'100', fontSize:'15px'}} onClick={()=>navigate('/link')}>LINKS</div>
                        <h4 style={{textDecorationLine:'underline', fontWeight:'100'}}>0</h4>
                    </div>
                </div>
                <Avatar className='profile-img' style={{color:'black'}} size={130}>Upload Photo</Avatar>
            </div>
            <div className='userName'>
                <h1 style={{color:'black', fontWeight:"lighter", fontSize:"x-large"}}>Katie Parker</h1>
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