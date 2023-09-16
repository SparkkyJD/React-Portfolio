// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/intro';
import About from './components/about';
import Skills from './components/skills';

function App() {
  return (
    
    <div className="app">
      <Navbar />
      <main className= "bg-gray-100 dark:bg-gray-900">
      <Intro/>
      <About/>
      <Skills/>
      </main>
    </div>
    
  );
}

export default App;