import React, { useEffect, useState } from 'react';
import Logo from './Logo';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

        {/* Menú escritorio */}
        <nav className="hidden md:flex space-x-6">
          {['servicios', 'proyectos', 'contacto'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`transition-colors duration-300 ${
                scrolled
                  ? 'text-gray-800 hover:text-blue-600'
                  : 'text-white hover:text-yellow-300'
              }`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
        </nav>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden z-50 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menú móvil"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke={scrolled ? '#1f2937' : '#ffffff'}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Menú móvil */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40 pt-20 px-6">
          <ul className="flex flex-col gap-6">
            {['servicios', 'proyectos', 'contacto'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-medium text-gray-800 hover:text-blue-600"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
