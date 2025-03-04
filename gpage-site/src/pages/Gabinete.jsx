import React, { useState } from "react";
import { X, Mail, Facebook, Twitter, Instagram } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const miembrosGabinete = [
  {
    id: 1,
    nombre: "Dr. Carlos Mendoza Fuentes",
    cargo: "Presidente Municipal",
    imagen:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    biografia:
      "Licenciado en Derecho con Maestría en Administración Pública y Doctorado en Políticas Públicas. Cuenta con más de 15 años de experiencia en el servicio público. Ha impulsado importantes proyectos de desarrollo urbano y programas sociales que han beneficiado a miles de familias en el municipio.",
    email: "presidente@sanmiguel.gob.mx",
    redesSociales: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 2,
    nombre: "Lic. María Elena Vázquez Ortiz",
    cargo: "Secretaria General",
    imagen:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    biografia:
      "Licenciada en Ciencias Políticas con Maestría en Derecho Constitucional. Ha desempeñado diversos cargos en la administración pública durante los últimos 12 años. Es responsable de coordinar las actividades de las diferentes áreas del gobierno municipal y dar seguimiento a los acuerdos del Cabildo.",
    email: "secretaria.general@sanmiguel.gob.mx",
    redesSociales: {
      facebook: "#",
      twitter: "#",
    },
  },
  {
    id: 3,
    nombre: "Mtro. Javier Ramírez Soto",
    cargo: "Tesorero Municipal",
    imagen:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    biografia:
      "Contador Público con Maestría en Finanzas Públicas. Especialista en administración de recursos públicos con enfoque en transparencia y rendición de cuentas. Ha implementado sistemas innovadores para la recaudación y distribución eficiente de los recursos municipales.",
    email: "tesoreria@sanmiguel.gob.mx",
    redesSociales: {
      facebook: "#",
      twitter: "#",
    },
  },
  {
    id: 4,
    nombre: "Ing. Roberto Guzmán Herrera",
    cargo: "Director de Obras Públicas",
    imagen:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    biografia:
      "Ingeniero Civil con especialidad en Desarrollo Urbano Sustentable. Cuenta con amplia experiencia en la planeación y ejecución de proyectos de infraestructura. Ha dirigido importantes obras que han transformado el paisaje urbano del municipio, siempre con un enfoque de sustentabilidad y accesibilidad.",
    email: "obras.publicas@sanmiguel.gob.mx",
    redesSociales: {
      facebook: "#",
      instagram: "#",
    },
  },
  {
    id: 5,
    nombre: "Dra. Gabriela Moreno Luna",
    cargo: "Directora de Desarrollo Social",
    imagen:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    biografia:
      "Socióloga con Doctorado en Políticas Sociales. Especialista en programas de combate a la pobreza y desarrollo comunitario. Ha implementado programas innovadores para atender a grupos vulnerables y promover la participación ciudadana en la solución de problemas sociales.",
    email: "desarrollo.social@sanmiguel.gob.mx",
    redesSociales: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 6,
    nombre: "Lic. Fernando Torres Medina",
    cargo: "Director de Seguridad Pública",
    imagen:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    biografia:
      "Licenciado en Derecho con especialidad en Seguridad Pública y Criminología. Ex militar con amplia experiencia en temas de seguridad. Ha implementado estrategias efectivas para reducir los índices delictivos y mejorar la percepción de seguridad en el municipio.",
    email: "seguridad.publica@sanmiguel.gob.mx",
    redesSociales: {
      facebook: "#",
    },
  },
  {
    id: 7,
    nombre: "Mtra. Patricia Jiménez Robles",
    cargo: "Directora de Educación y Cultura",
    imagen:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    biografia:
      "Licenciada en Pedagogía con Maestría en Gestión Cultural. Ha dedicado su carrera a la promoción de la educación y la cultura como pilares del desarrollo social. Ha impulsado programas educativos innovadores y eventos culturales que han enriquecido la vida comunitaria del municipio.",
    email: "educacion.cultura@sanmiguel.gob.mx",
    redesSociales: {
      facebook: "#",
      instagram: "#",
    },
  },
  {
    id: 8,
    nombre: "Dr. Alejandro Navarro Campos",
    cargo: "Director de Salud Municipal",
    imagen:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    biografia:
      "Médico Cirujano con especialidad en Salud Pública. Ha liderado importantes iniciativas para mejorar los servicios de salud en el municipio. Durante su gestión se han implementado programas preventivos y se ha ampliado la cobertura de servicios médicos a comunidades rurales.",
    email: "salud@sanmiguel.gob.mx",
    redesSociales: {
      facebook: "#",
      twitter: "#",
    },
  },
];

