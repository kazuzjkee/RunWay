import React from 'react';
import '../styles/Home.css';
import Header from '../components/Header';
import CategorySection from '../components/CategorySection';
import InfoSection from '../components/InfoSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <CategorySection />
      <InfoSection />
      <Footer />
    </div>
  );
};

export default Home;