import React, { useState } from "react";
import {
  MapPin,
  Calendar,
  Users,
  X,
  Download,
  ChevronRight,
  ChevronLeft as ChevronLeftIcon,
  Landmark,
  Sun,
  Mountain,
  Building,
  Heart,
  Scale,
  Lightbulb,
  HandHeart,
  Handshake,
  Map,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const imagenesGaleria = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    titulo: "Plaza Principal",
    descripcion:
      "Vista panorámica de la plaza principal de San Miguel, centro de reunión para los ciudadanos y visitantes.",
    categoria: "Lugares Emblemáticos",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    titulo: "Iglesia Histórica",
    descripcion:
      "La Parroquia de San Miguel Arcángel, construida en el siglo XVIII, es uno de los edificios más emblemáticos del municipio.",
    categoria: "Arquitectura",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    titulo: "Festival Cultural",
    descripcion:
      "El Festival Cultural de San Miguel reúne cada año a artistas locales y nacionales en una celebración de nuestra identidad.",
    categoria: "Eventos",
  },
  {
    id: 4,
    url: "https://demo-source.imgix.net/sneakers.jpg",
    titulo: "Artesanías Locales",
    descripcion:
      "Las artesanías de San Miguel son reconocidas por su calidad y belleza, representando la rica tradición cultural de nuestra región.",
    categoria: "Cultura",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1512813195386-6cf811ad3542?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    titulo: "Jardín Botánico",
    descripcion:
      "El Jardín Botánico Municipal alberga especies nativas y es un espacio de conservación y educación ambiental.",
    categoria: "Naturaleza",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    titulo: "Palacio Municipal",
    descripcion:
      "Sede del gobierno municipal, este edificio histórico combina arquitectura colonial con elementos modernos.",
    categoria: "Lugares Emblemáticos",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    titulo: "Sesión de Cabildo",
    descripcion:
      "El Cabildo Municipal en sesión, trabajando por el bienestar y desarrollo de San Miguel.",
    categoria: "Gobierno",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    titulo: "Parque Recreativo",
    descripcion:
      "Espacios verdes y recreativos para el disfrute de las familias y visitantes del municipio.",
    categoria: "Espacios Públicos",
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    titulo: "Evento Cultural",
    descripcion:
      "Presentación artística durante la Semana Cultural de San Miguel, celebrando nuestras tradiciones.",
    categoria: "Eventos",
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    titulo: "Obras Públicas",
    descripcion:
      "Inauguración de obras públicas que mejoran la infraestructura y servicios para los ciudadanos.",
    categoria: "Desarrollo",
  },
  {
    id: 11,
    url: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    titulo: "Programas Sociales",
    descripcion:
      "Entrega de apoyos a través de programas sociales que benefician a los grupos más vulnerables.",
    categoria: "Desarrollo Social",
  },
  {
    id: 12,
    url: "https://images.unsplash.com/photo-1519074069444-1ba4fff66d16?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    titulo: "Danza Tradicional",
    descripcion:
      "Presentación de danzas tradicionales que preservan nuestro patrimonio cultural inmaterial.",
    categoria: "Cultura",
  },
];

const eventosHistoricos = [
  {
    año: "1542",
    titulo: "Fundación",
    descripcion:
      "Fundación oficial del pueblo de San Miguel por colonizadores españoles, estableciendo el primer asentamiento en la región.",
  },
  {
    año: "1650",
    titulo: "Construcción de la Parroquia",
    descripcion:
      "Inicio de la construcción de la Parroquia de San Miguel Arcángel, que se convertiría en el centro religioso y cultural de la comunidad.",
  },
  {
    año: "1810",
    titulo: "Participación en la Independencia",
    descripcion:
      "San Miguel fue escenario de importantes acontecimientos durante la lucha por la Independencia de México.",
  },
  {
    año: "1857",
    titulo: "Elevación a Villa",
    descripcion:
      "El pueblo de San Miguel es elevado a la categoría de Villa por su crecimiento e importancia regional.",
  },
  {
    año: "1910",
    titulo: "Revolución Mexicana",
    descripcion:
      "Participación activa de los habitantes de San Miguel en los movimientos revolucionarios que transformaron el país.",
  },
  {
    año: "1950",
    titulo: "Modernización",
    descripcion:
      "Inicio de importantes obras de infraestructura que modernizaron el municipio, incluyendo carreteras y servicios públicos.",
  },
  {
    año: "1985",
    titulo: "Declaración de Zona de Monumentos",
    descripcion:
      "El centro histórico de San Miguel es declarado Zona de Monumentos Históricos por su valor arquitectónico y cultural.",
  },
  {
    año: "2010",
    titulo: "Reconocimiento Cultural",
    descripcion:
      "San Miguel recibe reconocimiento nacional por sus esfuerzos en la preservación de tradiciones y patrimonio cultural.",
  },
];