function GabineteMunicipal() {
  const [miembroSeleccionado, setMiembroSeleccionado] = useState(null);
  const [modalAbierto, setModalAbierto] = useState(false);

  const abrirModal = (miembro) => {
    setMiembroSeleccionado(miembro);
    setModalAbierto(true);
    document.body.style.overflow = "hidden";
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header con navegación de regreso */}
      <Header />

      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-[#691B32] mb-2 text-center">
          Gabinete Municipal de San Miguel
        </h1>
        <div className="w-24 h-1 bg-[#BC955B] mx-auto mb-6"></div>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto text-center mb-12">
          Nuestro equipo de gobierno está conformado por profesionales
          comprometidos con el desarrollo y bienestar de San Miguel. Cada
          integrante aporta su experiencia y conocimiento para implementar
          políticas públicas que mejoren la calidad de vida de todos los
          ciudadanos.
        </p>

        {/* Grid de miembros del gabinete */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {miembrosGabinete.map((miembro) => (
            <div
              key={miembro.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
              onClick={() => abrirModal(miembro)}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={miembro.imagen}
                  alt={miembro.nombre}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6 border-t-4 border-[#BC955B]">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {miembro.nombre}
                </h3>
                <p className="text-[#691B32] font-medium mb-4">
                  {miembro.cargo}
                </p>
                <button className="text-[#BC955B] hover:text-[#691B32] font-medium transition-colors duration-200">
                  Ver perfil completo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de detalle */}
      {modalAbierto && miembroSeleccionado && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 transition-opacity duration-300">
          <div
            className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <button
                onClick={cerrarModal}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-200 z-10"
              >
                <X className="h-6 w-6 text-[#691B32]" />
              </button>

              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5">
                  <div className="h-full">
                    <img
                      src={miembroSeleccionado.imagen}
                      alt={miembroSeleccionado.nombre}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-3/5 p-8">
                  <h2 className="text-3xl font-bold text-[#691B32] mb-2">
                    {miembroSeleccionado.nombre}
                  </h2>
                  <p className="text-xl text-[#BC955B] font-medium mb-6">
                    {miembroSeleccionado.cargo}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Biografía
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {miembroSeleccionado.biografia}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Contacto
                    </h3>
                    <div className="flex items-center text-gray-700 mb-2">
                      <Mail className="h-5 w-5 mr-2 text-[#BC955B]" />
                      <a
                        href={`mailto:${miembroSeleccionado.email}`}
                        className="hover:text-[#691B32] transition-colors duration-200"
                      >
                        {miembroSeleccionado.email}
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Redes Sociales
                    </h3>
                    <div className="flex space-x-4">
                      {miembroSeleccionado.redesSociales.facebook && (
                        <a
                          href={miembroSeleccionado.redesSociales.facebook}
                          className="bg-[#691B32] text-white p-2 rounded-full hover:bg-[#BC955B] transition-colors duration-200"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Facebook className="h-5 w-5" />
                        </a>
                      )}
                      {miembroSeleccionado.redesSociales.twitter && (
                        <a
                          href={miembroSeleccionado.redesSociales.twitter}
                          className="bg-[#691B32] text-white p-2 rounded-full hover:bg-[#BC955B] transition-colors duration-200"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Twitter className="h-5 w-5" />
                        </a>
                      )}
                      {miembroSeleccionado.redesSociales.instagram && (
                        <a
                          href={miembroSeleccionado.redesSociales.instagram}
                          className="bg-[#691B32] text-white p-2 rounded-full hover:bg-[#BC955B] transition-colors duration-200"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Instagram className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
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

export default GabineteMunicipal;
