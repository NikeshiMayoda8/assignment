import React from 'react';
import { Layout } from 'antd';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Navbar />
        <Layout>
          <Content style={{ padding: '0 50px' }}>
            <div className="site-layout-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
