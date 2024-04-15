import React from 'react';
import Header from './components/Header';
import Mission from './components/Mission';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import './App.css'; // Import the CSS file for global styles

function App() {
  return (
    <div>
      <Header />
      <Mission />
      <Carousel />
      <Footer />

    </div>
  );
}

export default App;
