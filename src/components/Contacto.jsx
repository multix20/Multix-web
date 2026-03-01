import React, { useState } from 'react';

const Contacto = () => {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setForm({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-green-100 via-white to-blue-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Lado Izquierdo */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">¿Trabajamos juntos?</h2>
          <p className="text-gray-600 mb-6 text-lg">¡Me encantaría saber de ti!</p>
          <a
            href="https://wa.me/56951569704"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition mb-4"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.72 11.06a4.5 4.5 0 01-6.36 6.36l-2.12 2.12a1 1 0 01-1.41 0l-2.12-2.12a1 1 0 010-1.41l2.12-2.12a4.5 4.5 0 016.36-6.36z" /></svg>
            Hablar por WhatsApp
          </a>
          <div className="text-gray-500 text-sm">Respuesta rápida garantizada 🚀</div>
        </div>

        {/* Lado Derecho: Formulario */}
        <div className="md:w-1/2 bg-white rounded-2xl shadow-xl p-8">
          {enviado ? (
            <div className="text-center">
              <div className="text-green-500 text-4xl mb-2">¡Gracias!</div>
              <p className="text-gray-700">Tu mensaje ha sido enviado. Me pondré en contacto contigo pronto.</p>
              <button
                className="mt-6 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold transition"
                onClick={() => setEnviado(false)}
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-700 font-semibold mb-1" htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  placeholder="tucorreo@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-1" htmlFor="mensaje">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={form.mensaje}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                  placeholder="¿En qué te puedo ayudar?"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition"
              >
                Enviar mensaje
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contacto;