const valoresMunicipales = [
  {
    id: 1,
    titulo: "Transparencia",
    descripcion:
      "Compromiso con la rendición de cuentas y el acceso a la información pública para todos los ciudadanos.",
    icono: <Scale className="h-12 w-12 text-[#BC955B]" />,
  },
  {
    id: 2,
    titulo: "Honestidad",
    descripcion:
      "Actuamos con integridad y rectitud en todas nuestras acciones y decisiones como servidores públicos.",
    icono: <Heart className="h-12 w-12 text-[#BC955B]" />,
  },
  {
    id: 3,
    titulo: "Innovación",
    descripcion:
      "Buscamos constantemente nuevas soluciones y mejoras en los servicios que ofrecemos a la ciudadanía.",
    icono: <Lightbulb className="h-12 w-12 text-[#BC955B]" />,
  },
  {
    id: 4,
    titulo: "Servicio",
    descripcion:
      "Vocación por atender las necesidades de los ciudadanos con calidad, calidez y eficiencia.",
    icono: <HandHeart className="h-12 w-12 text-[#BC955B]" />,
  },
  {
    id: 5,
    titulo: "Compromiso",
    descripcion:
      "Dedicación total al bienestar de la comunidad y al desarrollo sostenible del municipio.",
    icono: <Handshake className="h-12 w-12 text-[#BC955B]" />,
  },
];

