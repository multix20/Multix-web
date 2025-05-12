import React from 'react';

const proyectos = [
  {
    titulo: "MotoWild",
    descripcion: "Landing page para tours en moto por el sur de Chile.",
    imagen: "https://via.placeholder.com/400x250?text=MotoWild",
    enlace: "https://gentle-sprite-d4815a.netlify.app/"
  },
  {
    titulo: "SoftSolution S.A.",
    descripcion: "Brochure digital para software de gestión empresarial.",
    imagen: "https://via.placeholder.com/400x250?text=SoftSolution",
    enlace: "https://softsolution-demo.netlify.app"
  },
  {
    titulo: "Ecotonal Studio",
    descripcion: "Sitio de grabación y producción musical profesional.",
    imagen: "https://via.placeholder.com/400x250?text=EcotonalStudio",
    enlace: "https://ecotonal.netlify.app"
  }
];

const Proyectos = () => {
  return (
    <section id="proyectos" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">Proyectos Recientes</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {proyectos.map((proyecto, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-xl transition">
              <img src={proyecto.imagen} alt={proyecto.titulo} className="rounded mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{proyecto.titulo}</h3>
              <p className="text-gray-600 mb-4">{proyecto.descripcion}</p>
              <a
                href={proyecto.enlace}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Ver proyecto
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;