import React, { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  
  useEffect(() => {
    // Creamos un observador de intersección para cargar el video solo cuando sea visible
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && videoRef.current) {
          // Si el elemento es visible en el viewport, cargamos el video
          const video = videoRef.current;
          
          // Establecemos la fuente del video dinámicamente para retrasar la carga
          const source = document.createElement('source');
          source.src = '/assets/videos/maruno.mp4';
          source.type = 'video/mp4';
          
          // Limpiamos cualquier source previo (por precaución)
          while (video.firstChild) {
            video.removeChild(video.firstChild);
          }
          
          // Añadimos el source al video
          video.appendChild(source);
          
          // Cargamos y reproducimos el video
          video.load();
          
          // Detectamos cuando el video ha cargado lo suficiente para reproducirse
          video.addEventListener('loadeddata', () => {
            setIsVideoLoaded(true);
            video.play().catch(error => {
              console.warn("Error reproduciendo video automáticamente:", error);
            });
          });
          
          // Detenemos la observación
          observer.unobserve(entry.target);
        }
      });
    }, options);
    
    // Comenzamos a observar el contenedor de video
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
    
    // Limpieza al desmontar
    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Overlay oscuro para mejorar la legibilidad del texto */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
      
      {/* Poster image como fallback mientras el video carga */}
      <div 
        className={`absolute inset-0 bg-cover bg-center z-0 transition-opacity duration-700 ${isVideoLoaded ? 'opacity-0' : 'opacity-100'}`}
        style={{ backgroundImage: "url('/assets/images/hero-poster.jpg')" }}
      ></div>
      
      {/* Video con optimizaciones */}
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
        {/* El source se añadirá dinámicamente con JavaScript */}
        <p>Tu navegador no soporta video en HTML5.</p>
      </video>

      {/* Contenido del Hero */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
          Multix-Web
        </h1>
        <p className="text-xl md:text-2xl mt-4 text-white drop-shadow-md">
          Desarrollo web escalable y moderno
        </p>
        <a
          href="#productos"
          className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition transform hover:scale-105 active:scale-95"
        >
          Ver productos
        </a>
      </div>
    </section>
  );
};

export default Hero;