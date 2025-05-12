import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Servicios from './components/Servicios';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Servicios />
      <Proyectos />
      <Contacto />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;