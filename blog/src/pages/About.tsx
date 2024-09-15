import React from 'react';
import { Collapse } from 'antd';
const { Panel } = Collapse;

const About: React.FC = () => {
  return (
    <div className="about-container">
      <div className="header">
        <div className="header-image-container">
          <img src="/images/about-img.jpeg" alt="About Us" className="header-image" />
          <div className="header-overlay">
            <h1>About Us</h1>
          </div>
        </div>
      </div>
      <div className="introduction">
        <h2>Introduction</h2>
        <p>
          Welcome to our blog! At Sugar Rush, we are passionate about all things
          sweet. From decadent desserts to scrumptious treats, our mission is to
          share our love for delightful confections with you. Whether you're a
          baking enthusiast or just someone who enjoys indulging in a sweet
          delight, you've come to the right place.
        </p>
      </div>
      <Collapse defaultActiveKey={['1']} accordion>
        <Panel header="My Story" key="1">
          <p>
            My journey into the world of desserts began in my grandmother's kitchen,
            where I first learned the art of baking. Over the years, I honed my skills,
            experimented with new recipes, and developed a deep appreciation for the
            craft of dessert-making. What started as a hobby soon turned into a passion,
            and I decided to share my creations with the world through this blog.
          </p>
        </Panel>
        <Panel header="What to Expect" key="2">
          <p>
            On our blog, you can expect to find a variety of dessert recipes, from
            classic favorites to innovative new creations. We will also share baking
            tips, techniques, and insights to help you perfect your own sweet treats.
            Join us on this delicious journey and discover the joy of creating and
            enjoying delectable desserts.
          </p>
        </Panel>
      </Collapse>
    </div>
  );
};

export default About;
