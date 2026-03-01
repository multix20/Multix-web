import React, { useEffect, useState } from 'react';
import Logo from './Logo';

const navItems = [
  { id: 'servicios-section', label: 'Servicios' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'contacto', label: 'Contacto' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Logo scrolled={scrolled} />

        {/* Menú escritorio */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm font-medium transition-colors duration-300 ${
                scrolled ? 'text-gray-600 hover:text-blue-600' : 'text-white/90 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
            className={`text-sm font-semibold py-2 px-5 rounded-full transition duration-300 ${
              scrolled
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-white/20 text-white border border-white/30 hover:bg-white/30'
            }`}
          >
            Quiero mi sitio
          </a>
        </nav>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menú móvil"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-gray-800' : 'bg-white'}`}></span>
            <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-gray-800' : 'bg-white'}`}></span>
            <span className={`block w-4 h-0.5 transition-all duration-300 ${scrolled ? 'bg-gray-800' : 'bg-white'}`}></span>
          </div>
        </button>
      </div>

      {/* Menú móvil */}
      {mobileMenuOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 bg-black/40 z-40"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="md:hidden fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-50 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <span className="font-semibold text-gray-800">Multix-Web</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition"
                aria-label="Cerrar menú"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Links */}
            <nav className="flex flex-col px-6 py-8 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 font-medium py-3 border-b border-gray-50 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <div className="px-6 mt-auto pb-8">
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition"
              >
                Quiero mi sitio
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;