function MunicipioGaleria() {
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [indiceImagen, setIndiceImagen] = useState(0);

  // Obtener categorías únicas para el filtro
  const categorias = [...new Set(imagenesGaleria.map((img) => img.categoria))];

  // Filtrar imágenes por categoría
  const imagenesFiltradas = categoriaSeleccionada
    ? imagenesGaleria.filter((img) => img.categoria === categoriaSeleccionada)
    : imagenesGaleria;

  const abrirModal = (imagen) => {
    setImagenSeleccionada(imagen);
    setIndiceImagen(imagenesFiltradas.findIndex((img) => img.id === imagen.id));
    setModalAbierto(true);
    document.body.style.overflow = "hidden";
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    document.body.style.overflow = "auto";
  };

  const navegarImagen = (direccion) => {
    if (!imagenSeleccionada) return;

    let nuevoIndice;
    if (direccion === "anterior") {
      nuevoIndice =
        indiceImagen > 0 ? indiceImagen - 1 : imagenesFiltradas.length - 1;
    } else {
      nuevoIndice =
        indiceImagen < imagenesFiltradas.length - 1 ? indiceImagen + 1 : 0;
    }

    setIndiceImagen(nuevoIndice);
    setImagenSeleccionada(imagenesFiltradas[nuevoIndice]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header con navegación de regreso */}
      <Header />

      {/* Hero Section */}
      <section
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1512813195386-6cf811ad3542?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80>')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestro Municipio
          </h1>
          <div className="w-24 h-1 bg-[#BC955B] mb-6"></div>
          <p className="text-xl text-white mb-8 max-w-2xl">
            Descubre la historia, cultura y belleza de San Miguel, un municipio
            con tradición y visión de futuro.
          </p>
        </div>
      </section>

      {/* Descripción General */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-[#691B32] mb-6">
                Descripción General del Municipio
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                San Miguel es un municipio ubicado en el corazón de México, con
                una extensión territorial de 567 km² y una población de
                aproximadamente 85,000 habitantes. Nuestra economía se basa
                principalmente en la agricultura, el turismo y la producción
                artesanal, actividades que han sostenido a nuestras familias por
                generaciones.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                El clima templado durante la mayor parte del año hace de San
                Miguel un destino ideal para visitantes, mientras que nuestras
                tradiciones culturales, festividades y gastronomía ofrecen una
                experiencia única que combina lo mejor de la historia mexicana
                con la calidez de nuestra gente.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Nuestro municipio se distingue por su arquitectura colonial, sus
                calles empedradas y sus plazas arboladas, creando un ambiente
                acogedor tanto para residentes como para turistas. La
                preservación de nuestro patrimonio histórico va de la mano con
                el desarrollo sostenible que impulsamos desde el gobierno
                municipal.
              </p>
            </div>
            <div className="md:w-1/3 bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#691B32] mb-4">
                Datos Destacados
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="h-6 w-6 mr-3 text-[#BC955B] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-gray-900">
                      Ubicación
                    </span>
                    <span className="text-gray-700">
                      Región central de México, a 180 km de la capital
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Users className="h-6 w-6 mr-3 text-[#BC955B] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-gray-900">
                      Población
                    </span>
                    <span className="text-gray-700">
                      85,000 habitantes (censo 2020)
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Landmark className="h-6 w-6 mr-3 text-[#BC955B] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-gray-900">
                      Fundación
                    </span>
                    <span className="text-gray-700">1542</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Mountain className="h-6 w-6 mr-3 text-[#BC955B] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-gray-900">
                      Extensión Territorial
                    </span>
                    <span className="text-gray-700">567 km²</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Sun className="h-6 w-6 mr-3 text-[#BC955B] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-gray-900">Clima</span>
                    <span className="text-gray-700">
                      Templado, con temperatura media anual de 18°C
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <Building className="h-6 w-6 mr-3 text-[#BC955B] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-gray-900">
                      Localidades
                    </span>
                    <span className="text-gray-700">
                      1 cabecera municipal y 42 comunidades rurales
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reseña Histórica */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#691B32] mb-2 text-center">
            Reseña Histórica
          </h2>
          <div className="w-24 h-1 bg-[#BC955B] mx-auto mb-8"></div>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-gray-700 leading-relaxed">
              La historia de San Miguel se remonta a tiempos prehispánicos,
              cuando grupos indígenas habitaban esta región rica en recursos
              naturales. Con la llegada de los españoles en el siglo XVI, se
              fundó oficialmente el pueblo de San Miguel en 1542, iniciando una
              nueva etapa en su desarrollo histórico y cultural.
            </p>
          </div>

          {/* Cronología */}
          <div className="relative">
            {/* Línea central */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#BC955B] hidden md:block"></div>

            <div className="space-y-12">
              {eventosHistoricos.map((evento, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="md:w-1/2 p-4 flex justify-center md:justify-end md:pr-12">
                    <div
                      className={`bg-white rounded-lg shadow-md p-6 max-w-md transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg ${
                        index % 2 === 0 ? "md:text-right" : ""
                      }`}
                    >
                      <div className="flex items-center mb-3 justify-start">
                        <Calendar className="h-5 w-5 text-[#BC955B] mr-2" />
                        <span className="text-[#BC955B] font-bold">
                          {evento.año}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-[#691B32] mb-2">
                        {evento.titulo}
                      </h3>
                      <p className="text-gray-700">{evento.descripcion}</p>
                    </div>
                  </div>

                  <div className="relative flex items-center justify-center my-4 md:my-0">
                    <div className="h-10 w-10 rounded-full bg-[#691B32] text-white flex items-center justify-center z-10">
                      {index + 1}
                    </div>
                  </div>

                  <div className="md:w-1/2 p-4 md:pl-12 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center bg-[#691B32] hover:bg-[#4d1425] text-white px-6 py-3 rounded-md font-medium transition-colors duration-200"
            >
              <Download className="mr-2 h-5 w-5" />
              Descargar Historia Completa (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* Valores Municipales */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#691B32] mb-2 text-center">
            Valores de la Presidencia Municipal
          </h2>
          <div className="w-24 h-1 bg-[#BC955B] mx-auto mb-8"></div>
          <p className="text-gray-700 max-w-3xl mx-auto text-center mb-12">
            Nuestra administración se rige por principios y valores
            fundamentales que guían cada acción y decisión que tomamos en
            beneficio de los ciudadanos de San Miguel.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {valoresMunicipales.map((valor) => (
              <div
                key={valor.id}
                className="bg-white rounded-lg shadow-md p-6 text-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg border-t-4 border-[#BC955B]"
              >
                <div className="flex justify-center mb-4">{valor.icono}</div>
                <h3 className="text-xl font-bold text-[#691B32] mb-3">
                  {valor.titulo}
                </h3>
                <p className="text-gray-700">{valor.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mapa Interactivo */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-[#691B32] mb-6">
                Ubicación y Puntos de Interés
              </h2>
              <p className="text-gray-700 mb-6">
                San Miguel se encuentra estratégicamente ubicado en la región
                central de México, con excelentes vías de comunicación que
                facilitan el acceso desde las principales ciudades del país.
              </p>
              <p className="text-gray-700 mb-6">
                Nuestro municipio cuenta con numerosos puntos de interés, desde
                edificios históricos y plazas emblemáticas, hasta áreas
                naturales y centros culturales que vale la pena visitar.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-[#691B32] mr-2"></div>
                  <span className="text-sm">Edificios Históricos</span>
                </div>
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-[#BC955B] mr-2"></div>
                  <span className="text-sm">Áreas Naturales</span>
                </div>
                <div className="flex items-center">
                  <div className="h-3 w-3 rounded-full bg-green-600 mr-2"></div>
                  <span className="text-sm">Servicios Públicos</span>
                </div>
              </div>
              <a
                href="#"
                className="inline-flex items-center bg-[#691B32] hover:bg-[#4d1425] text-white px-6 py-3 rounded-md font-medium transition-colors duration-200"
              >
                <Map className="mr-2 h-5 w-5" />
                Ver mapa interactivo completo
              </a>
            </div>
            <div className="md:w-1/2 bg-white p-2 rounded-lg shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59951.997083347946!2d-98.40356217925567!3d20.092294479794038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d055d656404d61%3A0x337451ab23113186!2sTulancingo%2C%20Hgo.!5e0!3m2!1ses!2smx!4v1741118508267!5m2!1ses!2smx"
                width="100%"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="text-center text-sm text-gray-500 mt-2">
                Mapa ilustrativo del municipio de San Miguel y sus principales
                puntos de interés
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galería de Imágenes */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#691B32] mb-2 text-center">
            Galería de Imágenes
          </h2>
          <div className="w-24 h-1 bg-[#BC955B] mx-auto mb-8"></div>
          <p className="text-gray-700 max-w-3xl mx-auto text-center mb-8">
            Explora la belleza y riqueza de San Miguel a través de nuestra
            galería fotográfica, que muestra los lugares emblemáticos, eventos
            culturales y la vida cotidiana de nuestro municipio.
          </p>

          {/* Filtro de categorías */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                categoriaSeleccionada === ""
                  ? "bg-[#691B32] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => setCategoriaSeleccionada("")}
            >
              Todas
            </button>
            {categorias.map((categoria, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  categoriaSeleccionada === categoria
                    ? "bg-[#691B32] text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => setCategoriaSeleccionada(categoria)}
              >
                {categoria}
              </button>
            ))}
          </div>

          {/* Grid de imágenes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {imagenesFiltradas.map((imagen) => (
              <div
                key={imagen.id}
                className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                onClick={() => abrirModal(imagen)}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={imagen.url}
                    alt={imagen.titulo}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {imagen.titulo}
                  </h3>
                  <p className="text-sm text-[#BC955B]">{imagen.categoria}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#691B32] mb-2 text-center">
            Testimonios
          </h2>
          <div className="w-24 h-1 bg-[#BC955B] mx-auto mb-8"></div>
          <p className="text-gray-700 max-w-3xl mx-auto text-center mb-12">
            Conoce las experiencias y opiniones de quienes han visitado o viven
            en nuestro municipio.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-[#BC955B] text-white flex items-center justify-center font-bold text-xl">
                  M
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-gray-900">María Rodríguez</h3>
                  <p className="text-sm text-gray-600">Visitante de CDMX</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "San Miguel es un lugar mágico que combina historia, cultura y
                calidez humana. Cada rincón tiene una historia que contar y sus
                habitantes te hacen sentir como en casa."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-[#BC955B] text-white flex items-center justify-center font-bold text-xl">
                  J
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-gray-900">Juan Méndez</h3>
                  <p className="text-sm text-gray-600">Residente local</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "Como habitante de San Miguel, estoy orgulloso de nuestras
                tradiciones y del trabajo que realiza el gobierno municipal para
                preservar nuestra identidad cultural mientras impulsamos el
                desarrollo."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-[#BC955B] text-white flex items-center justify-center font-bold text-xl">
                  L
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-gray-900">Laura Vázquez</h3>
                  <p className="text-sm text-gray-600">Empresaria local</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "El apoyo del municipio a los emprendedores locales ha sido
                fundamental para el crecimiento de mi negocio. San Miguel es un
                lugar que valora y promueve el talento y esfuerzo de su gente."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de Galería */}
      {modalAbierto && imagenSeleccionada && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 transition-opacity duration-300">
          <div
            className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-fadeIn relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={cerrarModal}
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-200 z-10"
            >
              <X className="h-6 w-6 text-[#691B32]" />
            </button>

            <div className="flex flex-col">
              <div className="relative h-[60vh]">
                <img
                  src={imagenSeleccionada.url}
                  alt={imagenSeleccionada.titulo}
                  className="w-full h-full object-contain"
                />

                {/* Botones de navegación */}
                <button
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => navegarImagen("anterior")}
                >
                  <ChevronLeftIcon className="h-6 w-6 text-[#691B32]" />
                </button>

                <button
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => navegarImagen("siguiente")}
                >
                  <ChevronRight className="h-6 w-6 text-[#691B32]" />
                </button>
              </div>

              <div className="p-6 border-t border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-[#691B32]">
                    {imagenSeleccionada.titulo}
                  </h3>
                  <span className="bg-[#BC955B] text-white px-3 py-1 rounded-full text-sm">
                    {imagenSeleccionada.categoria}
                  </span>
                </div>
                <p className="text-gray-700">
                  {imagenSeleccionada.descripcion}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MunicipioGaleria;
