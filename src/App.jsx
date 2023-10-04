// src/App.jsx
import React from 'react';
import Navbar from './components/navbar';
import Intro from './components/intro';
import About from './components/about';
import Skills from './components/skills';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Footer from './components/footer';
import backgroundImage from './assets/BG.png';

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  };
  return (
      <div className="app bg-blue-100 dark:bg-gray-800" style={backgroundStyle}>
          <Navbar />
          <Intro />
          <About />
          <Portfolio />
          <Skills />
          <Contact />
          <Footer />
      </div>
  );
}

export default App;
