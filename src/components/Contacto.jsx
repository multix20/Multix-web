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
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Encabezado */}
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1 rounded-full mb-4">
            Hablemos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            ¿Trabajamos juntos?
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Cuéntame sobre tu proyecto y te respondo en menos de 24 horas con una propuesta sin compromiso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Lado izquierdo: info de contacto */}
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="font-semibold text-gray-800 mb-4">¿Por qué elegirnos?</h3>
              <ul className="space-y-3 text-gray-500 text-sm">
                <li className="flex items-center gap-3">
                  <span className="text-blue-500">✅</span> Entrega en 2 semanas
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-500">✅</span> Diseño personalizado para tu negocio
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-500">✅</span> Soporte técnico incluido
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-blue-500">✅</span> Precios accesibles y transparentes
                </li>
              </ul>
            </div>

            {/* WhatsApp */}
            <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
              <p className="text-gray-600 text-sm mb-4">¿Prefieres hablar directamente? Estoy disponible por WhatsApp.</p>
              <a
                href="https://wa.me/56951569704?text=Hola,%20quiero%20información%20sobre%20mi%20sitio%20web"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.522 5.851L.057 23.882l6.196-1.623C7.9 23.394 9.9 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.659-.523-5.168-1.432l-.371-.22-3.817 1.001.999-3.724-.242-.389C2.536 15.728 2 13.932 2 12 2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                Escribir por WhatsApp
              </a>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
            {enviado ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">¡Mensaje recibido!</h3>
                <p className="text-gray-500 mb-6">Te responderé en menos de 24 horas.</p>
                <button
                  className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition"
                  onClick={() => setEnviado(false)}
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="nombre">Nombre</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
                    placeholder="tucorreo@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="mensaje">Mensaje</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm resize-none"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow transition"
                >
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contacto;