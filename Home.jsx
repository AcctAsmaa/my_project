import React from 'react';
import Footer from '../Components/Footer';
import Content from '../Components/Content';
import './Home.css'; // ملف التنسيقات الخاص بصفحة الهوم

const Home = () => {
  return (
    <div className="home">
      <Content />
      <Footer />
    </div>
  );
};

export default Home;
