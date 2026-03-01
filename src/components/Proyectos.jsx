import React, { useState } from 'react';

const proyectos = [
  {
    id: 1,
    titulo: "Araucanía Viajes",
    descripcion: "Sitio web para servicio de transporte premium en la región de La Araucanía, con información de rutas y contacto.",
    imagen: "assets/image/viaje.gif",
    enlace: "https://araucaniaviajes.cl/",
    tech: ["HTML", "CSS", "JavaScript"],
    resultado: "Presencia online profesional"
  },
  {
    id: 2,
    titulo: "Quiz Linux Essential",
    descripcion: "Aplicación interactiva de preguntas y respuestas sobre Linux, ideal para preparar certificaciones y reforzar conocimientos.",
    imagen: "assets/image/linux.gif",
    enlace: "https://glowing-souffle-7ef999.netlify.app/",
    tech: ["React", "JavaScript"],
    resultado: "Preparación práctica para certificaciones Linux"
  },
  {
    id: 3,
    titulo: "Ecotonal Studio",
    descripcion: "Sitio de grabación y producción musical con reproductor de audio integrado y galería de trabajos.",
    imagen: "assets/image/eco.gif",
    enlace: "https://ecotonalstudio.netlify.app/",
    tech: ["React", "Styled Components", "Howler.js"],
    resultado: "Catálogo expandible para nuevos artistas"
  },
  {
    id: 4,
    titulo: "MotoWild",
    descripcion: "Landing page para tours en moto por el sur de Chile con galería de imágenes y sistema de reservas.",
    imagen: "assets/image/mtw.gif",
    enlace: "https://motocamp.netlify.app/",
    tech: ["React", "Tailwind CSS", "Firebase"],
    resultado: "Reservas online desde el primer día"
  },
  {
    id: 5,
    titulo: "EduLearn",
    descripcion: "Plataforma de fichas educativas interactivas para estudiantes, con contenido organizado por materias.",
    imagen: "assets/image/learn.gif",
    enlace: "https://fichaseducativas.netlify.app/",
    tech: ["React", "Tailwind CSS"],
    resultado: "Aprendizaje más accesible y dinámico"
  },
  {
    id: 6,
    titulo: "Artefierro",
    descripcion: "Sitio web para emprendimiento de arte en fierro, con galería de productos y contacto directo.",
    imagen: "assets/image/fierro.gif",
    enlace: "https://taupe-narwhal-628cd4.netlify.app/",
    tech: ["React", "Tailwind CSS"],
    resultado: "Vitrina digital para sus creaciones"
  },
  {
    id: 7,
    titulo: "Quiz de Programación",
    descripcion: "Aplicación interactiva de preguntas y respuestas sobre programación, ideal para practicar conocimientos técnicos.",
    imagen: "assets/image/test.gif",
    enlace: "https://preeminent-sundae-1adf4b.netlify.app/",
    tech: ["React", "JavaScript"],
    resultado: "Aprendizaje técnico de forma divertida"
  },
  {
    id: 8,
    titulo: "VII Congreso RSE 2025",
    descripcion: "Sitio oficial del VII Congreso de Responsabilidad Social Empresarial 2025, con programa, ponentes e inscripciones.",
    imagen: "assets/image/cong.gif",
    enlace: "https://subtle-queijadas-4363a9.netlify.app/",
    tech: ["React", "Tailwind CSS"],
    resultado: "Evento con presencia digital profesional"
  }
];

const Proyectos = () => {
  const [visible, setVisible] = useState(6);

  return (
    <section id="proyectos" className="py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* Encabezado */}
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1 rounded-full mb-4">
            Nuestro trabajo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Proyectos Recientes
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Cada proyecto es una solución real para un negocio real. Aquí algunos de los sitios que hemos desarrollado.
          </p>
        </div>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectos.slice(0, visible).map((proyecto) => (
            <div
              key={proyecto.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition duration-300 flex flex-col"
            >
              {proyecto.imagen ? (
                <img
                  src={proyecto.imagen}
                  alt={proyecto.titulo}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                  <span className="text-blue-300 text-4xl font-bold">{proyecto.titulo.charAt(0)}</span>
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{proyecto.titulo}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{proyecto.descripcion}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {proyecto.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="inline-block bg-blue-50 text-blue-600 rounded-full px-3 py-1 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-green-600 text-xs font-medium mb-4">✅ {proyecto.resultado}</p>

                <a
                  href={proyecto.enlace}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-5 rounded-full transition"
                >
                  Ver sitio →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Botón ver más */}
        {visible < proyectos.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisible(proyectos.length)}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-8 rounded-full transition"
            >
              Ver todos los proyectos ({proyectos.length})
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Proyectos;