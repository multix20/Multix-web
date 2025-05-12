import React from 'react';
import { Code, ShoppingCart, Brush, Search, Settings } from 'lucide-react';

const servicios = [
  {
    icon: <Code size={40} className="text-blue-500" />, 
    titulo: "Desarrollo Web Personalizado",
    descripcion: "Creamos sitios modernos, rápidos y escalables con tecnologías actuales."
  },
  {
    icon: <ShoppingCart size={40} className="text-blue-500" />,
    titulo: "Tiendas Online",
    descripcion: "Lanzamos tu tienda online optimizada para ventas y rendimiento."
  },
  {
    icon: <Brush size={40} className="text-blue-500" />,
    titulo: "Diseño UI/UX",
    descripcion: "Diseño visual limpio y enfocado en la experiencia del usuario."
  },
  {
    icon: <Search size={40} className="text-blue-500" />,
    titulo: "Optimización SEO",
    descripcion: "Posicionamos tu sitio para que tus clientes te encuentren en Google."
  },
  {
    icon: <Settings size={40} className="text-blue-500" />,
    titulo: "Soporte y Mantenimiento",
    descripcion: "Acompañamiento técnico continuo para que todo funcione siempre."
  }
];

const Servicios = () => {
  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Nuestros Servicios</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {servicios.map((servicio, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="mb-4 flex justify-center">{servicio.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{servicio.titulo}</h3>
              <p className="text-gray-600">{servicio.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;