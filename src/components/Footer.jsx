import React, { useState, useEffect } from 'react';
import { Instagram, Linkedin, Github, Mail, Send, ChevronUp, Heart } from 'lucide-react';

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
    <footer className="relative overflow-hidden pt-16 pb-10">
      {/* Background with curved shapes and gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-violet-600 opacity-90 z-0">
        {/* Curved shapes */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-white rounded-b-full transform translate-y-[-50%]"></div>
        <div className="absolute bottom-0 left-[10%] w-64 h-64 bg-blue-400 rounded-full opacity-20 blur-xl"></div>
        <div className="absolute top-[20%] right-[5%] w-40 h-40 bg-violet-400 rounded-full opacity-20 blur-lg"></div>
        <div className="absolute bottom-[10%] right-[20%] w-32 h-32 bg-indigo-300 rounded-full opacity-30 blur-xl"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Scroll to top button */}
        <div className="absolute right-8 top-0 transform -translate-y-1/2">
          <button 
            onClick={scrollToTop}
            className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-blue-600 hover:text-violet-600"
          >
            <ChevronUp size={24} />
          </button>
        </div>

        {/* Quote Section */}
        <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative inline-block">
            <div className="text-4xl text-white mb-2 font-bold italic">
              "La creatividad es la inteligencia divirtiéndose" 
              <span className="ml-2">✨ 🎨 💡</span>
            </div>
            <div className="text-blue-100 text-sm">— Albert Einstein</div>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className={`max-w-md mx-auto mb-12 bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center text-white mb-4">
            <h3 className="text-xl font-bold mb-2">Mantente Actualizado</h3>
            <p className="text-blue-100">Suscríbete para recibir novedades sobre mis últimos proyectos</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="flex-1 bg-white/20 rounded-xl flex items-center pl-3 overflow-hidden">
              <Mail className="text-blue-100 mr-2" size={18} />
              <input
                type="email"
                placeholder="Tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent text-white placeholder-blue-100 w-full py-3 px-1 focus:outline-none"
              />
            </div>
            <button 
              onClick={handleSubscribe}
              className="group relative px-6 py-3 overflow-hidden rounded-xl bg-gradient-to-r from-blue-400 to-violet-500 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-500 hover:to-violet-600"
            >
              <div className="absolute inset-0 w-full h-full transition-all duration-300 scale-0 group-hover:scale-100 group-hover:bg-white/10"></div>
              <div className="relative flex items-center justify-center">
                <span>Suscribirse</span>
                <Send size={16} className="ml-2" />
              </div>
            </button>
          </div>
        </div>

        {/* Footer Links & Social Media */}
        <div className={`flex flex-col md:flex-row justify-between items-center transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col mb-6 md:mb-0">
            <div className="text-white font-semibold text-xl mb-2">Multix</div>
            <div className="text-blue-100 text-sm">Desarrollador & Diseñador Creativo</div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6 md:mb-0">
            <a href="#" className="text-blue-100 hover:text-white transition-colors">Inicio</a>
            <a href="#" className="text-blue-100 hover:text-white transition-colors">Proyectos</a>
            <a href="#" className="text-blue-100 hover:text-white transition-colors">Sobre Mí</a>
            <a href="#" className="text-blue-100 hover:text-white transition-colors">Contacto</a>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all duration-300">
              <Instagram className="text-white" size={20} />
            </a>
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all duration-300">
              <Linkedin className="text-white" size={20} />
            </a>
            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all duration-300">
              <Github className="text-white" size={20} />
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className={`text-center mt-10 text-blue-100 text-sm transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div>© {new Date().getFullYear()} Multix . Todos los derechos reservados.</div>
          <div className="mt-2 flex items-center justify-center">
            Hecho con <Heart size={12} className="mx-1 text-pink-300" /> y creatividad
          </div>
        </div>
      </div>
      
      {/* Abstract design elements */}
      <div className="absolute left-0 top-0 h-full w-24 bg-blue-400/10 skew-x-[-10deg] z-0"></div>
      <div className="absolute right-0 top-0 h-full w-24 bg-violet-400/10 skew-x-[10deg] z-0"></div>
      
      {/* Success Popup */}
      <div className={`fixed bottom-8 right-8 bg-white rounded-xl shadow-xl p-4 transform transition-all duration-300 ${showPopup ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-10 scale-95 opacity-0'} z-50`}>
        <div className="flex items-center text-green-600">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
          </svg>
          <span>¡Suscripción exitosa!</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;