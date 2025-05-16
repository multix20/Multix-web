import React from 'react';
import Header from "./components/Header/Header";
import Hero from './components/Hero';
import About from './components/About'; // ✅ importamos About.jsx
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
      <About />         {/* ✅ Aquí se renderiza la sección "Sobre mí" */}
      <Servicios />
      <Proyectos />
      <Contacto />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;
