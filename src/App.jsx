// src/App.jsx
import React from 'react';
import Navbar from './components/navbar';
import Intro from './components/intro';
import About from './components/about';
import Skills from './components/skills';
import Portfolio from './components/portfolio';
import Contact from './components/contact';

function App() {
  return (
      <div className="app bg-blue-100 dark:bg-gray-800">
          <Navbar />
          <Intro />
          <About />
          <Portfolio />
          <Skills />
          <Contact />
      </div>
  );
}

export default App;
