import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />

      {/* Background blobs for aesthetic effect */}
      <div style={{
        position: 'fixed', top: '10%', left: '-5%', width: '400px', height: '400px',
        background: 'var(--accent-primary)', filter: 'blur(150px)', opacity: 0.1, zIndex: -1
      }}></div>
      <div style={{
        position: 'fixed', bottom: '10%', right: '-5%', width: '400px', height: '400px',
        background: 'var(--accent-secondary)', filter: 'blur(150px)', opacity: 0.1, zIndex: -1
      }}></div>
    </div>
  );
}

export default App;
