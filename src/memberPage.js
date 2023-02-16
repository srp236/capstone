import { LeftOutlined } from '@ant-design/icons';
import { Route, Routes, MemoryRouter as Router, useNavigate, useLocation,BrowserRouter } from 'react-router-dom';

export default function MemberPage({ name }) {

    const navigate3 = useNavigate();

    return (
        <>
        <div className="top"><LeftOutlined onClick={()=>navigate3('/profile')} /></div>
            <div className="body">Member Page Test {name}</div>
        
        </>
    )
}