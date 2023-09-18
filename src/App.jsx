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
      <div className="app bg-gray-100 dark:bg-gray-900">
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
