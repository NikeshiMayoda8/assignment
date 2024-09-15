import React from 'react';
import { Layout, Typography, Space } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Footer } = Layout;
const { Text } = Typography;

const FooterComponent: React.FC = () => {
  return (
    <Footer className="footer">
      <div className="footer-content">
        <Space direction="vertical" size="middle" align="center">
          <Text type="secondary">© 2024 Sugar Rush. All rights reserved.</Text>
          <Space size="large">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FacebookOutlined style={{ fontSize: '24px', color: '#d4c0ac' }} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <TwitterOutlined style={{ fontSize: '24px', color: '#d4c0ac' }} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <InstagramOutlined style={{ fontSize: '24px', color: '#d4c0ac' }} />
            </a>
          </Space>
          <Space size="large">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </Space>
        </Space>
      </div>
    </Footer>
  );
};

export default FooterComponent;
