import React from 'react';
import Gifts from '../gifts/Gifts';
import Profile from '../layout/Profile';

const Home = () => {
  return (
    <div>
      <div>
        <Profile />
        <Gifts />
      </div>
    </div>
  );
};

export default Home;
