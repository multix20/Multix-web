import React from 'react';
import { Instagram, Linkedin, Github, Mail, ChevronUp } from 'lucide-react';

const Footer = () => {
  const navItems = [
    { href: '#servicios-section', label: 'Servicios' },
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#contacto', label: 'Contacto' },
  ];

  const socialLinks = [
    { href: 'https://github.com/Multix20', icon: <Github size={18} />, label: 'GitHub' },
    { href: 'https://linkedin.com/in/juan-pablo-monsalve', icon: <Linkedin size={18} />, label: 'LinkedIn' },
    { href: 'https://instagram.com/multix.web', icon: <Instagram size={18} />, label: 'Instagram' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-6">

        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">

          {/* Marca */}
          <div>
            <h3 className="text-white font-bold text-lg mb-1">Multix-Web</h3>
            <p className="text-sm text-gray-500 max-w-xs">
              Convertimos tu idea en un sitio web profesional que vende.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-6 text-sm">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-white transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Redes */}
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Mail size={14} />
            <span>jp.devtravel@gmail.com</span>
            <span className="text-gray-600 mx-2">·</span>
            <span>Temuco, Chile</span>
          </div>
          <p className="text-gray-600">© {new Date().getFullYear()} Multix-Web · Todos los derechos reservados</p>
        </div>

      </div>

      {/* Botón subir */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed right-6 bottom-24 bg-gray-800 hover:bg-blue-600 text-white p-2.5 rounded-full shadow-lg transition-all duration-300"
        aria-label="Volver arriba"
      >
        <ChevronUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;