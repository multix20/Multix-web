import React, { useEffect, useState } from 'react';
import Logo from './Logo';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo scrolled={scrolled} />
        <nav className="space-x-6">
          <a
            href="#servicios"
            className={`transition-colors duration-300 ${
              scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-yellow-300'
            }`}
          >
            Servicios
          </a>
          <a
            href="#proyectos"
            className={`transition-colors duration-300 ${
              scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-yellow-300'
            }`}
          >
            Proyectos
          </a>
          <a
            href="#contacto"
            className={`transition-colors duration-300 ${
              scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-yellow-300'
            }`}
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
