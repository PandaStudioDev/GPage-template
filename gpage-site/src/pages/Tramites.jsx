import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  Search,
  FileText,
  CreditCard,
  FileSignature,
  UserCheck,
  X,
  ChevronDown,
  ChevronUp,
  Filter,
  Download,
  Calendar,
  MapPin,
  Phone,
  Clock,
  DollarSign,
  Info,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const tramites = [
  {
    id: 1,
    tipo: "Trámite",
    clave: "PRED-001",
    nombre: "Pago de Impuesto Predial",
    descripcion:
      "Pago anual o bimestral del impuesto predial correspondiente a bienes inmuebles ubicados en el municipio.",
    secretaria: "Tesorería Municipal",
    area: "Departamento de Ingresos",
    requisitos: [
      "Identificación oficial vigente",
      "Comprobante de domicilio reciente",
      "Número de cuenta predial o clave catastral",
      "Último recibo de pago (opcional)",
    ],
    tiempoRespuesta: "Inmediato",
    costo: "Variable según el valor catastral del inmueble",
    metodoPago: [
      "Efectivo",
      "Tarjeta de crédito/débito",
      "Transferencia bancaria",
    ],
    ubicacion: "Palacio Municipal, Planta Baja, Ventanilla 3-5",
    contacto: "predial@sanmiguel.gob.mx | (123) 456-7890 ext. 123",
    horario: "Lunes a Viernes de 9:00 a 15:00 hrs",
  },
  {
    id: 2,
    tipo: "Trámite",
    clave: "LIC-002",
    nombre: "Licencia de Funcionamiento Comercial",
    descripcion:
      "Permiso municipal para la apertura y operación de establecimientos comerciales dentro del municipio.",
    secretaria: "Dirección de Desarrollo Económico",
    area: "Departamento de Licencias Comerciales",
    requisitos: [
      "Solicitud de licencia debidamente llenada",
      "Identificación oficial del propietario o representante legal",
      "Comprobante de domicilio del establecimiento",
      "RFC del solicitante o empresa",
      "Acta constitutiva (personas morales)",
      "Dictamen de uso de suelo compatible",
      "Dictamen de Protección Civil",
    ],
    tiempoRespuesta: "10 días hábiles",
    costo: "De $500 a $5,000 MXN según el giro y tamaño del establecimiento",
    metodoPago: ["Efectivo", "Tarjeta de crédito/débito"],
    ubicacion: "Centro de Atención Empresarial, Av. Principal #234",
    contacto: "licencias@sanmiguel.gob.mx | (123) 456-7890 ext. 234",
    horario: "Lunes a Viernes de 9:00 a 15:00 hrs",
    formatos: "Formato_Solicitud_Licencia.pdf",
  },
  {
    id: 3,
    tipo: "Servicio",
    clave: "ACT-003",
    nombre: "Expedición de Acta de Nacimiento",
    descripcion:
      "Emisión de copia certificada del acta de nacimiento registrada en el municipio.",
    secretaria: "Secretaría del Ayuntamiento",
    area: "Registro Civil",
    requisitos: [
      "CURP o datos de la persona (nombre completo, fecha de nacimiento)",
      "Identificación oficial del solicitante",
      "Pago de derechos correspondientes",
    ],
    tiempoRespuesta: "Inmediato",
    costo: "$150 MXN por cada copia certificada",
    metodoPago: ["Efectivo", "Tarjeta de crédito/débito"],
    ubicacion: "Oficina del Registro Civil, Palacio Municipal, Planta Baja",
    contacto: "registro.civil@sanmiguel.gob.mx | (123) 456-7890 ext. 345",
    horario: "Lunes a Viernes de 9:00 a 15:00 hrs",
  },
  {
    id: 4,
    tipo: "Trámite",
    clave: "CONST-004",
    nombre: "Permiso de Construcción",
    descripcion:
      "Autorización municipal para realizar obras de construcción, ampliación, modificación o demolición de inmuebles.",
    secretaria: "Dirección de Desarrollo Urbano",
    area: "Departamento de Licencias de Construcción",
    requisitos: [
      "Solicitud de permiso debidamente llenada",
      "Identificación oficial del propietario",
      "Documento que acredite la propiedad",
      "Planos arquitectónicos firmados por un DRO",
      "Dictamen de uso de suelo",
      "Factibilidad de servicios de agua y drenaje",
      "Memoria de cálculo estructural (para construcciones mayores a 60m²)",
      "Pago de derechos correspondientes",
    ],
    tiempoRespuesta: "15 días hábiles",
    costo:
      "Variable según los metros cuadrados de construcción (desde $1,000 MXN)",
    metodoPago: ["Efectivo", "Tarjeta de crédito/débito"],
    ubicacion: "Dirección de Desarrollo Urbano, Calle Reforma #456",
    contacto: "desarrollo.urbano@sanmiguel.gob.mx | (123) 456-7890 ext. 456",
    horario: "Lunes a Viernes de 9:00 a 14:00 hrs",
    formatos: "Formato_Solicitud_Construccion.pdf",
  },
  {
    id: 5,
    tipo: "Servicio",
    clave: "AGUA-005",
    nombre: "Pago de Servicio de Agua Potable",
    descripcion:
      "Pago mensual o anual por el servicio de agua potable y alcantarillado.",
    secretaria: "Organismo Operador de Agua Potable",
    area: "Departamento de Recaudación",
    requisitos: [
      "Número de contrato o recibo anterior",
      "Identificación oficial del titular",
    ],
    tiempoRespuesta: "Inmediato",
    costo: "Variable según el consumo y tipo de servicio",
    metodoPago: [
      "Efectivo",
      "Tarjeta de crédito/débito",
      "Transferencia bancaria",
    ],
    ubicacion: "Oficinas del Organismo de Agua Potable, Av. del Agua #789",
    contacto: "pagos.agua@sanmiguel.gob.mx | (123) 456-7890 ext. 567",
    horario: "Lunes a Viernes de 8:00 a 16:00 hrs, Sábados de 9:00 a 13:00 hrs",
  },
  {
    id: 6,
    tipo: "Trámite",
    clave: "MAT-006",
    nombre: "Solicitud de Matrimonio Civil",
    descripcion:
      "Trámite para la celebración de matrimonio civil ante el Registro Civil municipal.",
    secretaria: "Secretaría del Ayuntamiento",
    area: "Registro Civil",
    requisitos: [
      "Solicitud de matrimonio debidamente llenada",
      "Identificación oficial de ambos contrayentes",
      "Actas de nacimiento de ambos contrayentes (no mayor a 3 meses de expedición)",
      "Certificado médico prenupcial (no mayor a 15 días)",
      "Constancia de pláticas prenupciales",
      "Cuatro testigos con identificación oficial",
      "Pago de derechos correspondientes",
    ],
    tiempoRespuesta: "5 días hábiles para agendar fecha",
    costo: "$1,200 MXN en oficina, $2,500 MXN a domicilio",
    metodoPago: ["Efectivo", "Tarjeta de crédito/débito"],
    ubicacion: "Oficina del Registro Civil, Palacio Municipal, Planta Baja",
    contacto: "matrimonios@sanmiguel.gob.mx | (123) 456-7890 ext. 345",
    horario: "Lunes a Viernes de 9:00 a 15:00 hrs",
    formatos: "Formato_Solicitud_Matrimonio.pdf",
  },
  {
    id: 7,
    tipo: "Servicio",
    clave: "PROT-007",
    nombre: "Inspección de Protección Civil",
    descripcion:
      "Revisión de inmuebles para verificar el cumplimiento de medidas de seguridad y protección civil.",
    secretaria: "Dirección de Protección Civil",
    area: "Departamento de Inspección",
    requisitos: [
      "Solicitud de inspección",
      "Identificación oficial del propietario o representante legal",
      "Comprobante de domicilio del inmueble",
      "Pago de derechos correspondientes",
    ],
    tiempoRespuesta: "7 días hábiles",
    costo: "De $500 a $2,000 MXN según el tamaño y tipo de inmueble",
    metodoPago: ["Efectivo", "Tarjeta de crédito/débito"],
    ubicacion: "Dirección de Protección Civil, Calle Seguridad #101",
    contacto: "proteccion.civil@sanmiguel.gob.mx | (123) 456-7890 ext. 678",
    horario: "Lunes a Viernes de 9:00 a 17:00 hrs",
    formatos: "Formato_Solicitud_Inspeccion.pdf",
  },
  {
    id: 8,
    tipo: "Trámite",
    clave: "CATA-008",
    nombre: "Actualización de Datos Catastrales",
    descripcion:
      "Modificación de información catastral por cambio de propietario, fusión, subdivisión o rectificación de medidas.",
    secretaria: "Dirección de Catastro Municipal",
    area: "Departamento de Actualización Catastral",
    requisitos: [
      "Solicitud de actualización catastral",
      "Identificación oficial del propietario",
      "Documento que acredite la propiedad",
      "Plano catastral actualizado",
      "Boleta predial al corriente",
      "Pago de derechos correspondientes",
    ],
    tiempoRespuesta: "10 días hábiles",
    costo: "$800 MXN",
    metodoPago: ["Efectivo", "Tarjeta de crédito/débito"],
    ubicacion: "Dirección de Catastro, Av. Principal #234, Segundo Piso",
    contacto: "catastro@sanmiguel.gob.mx | (123) 456-7890 ext. 789",
    horario: "Lunes a Viernes de 9:00 a 15:00 hrs",
    formatos: "Formato_Actualizacion_Catastral.pdf",
  },
  {
    id: 9,
    tipo: "Servicio",
    clave: "RECL-009",
    nombre: "Recolección de Residuos Especiales",
    descripcion:
      "Servicio de recolección de residuos voluminosos, escombros o residuos especiales no contemplados en la recolección regular.",
    secretaria: "Dirección de Servicios Públicos",
    area: "Departamento de Limpia",
    requisitos: [
      "Solicitud de servicio",
      "Identificación oficial del solicitante",
      "Comprobante de domicilio",
      "Descripción detallada de los residuos a recolectar",
      "Pago de derechos correspondientes",
    ],
    tiempoRespuesta: "3 días hábiles para programar la recolección",
    costo: "Variable según volumen y tipo de residuos (desde $300 MXN)",
    metodoPago: ["Efectivo"],
    ubicacion: "Dirección de Servicios Públicos, Calle Limpieza #505",
    contacto: "servicios.publicos@sanmiguel.gob.mx | (123) 456-7890 ext. 890",
    horario: "Lunes a Viernes de 8:00 a 16:00 hrs",
  },
  {
    id: 10,
    tipo: "Trámite",
    clave: "EVEN-010",
    nombre: "Permiso para Eventos Públicos",
    descripcion:
      "Autorización municipal para la realización de eventos públicos en espacios abiertos o cerrados dentro del municipio.",
    secretaria: "Secretaría del Ayuntamiento",
    area: "Departamento de Gobernación",
    requisitos: [
      "Solicitud de permiso debidamente llenada",
      "Identificación oficial del organizador",
      "Descripción detallada del evento (fecha, horario, lugar, aforo esperado)",
      "Carta responsiva firmada por el organizador",
      "Dictamen de Protección Civil (para eventos con aforo mayor a 100 personas)",
      "Contrato de seguridad privada (cuando aplique)",
      "Pago de derechos correspondientes",
    ],
    tiempoRespuesta: "7 días hábiles",
    costo: "De $1,000 a $5,000 MXN según tipo y magnitud del evento",
    metodoPago: ["Efectivo", "Tarjeta de crédito/débito"],
    ubicacion: "Secretaría del Ayuntamiento, Palacio Municipal, Primer Piso",
    contacto: "eventos@sanmiguel.gob.mx | (123) 456-7890 ext. 901",
    horario: "Lunes a Viernes de 9:00 a 15:00 hrs",
    formatos: "Formato_Solicitud_Eventos.pdf",
  },
  {
    id: 11,
    tipo: "Servicio",
    clave: "ALUM-011",
    nombre: "Reporte de Fallas en Alumbrado Público",
    descripcion:
      "Servicio para reportar y solicitar la reparación de luminarias públicas que presenten fallas.",
    secretaria: "Dirección de Servicios Públicos",
    area: "Departamento de Alumbrado Público",
    requisitos: [
      "Datos de ubicación exacta de la luminaria (calle, entre calles, colonia)",
      "Descripción de la falla",
      "Nombre y teléfono del reportante (opcional)",
    ],
    tiempoRespuesta: "3 a 5 días hábiles",
    costo: "Gratuito",
    metodoPago: ["No aplica"],
    ubicacion: "Dirección de Servicios Públicos, Calle Limpieza #505",
    contacto:
      "alumbrado@sanmiguel.gob.mx | (123) 456-7890 ext. 123 | WhatsApp: 123-456-7890",
    horario:
      "Reportes 24/7, Atención administrativa: Lunes a Viernes de 8:00 a 16:00 hrs",
  },
  {
    id: 12,
    tipo: "Trámite",
    clave: "CONST-012",
    nombre: "Constancia de Residencia",
    descripcion:
      "Documento oficial que acredita la residencia de una persona en el municipio por un tiempo determinado.",
    secretaria: "Secretaría del Ayuntamiento",
    area: "Departamento de Constancias y Certificaciones",
    requisitos: [
      "Solicitud de constancia debidamente llenada",
      "Identificación oficial vigente",
      "Comprobante de domicilio reciente (no mayor a 3 meses)",
      "Dos fotografías tamaño infantil",
      "Pago de derechos correspondientes",
    ],
    tiempoRespuesta: "2 días hábiles",
    costo: "$200 MXN",
    metodoPago: ["Efectivo", "Tarjeta de crédito/débito"],
    ubicacion: "Secretaría del Ayuntamiento, Palacio Municipal, Planta Baja",
    contacto: "constancias@sanmiguel.gob.mx | (123) 456-7890 ext. 234",
    horario: "Lunes a Viernes de 9:00 a 15:00 hrs",
  },
];

