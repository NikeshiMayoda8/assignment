import React, { useState } from 'react';
import { Layout, Menu, Drawer, Button } from 'antd';
import { HomeOutlined, FileTextOutlined, InfoCircleOutlined, PhoneOutlined, MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const Navbar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Header className="navbar">
      <div className="logo">
        <Link to="/">Sugar Rush</Link>
      </div>
      <Button
        className="menu-button"
        type="primary"
        icon={<MenuOutlined />}
        onClick={showDrawer}
      />
      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        visible={visible}
        className="ant-menu-mobile"
      >
        <Menu mode="vertical" onClick={onClose} >
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<FileTextOutlined />}>
            <Link to="/blog">Blog</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<InfoCircleOutlined />}>
            <Link to="/about">About</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<PhoneOutlined />}>
            <Link to="/contact">Contact</Link>
          </Menu.Item>
        </Menu>
      </Drawer>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        className="ant-menu-desktop"
      >
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<FileTextOutlined />}>
          <Link to="/blog">Blog</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<InfoCircleOutlined />}>
          <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<PhoneOutlined />}>
          <Link to="/contact">Contact</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
