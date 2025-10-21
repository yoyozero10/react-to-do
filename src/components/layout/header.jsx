import { Link } from 'react-router-dom';
import { HomeOutlined, UserOutlined, BookOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';
import { AuthContext } from '../context/auth.context';
import { useContext } from 'react';
import { logoutUserAPI } from '../../services/api.service';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const { user, setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [current, setCurrent] = useState('mail');
    const onClick = e => {
        setCurrent(e.key);
    };
    const handleLogout = async () => {
        const res = await logoutUserAPI();
        if (res && res.data) {
            setUser({
                "_id": "",
                "username": "",
                "email": ""
            });
            localStorage.removeItem('token');
            message.success('Logout successfully!');
            navigate('/login');
        }
    };  

    const items = [
        {
            label: <Link to={'/'}>Home</Link>,
            key: 'home',
            icon: <HomeOutlined />,
        },
        {
            label: <Link to={'/users'}>Users</Link>,
            key: 'users',
            icon: <UserOutlined />,
        },
        {
            label: <Link to={'/books'}>Books</Link>,
            key: 'books',
            icon: <BookOutlined />,
        },

        {
            label: 'Setting',
            key: 'setting',
            icon: <SettingOutlined />,
            children: [
                {
                    type: 'group',
                    label: 'User',
                    children: [
                        { label: 'Profile', key: 'profile' },
                        { label: <span onClick={handleLogout}>Logout</span>, key: 'logout' },
                    ],
                },
            ],
        },
        ...(user._id ? [    
        {
            label: `Welcome ${user.username}`,
            key: 'welcome',
            icon: <UserOutlined />,
        }
    ] : [
        {
            label: <Link to={'/login'}>Login</Link>,
            key: 'login',
            icon: <UserOutlined />,
        }
    ]),
    ];
    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
        />
    );
}

export default Header