function TramitesServicios() {
  const [tramiteSeleccionado, setTramiteSeleccionado] = useState(null);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const [filtroTipo, setFiltroTipo] = useState("");
  const [filtroSecretaria, setFiltroSecretaria] = useState("");
  const [ordenamiento, setOrdenamiento] = useState({
    campo: "nombre",
    direccion: "asc",
  });

  // Obtener lista única de secretarías para el filtro
  const secretarias = [...new Set(tramites.map((t) => t.secretaria))];

  // Filtrar trámites según los criterios de búsqueda y filtros
  const tramitesFiltrados = tramites.filter((tramite) => {
    const coincideBusqueda =
      tramite.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      tramite.clave.toLowerCase().includes(busqueda.toLowerCase()) ||
      tramite.descripcion.toLowerCase().includes(busqueda.toLowerCase());

    const coincideTipo = filtroTipo === "" || tramite.tipo === filtroTipo;
    const coincideSecretaria =
      filtroSecretaria === "" || tramite.secretaria === filtroSecretaria;

    return coincideBusqueda && coincideTipo && coincideSecretaria;
  });

  // Ordenar trámites
  const tramitesOrdenados = [...tramitesFiltrados].sort((a, b) => {
    const valorA = a[ordenamiento.campo];
    const valorB = b[ordenamiento.campo];

    if (typeof valorA === "string" && typeof valorB === "string") {
      return ordenamiento.direccion === "asc"
        ? valorA.localeCompare(valorB)
        : valorB.localeCompare(valorA);
    }

    return 0;
  });

  const abrirModal = (tramite) => {
    setTramiteSeleccionado(tramite);
    setModalAbierto(true);
    document.body.style.overflow = "hidden";
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    document.body.style.overflow = "auto";
  };

  const cambiarOrdenamiento = (campo) => {
    if (ordenamiento.campo === campo) {
      setOrdenamiento({
        campo,
        direccion: ordenamiento.direccion === "asc" ? "desc" : "asc",
      });
    } else {
      setOrdenamiento({
        campo,
        direccion: "asc",
      });
    }
  };

  const limpiarFiltros = () => {
    setBusqueda("");
    setFiltroTipo("");
    setFiltroSecretaria("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header con navegación de regreso */}
      <Header />

      {/* Contenido principal */}
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-[#691B32] mb-2 text-center">
          Trámites y Servicios
        </h1>
        <div className="w-24 h-1 bg-[#BC955B] mx-auto mb-6"></div>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto text-center mb-8">
          Consulta la información sobre los trámites y servicios que ofrece el
          Gobierno Municipal de San Miguel. Encuentra requisitos, costos,
          tiempos de respuesta y toda la información necesaria para realizar tus
          gestiones.
        </p>

        {/* Sección de trámites destacados */}
        <div className="bg-gray-50 rounded-lg p-6 mb-12">
          <h2 className="text-2xl font-bold text-[#691B32] mb-6">
            Trámites Destacados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col items-center text-center"
              onClick={() => {
                const tramite = tramites.find((t) => t.id === 1);
                if (tramite) abrirModal(tramite);
              }}
            >
              <div className="bg-[#BC955B] text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <CreditCard className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Pago de Predial
              </h3>
              <p className="text-gray-600 mb-4">
                Realiza el pago de tu impuesto predial de manera rápida y
                sencilla.
              </p>
              <button className="text-[#691B32] font-medium hover:text-[#BC955B] transition-colors duration-200 mt-auto">
                Ver detalles
              </button>
            </div>

            <div
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col items-center text-center"
              onClick={() => {
                const tramite = tramites.find((t) => t.id === 3);
                if (tramite) abrirModal(tramite);
              }}
            >
              <div className="bg-[#BC955B] text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <FileText className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Actas de Nacimiento
              </h3>
              <p className="text-gray-600 mb-4">
                Solicita y obtén copias certificadas de actas de nacimiento.
              </p>
              <button className="text-[#691B32] font-medium hover:text-[#BC955B] transition-colors duration-200 mt-auto">
                Ver detalles
              </button>
            </div>

            <div
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col items-center text-center"
              onClick={() => {
                const tramite = tramites.find((t) => t.id === 2);
                if (tramite) abrirModal(tramite);
              }}
            >
              <div className="bg-[#BC955B] text-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <FileSignature className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Licencias Comerciales
              </h3>
              <p className="text-gray-600 mb-4">
                Obtén o renueva tu licencia de funcionamiento para tu negocio.
              </p>
              <button className="text-[#691B32] font-medium hover:text-[#BC955B] transition-colors duration-200 mt-auto">
                Ver detalles
              </button>
            </div>
          </div>
        </div>

        {/* Buscador y filtros */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar por nombre o clave de trámite..."
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#691B32] focus:border-transparent"
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                />
                <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-48">
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#691B32] focus:border-transparent"
                  value={filtroTipo}
                  onChange={(e) => setFiltroTipo(e.target.value)}
                >
                  <option value="">Todos los tipos</option>
                  <option value="Trámite">Trámites</option>
                  <option value="Servicio">Servicios</option>
                </select>
              </div>
              <div className="w-full sm:w-64">
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#691B32] focus:border-transparent"
                  value={filtroSecretaria}
                  onChange={(e) => setFiltroSecretaria(e.target.value)}
                >
                  <option value="">Todas las secretarías</option>
                  {secretarias.map((secretaria, index) => (
                    <option key={index} value={secretaria}>
                      {secretaria}
                    </option>
                  ))}
                </select>
              </div>
              <button
                className="px-4 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200 flex items-center justify-center"
                onClick={limpiarFiltros}
              >
                <Filter className="h-5 w-5 mr-2" />
                Limpiar
              </button>
            </div>
          </div>

          {/* Resultados */}
          <div className="text-sm text-gray-600 mb-2">
            Mostrando {tramitesOrdenados.length} de {tramites.length} trámites y
            servicios
          </div>
        </div>

        {/* Tabla de trámites */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#691B32] text-white">
                  <th
                    className="px-6 py-4 text-left cursor-pointer"
                    onClick={() => cambiarOrdenamiento("tipo")}
                  >
                    <div className="flex items-center">
                      <span>Tipo</span>
                      {ordenamiento.campo === "tipo" &&
                        (ordenamiento.direccion === "asc" ? (
                          <ChevronUp className="h-4 w-4 ml-1" />
                        ) : (
                          <ChevronDown className="h-4 w-4 ml-1" />
                        ))}
                    </div>
                  </th>
                  <th
                    className="px-6 py-4 text-left cursor-pointer"
                    onClick={() => cambiarOrdenamiento("clave")}
                  >
                    <div className="flex items-center">
                      <span>Clave</span>
                      {ordenamiento.campo === "clave" &&
                        (ordenamiento.direccion === "asc" ? (
                          <ChevronUp className="h-4 w-4 ml-1" />
                        ) : (
                          <ChevronDown className="h-4 w-4 ml-1" />
                        ))}
                    </div>
                  </th>
                  <th
                    className="px-6 py-4 text-left cursor-pointer"
                    onClick={() => cambiarOrdenamiento("nombre")}
                  >
                    <div className="flex items-center">
                      <span>Nombre</span>
                      {ordenamiento.campo === "nombre" &&
                        (ordenamiento.direccion === "asc" ? (
                          <ChevronUp className="h-4 w-4 ml-1" />
                        ) : (
                          <ChevronDown className="h-4 w-4 ml-1" />
                        ))}
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left">Descripción</th>
                  <th
                    className="px-6 py-4 text-left cursor-pointer"
                    onClick={() => cambiarOrdenamiento("secretaria")}
                  >
                    <div className="flex items-center">
                      <span>Secretaría</span>
                      {ordenamiento.campo === "secretaria" &&
                        (ordenamiento.direccion === "asc" ? (
                          <ChevronUp className="h-4 w-4 ml-1" />
                        ) : (
                          <ChevronDown className="h-4 w-4 ml-1" />
                        ))}
                    </div>
                  </th>
                  <th className="px-6 py-4 text-left">Área</th>
                  <th className="px-6 py-4 text-center">Acción</th>
                </tr>
              </thead>
              <tbody>
                {tramitesOrdenados.length > 0 ? (
                  tramitesOrdenados.map((tramite, index) => (
                    <tr
                      key={tramite.id}
                      className={`border-b border-gray-200 hover:bg-gray-50 transition-colors duration-150 ${
                        index % 2 === 0 ? "bg-white" : "bg-gray-50"
                      }`}
                    >
                      <td className="px-6 py-4">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                            tramite.tipo === "Trámite"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-green-100 text-green-800"
                          }`}
                        >
                          {tramite.tipo}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-medium">{tramite.clave}</td>
                      <td className="px-6 py-4 font-medium">
                        {tramite.nombre}
                      </td>
                      <td className="px-6 py-4 text-gray-600 max-w-xs truncate">
                        {tramite.descripcion}
                      </td>
                      <td className="px-6 py-4">{tramite.secretaria}</td>
                      <td className="px-6 py-4">{tramite.area}</td>
                      <td className="px-6 py-4 text-center">
                        <button
                          className="inline-flex items-center justify-center p-2 rounded-full bg-[#691B32] text-white hover:bg-[#BC955B] transition-colors duration-200"
                          onClick={() => abrirModal(tramite)}
                        >
                          <Info className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-6 py-8 text-center text-gray-500"
                    >
                      No se encontraron trámites o servicios que coincidan con
                      tu búsqueda.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal de detalle del trámite */}
      {modalAbierto && tramiteSeleccionado && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 transition-opacity duration-300">
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

              <div className="p-8">
                <div className="flex items-center mb-6">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium mr-3 ${
                      tramiteSeleccionado.tipo === "Trámite"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {tramiteSeleccionado.tipo}
                  </span>
                  <span className="text-gray-500 text-sm font-medium">
                    {tramiteSeleccionado.clave}
                  </span>
                </div>

                <h2 className="text-3xl font-bold text-[#691B32] mb-2">
                  {tramiteSeleccionado.nombre}
                </h2>
                <p className="text-gray-700 mb-8">
                  {tramiteSeleccionado.descripcion}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-[#BC955B]" />
                      Requisitos
                    </h3>
                    <ul className="space-y-2">
                      {tramiteSeleccionado.requisitos.map(
                        (requisito, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-5 h-5 bg-[#BC955B] text-white rounded-full flex-shrink-0 flex items-center justify-center text-xs mr-2 mt-0.5">
                              {index + 1}
                            </span>
                            <span>{requisito}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Info className="h-5 w-5 mr-2 text-[#BC955B]" />
                      Información General
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-gray-600 text-sm">
                          Secretaría responsable:
                        </p>
                        <p className="font-medium">
                          {tramiteSeleccionado.secretaria}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">
                          Área de atención:
                        </p>
                        <p className="font-medium">
                          {tramiteSeleccionado.area}
                        </p>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-5 w-5 mr-2 text-[#BC955B] mt-0.5" />
                        <div>
                          <p className="text-gray-600 text-sm">
                            Tiempo de respuesta:
                          </p>
                          <p className="font-medium">
                            {tramiteSeleccionado.tiempoRespuesta}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <DollarSign className="h-5 w-5 mr-2 text-[#BC955B] mt-0.5" />
                        <div>
                          <p className="text-gray-600 text-sm">Costo:</p>
                          <p className="font-medium">
                            {tramiteSeleccionado.costo}
                          </p>
                          <p className="text-gray-600 text-sm mt-1">
                            Métodos de pago aceptados:
                          </p>
                          <p className="font-medium">
                            {tramiteSeleccionado.metodoPago.join(", ")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Ubicación y Contacto
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 mr-2 text-[#BC955B] mt-0.5" />
                      <div>
                        <p className="text-gray-600 text-sm">Dirección:</p>
                        <p className="font-medium">
                          {tramiteSeleccionado.ubicacion}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 mr-2 text-[#BC955B] mt-0.5" />
                      <div>
                        <p className="text-gray-600 text-sm">Contacto:</p>
                        <p className="font-medium">
                          {tramiteSeleccionado.contacto}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 mr-2 text-[#BC955B] mt-0.5" />
                      <div>
                        <p className="text-gray-600 text-sm">
                          Horario de atención:
                        </p>
                        <p className="font-medium">
                          {tramiteSeleccionado.horario}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  {tramiteSeleccionado.formatos && (
                    <a
                      href="#"
                      className="bg-[#691B32] text-white px-6 py-3 rounded-md font-medium transition-colors duration-200 flex items-center justify-center"
                    >
                      <Download className="h-5 w-5 mr-2" />
                      Descargar formato
                    </a>
                  )}
                  <a
                    href="#"
                    className="bg-[#BC955B] text-white px-6 py-3 rounded-md font-medium transition-colors duration-200 flex items-center justify-center"
                  >
                    <Calendar className="h-5 w-5 mr-2" />
                    Agendar cita
                  </a>
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

export default TramitesServicios;
