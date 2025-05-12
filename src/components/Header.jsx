// Componente Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Multix-Web</h1>
        <nav className="space-x-6">
          <a href="#servicios" className="text-gray-700 hover:text-blue-600 transition">Servicios</a>
          <a href="#proyectos" className="text-gray-700 hover:text-blue-600 transition">Proyectos</a>
          <a href="#contacto" className="text-gray-700 hover:text-blue-600 transition">Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;