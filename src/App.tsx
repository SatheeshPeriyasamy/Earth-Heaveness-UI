import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import Footer from './components/Footer';
import Services from './pages/Services';
import About from './pages/About';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import ClientPortal from './pages/ClientPortal';
import Newsletters from './pages/Newsletters';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Services />
        <About />
        <Resources />
        <Contact />
        <ClientPortal />
        <Newsletters />
      </main>
      <Footer />
    </div>
  );
}

export default App;