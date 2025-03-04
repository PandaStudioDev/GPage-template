import React from "react";
import {
  Search,
  Menu,
  ChevronRight,
  FileText,
  Building,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Calendar,
  CreditCard,
  FileSignature,
  UserCheck,
  Home,
  Users,
  Briefcase,
  LandPlot,
  Image,
} from "lucide-react";

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="bg-[#691B32] text-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Building className="h-8 w-8" />
            <span className="font-bold text-xl">Municipio de San Miguel</span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <nav>
              <ul className="flex space-x-6">
                <li className="hover:text-[#BC955B] transition-colors duration-200 font-medium">
                  <a href="#" className="flex items-center">
                    <Home className="h-4 w-4 mr-1" />
                    Inicio
                  </a>
                </li>
                <li className="hover:text-[#BC955B] transition-colors duration-200 font-medium">
                  <a href="#" className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    Gobierno Municipal
                  </a>
                </li>
                <li className="hover:text-[#BC955B] transition-colors duration-200 font-medium">
                  <a href="#" className="flex items-center">
                    <Briefcase className="h-4 w-4 mr-1" />
                    Trámites y Servicios
                  </a>
                </li>
                <li className="hover:text-[#BC955B] transition-colors duration-200 font-medium">
                  <a href="#" className="flex items-center">
                    <LandPlot className="h-4 w-4 mr-1" />
                    Turismo y Municipio
                  </a>
                </li>
              </ul>
            </nav>
            <button className="p-2 rounded-full hover:bg-[#BC955B] transition-colors duration-200">
              <Search className="h-5 w-5" />
            </button>
          </div>

          <button className="md:hidden p-2 rounded-full hover:bg-[#BC955B] transition-colors duration-200">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Bienvenidos al Portal Oficial de San Miguel
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
            Trabajando juntos por un municipio próspero, seguro y con mejor
            calidad de vida para todos.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#BC955B] hover:bg-[#a17a3f] text-white px-6 py-3 rounded-md font-medium transition-colors duration-200 flex items-center">
              Trámites en Línea
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#691B32] text-white px-6 py-3 rounded-md font-medium transition-colors duration-200">
              Más Información
            </button>
          </div>
        </div>
      </section>

      {/* Noticias y Anuncios */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-[#691B32]">
              Noticias y Anuncios Oficiales
            </h2>
            <a
              href="#"
              className="text-[#BC955B] hover:underline flex items-center"
            >
              Ver todas
              <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Noticia 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <img
                src="https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Inauguración de parque"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>15 de Octubre, 2025</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Inauguración del nuevo parque municipal
                </h3>
                <p className="text-gray-600 mb-4">
                  El Presidente Municipal inauguró el nuevo parque recreativo
                  con instalaciones modernas para todas las familias.
                </p>
                <a
                  href="#"
                  className="text-[#691B32] font-medium hover:text-[#BC955B] transition-colors duration-200 flex items-center"
                >
                  Leer más
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Noticia 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <img
                src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Sesión de cabildo"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>10 de Octubre, 2025</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Aprobación del presupuesto municipal 2026
                </h3>
                <p className="text-gray-600 mb-4">
                  El Cabildo Municipal aprobó por unanimidad el presupuesto para
                  obras públicas del próximo año.
                </p>
                <a
                  href="#"
                  className="text-[#691B32] font-medium hover:text-[#BC955B] transition-colors duration-200 flex items-center"
                >
                  Leer más
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Noticia 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Evento cultural"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>5 de Octubre, 2025</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Festival Cultural de San Miguel 2025
                </h3>
                <p className="text-gray-600 mb-4">
                  Gran éxito en el Festival Cultural con la participación de
                  artistas locales y nacionales.
                </p>
                <a
                  href="#"
                  className="text-[#691B32] font-medium hover:text-[#BC955B] transition-colors duration-200 flex items-center"
                >
                  Leer más
                  <ChevronRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trámites y Servicios */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#691B32] mb-8 text-center">
            Trámites y Servicios Destacados
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Trámite 1 */}
            <div className="bg-gray-50 rounded-lg p-6 text-center transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-[#691B32] hover:text-white group">
              <div className="bg-[#BC955B] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-white group-hover:text-[#691B32]">
                <CreditCard className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold mb-2">Pago de Predial</h3>
              <p className="text-gray-600 group-hover:text-gray-200 mb-4">
                Realiza tu pago de impuesto predial en línea.
              </p>
              <a
                href="#"
                className="text-[#691B32] group-hover:text-[#BC955B] font-medium flex items-center justify-center"
              >
                Iniciar trámite
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>

            {/* Trámite 2 */}
            <div className="bg-gray-50 rounded-lg p-6 text-center transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-[#691B32] hover:text-white group">
              <div className="bg-[#BC955B] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-white group-hover:text-[#691B32]">
                <FileText className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold mb-2">Actas de Nacimiento</h3>
              <p className="text-gray-600 group-hover:text-gray-200 mb-4">
                Solicita y descarga actas de nacimiento.
              </p>
              <a
                href="#"
                className="text-[#691B32] group-hover:text-[#BC955B] font-medium flex items-center justify-center"
              >
                Iniciar trámite
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>

            {/* Trámite 3 */}
            <div className="bg-gray-50 rounded-lg p-6 text-center transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-[#691B32] hover:text-white group">
              <div className="bg-[#BC955B] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-white group-hover:text-[#691B32]">
                <FileSignature className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold mb-2">Licencias Comerciales</h3>
              <p className="text-gray-600 group-hover:text-gray-200 mb-4">
                Solicita o renueva licencias para negocios.
              </p>
              <a
                href="#"
                className="text-[#691B32] group-hover:text-[#BC955B] font-medium flex items-center justify-center"
              >
                Iniciar trámite
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>

            {/* Trámite 4 */}
            <div className="bg-gray-50 rounded-lg p-6 text-center transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-[#691B32] hover:text-white group">
              <div className="bg-[#BC955B] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-white group-hover:text-[#691B32]">
                <UserCheck className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold mb-2">Citas en Línea</h3>
              <p className="text-gray-600 group-hover:text-gray-200 mb-4">
                Agenda citas para trámites presenciales.
              </p>
              <a
                href="#"
                className="text-[#691B32] group-hover:text-[#BC955B] font-medium flex items-center justify-center"
              >
                Iniciar trámite
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="#"
              className="inline-block bg-[#691B32] hover:bg-[#4d1425] text-white px-6 py-3 rounded-md font-medium transition-colors duration-200"
            >
              Ver todos los trámites y servicios
            </a>
          </div>
        </div>
      </section>

      {/* Información del Municipio */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-[#691B32] mb-4">
                Conoce San Miguel
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                San Miguel es un municipio con una rica historia que se remonta
                a la época prehispánica. Fundado oficialmente en 1542, nuestro
                municipio ha sido testigo de importantes acontecimientos
                históricos y ha preservado un valioso patrimonio cultural y
                arquitectónico.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Hoy en día, San Miguel combina su herencia histórica con un
                desarrollo moderno, ofreciendo a sus habitantes y visitantes una
                experiencia única donde tradición y progreso conviven en
                armonía.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-[#BC955B] hover:bg-[#a17a3f] text-white px-6 py-3 rounded-md font-medium transition-colors duration-200 flex items-center"
                >
                  Historia y Cultura
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="bg-transparent border-2 border-[#691B32] text-[#691B32] hover:bg-[#691B32] hover:text-white px-6 py-3 rounded-md font-medium transition-colors duration-200 flex items-center"
                >
                  <Image className="mr-2 h-5 w-5" />
                  Galería de Fotos
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1512813195386-6cf811ad3542?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Plaza principal"
                  className="rounded-lg h-48 w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Iglesia histórica"
                  className="rounded-lg h-48 w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Festividades"
                  className="rounded-lg h-48 w-full object-cover"
                />
                <img
                  src="https://demo-source.imgix.net/sneakers.jpg"
                  alt="Artesanías"
                  className="rounded-lg h-48 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                    Plaza Principal #123, Centro Histórico, San Miguel, CP
                    12345, México
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
                href="#"
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
    </div>
  );
}

export default HomePage;
