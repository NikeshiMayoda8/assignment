import React from 'react';
import Button from '../components/Button'; 

const Home: React.FC = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-slogan">Savor the Sweetest Delights</h1>
          <p className="hero-subheader">Explore our collection of mouthwatering desserts that bring joy to every bite.</p>
          <Button variant="primary" size="large">Discover Our Desserts</Button>
        </div>
        <div className="hero-image"></div>
      </div>
    </div>
  );
};

export default Home;
