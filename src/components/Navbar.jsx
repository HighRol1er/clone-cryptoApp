import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import icon from "../images/cryptocurrency.png"

const items = [
  {
    label : <Link to="/">Home</Link>,
    icon : <HomeOutlined />,
    key : 'home',
  },
  {
    label : <Link to="/cryptocurrencies">Cryptocurrencies</Link>,
    icon : <FundOutlined />,
    key : 'cryptocurrencies',
  },
  {
    label : <Link to="/exchanges">Exchanges</Link>,
    icon : <MoneyCollectOutlined />,
    key : 'exchanges',
  },
  {
    label : <Link to="/news">News</Link>,
    icon : <BulbOutlined />,
    key : 'news',
  },
];


const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='logo-container'>
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className='logo'>
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
      </div>
      <Menu theme='dark' items={items} />
    </div>
  )
}

export default Navbar;