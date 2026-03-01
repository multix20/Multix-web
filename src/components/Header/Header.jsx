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
          {[
            { id: 'about', label: 'Sobre mí' },
            { id: 'servicios', label: 'Servicios' },
            { id: 'proyectos', label: 'Proyectos' },
            { id: 'contacto', label: 'Contacto' }
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id === 'servicios' ? 'servicios-section' : item.id}`}
              className={`transition-colors duration-300 ${
                scrolled
                  ? 'text-gray-800 hover:text-blue-600'
                  : 'text-white hover:text-yellow-300'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Botón hamburguesa actualizado para coincidir con el estilo del botón del logo */}
        <button
          className="md:hidden z-50 focus:outline-none w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menú móvil"
        >
          <span className="text-white font-bold text-lg">M</span>
        </button>
      </div>

      {/* Menú móvil mejorado */}
      {mobileMenuOpen && (
        <>
          {/* Overlay con blur */}
          <div
            className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40 animate-fadeIn"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Contenedor del menú */}
          <div className="md:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-white via-blue-50/80 to-indigo-100/60 backdrop-blur-lg border-l border-white/20 shadow-2xl z-50 transform animate-slideInRight">
            {/* Header del menú */}
            <div className="flex items-center justify-between p-6 border-b border-white/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Menú</h3>
                  <p className="text-sm text-gray-600">Navegación</p>
                </div>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full bg-white/50 hover:bg-white/80 text-gray-700 hover:text-red-500 transition-all duration-300 hover:rotate-90 hover:scale-110 group"
                aria-label="Cerrar menú"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Lista de navegación sin descripción */}
            <nav className="px-6 py-8">
              <ul className="flex flex-col gap-2">
                {[
                  {
                    id: 'about',
                    label: 'Sobre mí',
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    )
                  },
                  {
                    id: 'servicios',
                    label: 'Servicios',
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    )
                  },
                  {
                    id: 'proyectos',
                    label: 'Proyectos',
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                        />
                      </svg>
                    )
                  },
                  {
                    id: 'contacto',
                    label: 'Contacto',
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    )
                  }
                ].map((item, index) => (
                  <li key={item.id} className="group">
                    <a
                      href={`#${item.id === 'servicios' ? 'servicios-section' : item.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/30 hover:bg-white/60 backdrop-blur-sm border border-white/20 hover:border-blue-200 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group"
                      style={{
                        animationDelay: `${index * 100}ms`
                      }}
                    >
                      <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        {item.icon}
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                          {item.label}
                        </h4>
                      </div>

                      <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Footer del menú */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/20 bg-gradient-to-r from-blue-50/50 to-indigo-50/50">
              <div className="flex items-center justify-center gap-4">
                <div className="flex gap-2">
                  {[
                    { id: 'linkedin', href: 'https://linkedin.com', icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5v5.5h-3v-10h3v1.5c.69-1.04 1.94-1.5 3-1.5 2.21 0 4 1.79 4 4v6z" />
                      </svg>
                    ) },
                    { id: 'github', href: 'https://github.com', icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .5c-6.63 0-12 5.37-12 12 0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.4 1.23-3.25-.12-.3-.53-1.52.12-3.17 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.14 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.85 1.23 1.93 1.23 3.25 0 4.64-2.8 5.67-5.47 5.97.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.28 0 .32.22.69.83.58 4.76-1.59 8.2-6.09 8.2-11.39 0-6.63-5.37-12-12-12z" />
                      </svg>
                    ) },
                    { id: 'twitter', href: 'https://twitter.com', icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.56c-.89.39-1.84.65-2.84.77 1.02-.61 1.8-1.57 2.17-2.72-.95.56-2.01.97-3.13 1.19-.9-.96-2.18-1.56-3.6-1.56-2.72 0-4.92 2.2-4.92 4.92 0 .39.04.77.12 1.14-4.09-.2-7.72-2.16-10.15-5.14-.42.72-.66 1.56-.66 2.45 0 1.69.86 3.18 2.17 4.05-.8-.03-1.55-.25-2.21-.61v.06c0 2.36 1.68 4.33 3.91 4.78-.41.11-.84.17-1.29.17-.31 0-.62-.03-.92-.08.63 1.96 2.44 3.39 4.6 3.43-1.68 1.32-3.8 2.1-6.1 2.1-.4 0-.79-.02-1.18-.07 2.18 1.4 4.77 2.22 7.55 2.22 9.05 0 14-7.5 14-14 0-.21 0-.42-.01-.63.96-.69 1.8-1.56 2.46-2.54z" />
                      </svg>
                    ) }
                  ].map((social) => (
                    <a
                      key={social.id}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/50 hover:bg-white/80 flex items-center justify-center text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                      aria-label={`Ir a ${social.id}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
              <p className="text-center text-sm text-gray-600 mt-3">© 2024 - Conectemos</p>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;

{/* Estilos CSS adicionales */}
<style jsx>{`
  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .animate-slideInRight {
    animation: slideInRight 0.3s ease-out forwards;
  }

  .animate-fadeIn {
    animation: fadeIn 0.2s ease-out forwards;
  }
`}</style>
