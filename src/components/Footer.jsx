// Componente Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t py-6 text-center text-gray-500 text-sm">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Multix-Web. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;