import React from "react";
import {
  Building,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#691B32] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <Building className="h-6 w-6 mr-2" />
              Gobierno Municipal de San Miguel
            </h3>
            <p className="mb-4 text-gray-300">
              Trabajando por un mejor municipio para todos.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-[#BC955B] transition-colors duration-200"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#BC955B] transition-colors duration-200"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#BC955B] transition-colors duration-200"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-white hover:text-[#BC955B] transition-colors duration-200"
              >
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#BC955B] transition-colors duration-200"
                >
                  Directorio Municipal
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#BC955B] transition-colors duration-200"
                >
                  Transparencia
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#BC955B] transition-colors duration-200"
                >
                  Licitaciones
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#BC955B] transition-colors duration-200"
                >
                  Bolsa de Trabajo
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#BC955B] transition-colors duration-200"
                >
                  Eventos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-[#BC955B]" />
                <span>
                  Plaza Principal #123, Centro Histórico, San Miguel, CP 12345,
                  México
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-[#BC955B]" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-[#BC955B]" />
                <span>contacto@sanmiguel.gob.mx</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Horario de Atención</h3>
            <p className="mb-2 text-gray-300">Lunes a Viernes</p>
            <p className="mb-4 font-medium">9:00 AM - 4:00 PM</p>
            <p className="mb-2 text-gray-300">
              Sábados (solo trámites urgentes)
            </p>
            <p className="mb-4 font-medium">9:00 AM - 1:00 PM</p>
            <a
              href="https://maps.app.goo.gl/M5meG2Bf1DY1xvvH6"
              target="_blank"
              rel="noreferrer"
              className="bg-[#BC955B] hover:bg-[#a17a3f] text-white px-4 py-2 rounded-md font-medium transition-colors duration-200 inline-block"
            >
              Ver ubicación en mapa
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            © 2025 Gobierno Municipal de San Miguel. Todos los derechos
            reservados.
          </p>
          <div className="flex space-x-4 text-sm">
            <a
              href="#"
              className="text-gray-300 hover:text-[#BC955B] transition-colors duration-200"
            >
              Aviso de Privacidad
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-[#BC955B] transition-colors duration-200"
            >
              Términos de Uso
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-[#BC955B] transition-colors duration-200"
            >
              Accesibilidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
