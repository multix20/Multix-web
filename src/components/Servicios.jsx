import React from 'react';
import { FaCode, FaShoppingCart, FaPaintBrush, FaSearch, FaCog } from 'react-icons/fa';

const servicios = [
  {
    icon: <FaCode size={36} className="text-blue-600" />,
    titulo: "Desarrollo Web Personalizado",
    descripcion: "Tu sitio diseñado desde cero, adaptado a tu negocio y optimizado para cargar rápido.",
    beneficio: "🚀 Listo en 2 semanas"
  },
  {
    icon: <FaShoppingCart size={36} className="text-blue-600" />,
    titulo: "Tiendas Online",
    descripcion: "Vende tus productos las 24 horas con una tienda rápida, segura y fácil de administrar.",
    beneficio: "💰 Más ventas, menos esfuerzo"
  },
  {
    icon: <FaPaintBrush size={36} className="text-blue-600" />,
    titulo: "Diseño UI/UX",
    descripcion: "Un diseño atractivo y fácil de usar que convierte visitantes en clientes.",
    beneficio: "✨ Primera impresión que impacta"
  },
  {
    icon: <FaSearch size={36} className="text-blue-600" />,
    titulo: "Optimización SEO",
    descripcion: "Aparece en los primeros resultados de Google y atrae clientes sin pagar publicidad.",
    beneficio: "📈 Más visibilidad orgánica"
  },
  {
    icon: <FaCog size={36} className="text-blue-600" />,
    titulo: "Soporte y Mantenimiento",
    descripcion: "Nos encargamos de que tu sitio funcione siempre. Tú enfócate en tu negocio.",
    beneficio: "🛡️ Tranquilidad garantizada"
  }
];

const Services = () => {
  return (
    <section id="servicios-section" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">

        {/* Encabezado */}
        <span className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1 rounded-full mb-4">
          ¿Qué podemos hacer por ti?
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Servicios diseñados para hacer crecer tu negocio
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto mb-12">
          Cada proyecto es único. Trabajamos contigo para entender tu negocio y entregar resultados reales.
        </p>

        {/* Tarjetas */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md border border-gray-100 transition duration-300 text-left group"
            >
              <div className="mb-4 inline-flex items-center justify-center w-14 h-14 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition">
                {servicio.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{servicio.titulo}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{servicio.descripcion}</p>
              <span className="text-sm font-medium text-blue-600">{servicio.beneficio}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14">
          <p className="text-gray-500 mb-4">¿No sabes por dónde empezar? Te asesoramos sin compromiso.</p>
          <a
            href="#contacto"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition transform hover:scale-105 active:scale-95 shadow"
          >
            Hablar con un experto
          </a>
        </div>

      </div>
    </section>
  );
};

export default Services;