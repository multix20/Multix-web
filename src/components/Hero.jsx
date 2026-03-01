import React, { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const options = { root: null, rootMargin: '0px', threshold: 0.1 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && videoRef.current) {
          const video = videoRef.current;
          const source = document.createElement('source');
          source.src = '/assets/videos/maruno.mp4';
          source.type = 'video/mp4';

          while (video.firstChild) video.removeChild(video.firstChild);
          video.appendChild(source);
          video.load();

          video.addEventListener('loadeddata', () => {
            setIsVideoLoaded(true);
            video.play().catch(error => {
              console.warn("Error reproduciendo video automáticamente:", error);
            });
          });

          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (videoRef.current) observer.observe(videoRef.current);

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* Overlay con gradiente para mayor profundidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 z-10"></div>

      {/* Poster fallback */}
      <div
        className={`absolute inset-0 bg-cover bg-center z-0 transition-opacity duration-700 ${isVideoLoaded ? 'opacity-0' : 'opacity-100'}`}
        style={{ backgroundImage: "url('/assets/images/hero-poster.jpg')" }}
      ></div>

      {/* Video */}
      <video
        ref={videoRef}
        className={`absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-700 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        poster="/assets/images/hero-poster.jpg"
        aria-hidden="true"
      >
        <p>Tu navegador no soporta video en HTML5.</p>
      </video>

      {/* Contenido */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6 max-w-4xl mx-auto">

        {/* Badge superior */}
        <span className="mb-4 inline-block bg-blue-600/80 text-white text-sm font-medium px-4 py-1 rounded-full tracking-wide">
          Desarrollo Web Profesional
        </span>

        {/* Título principal */}
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Convertimos tu idea en un{' '}
          <span className="text-blue-400">sitio web que vende</span>
        </h1>

        {/* Subtítulo persuasivo */}
        <p className="mt-5 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
          Diseñamos y desarrollamos sitios web rápidos, modernos y a medida.
          Tu presencia online, lista en tiempo récord.
        </p>

        {/* Indicadores de confianza */}
        <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-gray-300">
          <span>✅ Entrega en 2 semanas</span>
          <span>✅ Diseño personalizado</span>
          <span>✅ Soporte incluido</span>
        </div>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="#contacto"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition transform hover:scale-105 active:scale-95 shadow-lg"
          >
            Quiero mi sitio web
          </a>
          <a
            href="#proyectos"
            className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-full border border-white/30 transition transform hover:scale-105 active:scale-95 backdrop-blur-sm"
          >
            Ver proyectos
          </a>
        </div>
      </div>

      {/* Flecha scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

    </section>
  );
};

export default Hero;