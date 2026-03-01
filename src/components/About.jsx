import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">

        {/* Encabezado */}
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1 rounded-full mb-4">
            Quién está detrás
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Sobre mí</h2>
        </div>

        {/* Perfil */}
        <motion.div
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col md:flex-row items-center gap-8 mb-8"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <img
            src="/assets/image/perfil.JPG"
            alt="Juan Pablo Monsalve"
            className="w-36 h-36 rounded-full object-cover border-4 border-blue-100 shadow-md flex-shrink-0"
          />
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Juan Pablo Monsalve</h3>
            <p className="text-gray-500 leading-relaxed">
              Desarrollador web y administrador de sistemas Linux. Me especializo en crear sitios modernos,
              rápidos y a medida para negocios que quieren crecer en internet. Combino formación técnica
              con experiencia práctica para entregar resultados reales.
            </p>
          </div>
        </motion.div>

        {/* Educación y Stack en 2 columnas */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Educación */}
          <motion.div
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-2 rounded-xl mr-3">
                <span className="text-green-600 text-xl">🎓</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Formación</h3>
            </div>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">▸</span>
                Docente de Educación Básica
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">▸</span>
                Certificación Full Stack — Desafío Latam
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">▸</span>
                Especialización en Administración de Sistemas Linux
              </li>
            </ul>
          </motion.div>

          {/* Stack tecnológico */}
          <motion.div
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 p-2 rounded-xl mr-3">
                <span className="text-purple-600 text-xl">⚙️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Tecnologías</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'JavaScript', 'Node.js', 'Tailwind CSS', 'MySQL', 'Linux', 'GitHub', 'Firebase'].map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;