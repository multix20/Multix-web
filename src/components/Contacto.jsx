// Componente Contacto.jsx
import React from 'react';

const Contacto = () => {
  return (
    <section id="contacto" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">¿Trabajamos juntos?</h2>
        <p className="text-gray-600 mb-8">Escríbeme por WhatsApp o deja tus datos para contactarte pronto.</p>
        <a
          href="https://wa.me/56912345678"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition"
        >
          Hablar por WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Contacto;