import React, { useState, useEffect } from 'react';
import { Instagram, Linkedin, Github, Mail, ChevronUp } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Animation effect
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubscribe = () => {
    if (email && email.includes('@')) {
      setIsSubscribed(true);
      setShowPopup(true);
      setEmail('');
      
      // Hide popup after 3 seconds
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative overflow-hidden pt-16 pb-10 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo y descripción */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Multix-Web</h3>
            <p className="text-gray-600 max-w-md mx-auto">
              Transformando ideas en experiencias digitales extraordinarias
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="flex flex-wrap justify-center gap-8 text-gray-600">
            <a href="#about" className="hover:text-blue-600 transition-colors">Sobre mí</a>
            <a href="#servicios-section" className="hover:text-blue-600 transition-colors">Servicios</a>
            <a href="#proyectos" className="hover:text-blue-600 transition-colors">Proyectos</a>
            <a href="#contacto" className="hover:text-blue-600 transition-colors">Contacto</a>
          </div>

          {/* Redes sociales */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/Multix-UG"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 p-3 rounded-full text-gray-600 hover:text-blue-600 hover:bg-gray-200 transition-all duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/juan-pablo-monsalve"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 p-3 rounded-full text-gray-600 hover:text-blue-600 hover:bg-gray-200 transition-all duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://instagram.com/multix.web"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 p-3 rounded-full text-gray-600 hover:text-blue-600 hover:bg-gray-200 transition-all duration-300"
            >
              <Instagram size={20} />
            </a>
          </div>

          {/* Línea decorativa con gradiente */}
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>

          {/* Información de contacto */}
          <div className="text-center text-gray-500 text-sm">
            <p>Santiago, Chile</p>
            <p className="flex items-center justify-center gap-2">
              <Mail size={16} />
              multix.web@gmail.com
            </p>
          </div>

          {/* Botón para subir */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="absolute right-8 bottom-8 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-blue-600 hover:text-purple-600"
          >
            <ChevronUp size={24} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;