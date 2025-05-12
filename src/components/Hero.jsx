// Componente Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/videos/mar.mp4" type="video/mp4" />
        Tu navegador no soporta video en HTML5.
      </video>
      <div className="absolute inset-0 bg-white bg-opacity-30 z-10" />
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">Multix-Web</h1>
        <p className="text-xl md:text-2xl mt-4 text-gray-800">
          Desarrollo web escalable y moderno
        </p>
        <a
          href="#productos"
          className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition"
        >
          Ver productos
        </a>
      </div>
    </section>
  );
};

export default Hero;