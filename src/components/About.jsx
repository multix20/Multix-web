import React from 'react';
import {
  Github, Database, FileType2, Code2,
  Server, Terminal, Cog
} from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    } 
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2
    }
  }
};

const About = () => {
  const skills = [
    { icon: <span className="text-blue-600 text-2xl">⚛️</span>, name: 'React' },
    { icon: <FileType2 size={28} className="text-white" />, name: 'Next.js', bg: 'bg-gray-800' },
    { icon: <Terminal size={28} className="text-yellow-600" />, name: 'Linux', bg: 'bg-yellow-100' },
    { icon: <span className="text-indigo-600 text-2xl">📊</span>, name: 'Tableau', bg: 'bg-indigo-100' },
    { icon: <Code2 size={28} className="text-yellow-600" />, name: 'JavaScript', bg: 'bg-yellow-100' },
    { icon: <Server size={28} className="text-green-600" />, name: 'Node.js', bg: 'bg-green-100' },
    { icon: <Github size={28} className="text-white" />, name: 'GitHub', bg: 'bg-gray-900' },
    { icon: <Database size={28} className="text-white" />, name: 'MySQL', bg: 'bg-blue-500' },
    { icon: <span className="text-blue-500 text-2xl">🎨</span>, name: 'CSS', bg: 'bg-blue-100' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-gray-800"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Sobre mí
        </motion.h2>

        <div className="flex flex-col space-y-16">
          {/* Quién Soy */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row items-center md:items-start gap-8"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
          >
            <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64">
              <motion.img 
                src="/assets/image/perfil.JPG" 
                alt="Juan Pablo Monsalve" 
                className="rounded-full object-cover w-full h-full border-4 border-blue-200 shadow-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Quién Soy</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Soy Juan Pablo Monsalve Suazo, un apasionado desarrollador web y administrador de sistemas Linux.
                Me dedico a crear soluciones web modernas y eficientes, combinando mi experiencia en desarrollo
                con mi amor por el software libre.
              </p>
            </div>
          </motion.div>

          {/* Educación */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="bg-green-100 p-3 rounded-full mr-4">
                <span className="text-green-600 text-2xl">🎓</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">Educación</h3>
            </div>
            <ul className="space-y-4 text-gray-700 pl-6 text-lg">
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                transition={{ delay: 0.2 }}
              >
                Docente de educación básica
              </motion.li>
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                transition={{ delay: 0.3 }}
              >
                Certificación en Desarrollo Web Full Stack. Desafio Latam
              </motion.li>
              <motion.li
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
                transition={{ delay: 0.4 }}
              >
                Especialización en Administración de Sistemas Linux
              </motion.li>
            </ul>
          </motion.div>

          {/* Skills */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <span className="text-purple-600 text-2xl">💻</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">Skills</h3>
            </div>

            <div className="flex flex-wrap gap-6 justify-center">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="flex flex-col items-center hover:scale-110 transition-transform duration-300"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: index * 0.1,
                        duration: 0.5
                      }
                    }
                  }}
                  whileHover="hover"
                >
                  <div className={`rounded-full w-14 h-14 flex items-center justify-center shadow-md ${skill.bg || 'bg-gray-50'}`}> 
                    {skill.icon}
                  </div>
                  <span className="text-sm mt-2 font-medium text-gray-700">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
