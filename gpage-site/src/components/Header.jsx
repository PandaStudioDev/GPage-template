import React, { useState, useEffect } from "react";
import {
  Building,
  Briefcase,
  Home,
  LandPlot,
  Menu,
  Search,
  Users,
  X,
} from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState("");

  useEffect(() => {
    setActivePage(window.location.pathname);
  }, []);

  return (
    <header className="bg-[#691B32] text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Building className="h-8 w-8" />
          <span className="font-bold text-xl">Municipio de San Miguel</span>
        </div>

        {/* Menú para escritorio */}
        <div className="hidden md:flex items-center space-x-6">
          <nav>
            <ul className="flex space-x-6">
              {[
                { href: "/inicio", label: "Inicio", icon: Home },
                { href: "/gabinete", label: "Gobierno Municipal", icon: Users },
                {
                  href: "/tramites",
                  label: "Trámites y Servicios",
                  icon: Briefcase,
                },
                {
                  href: "/municipio",
                  label: "Turismo y Municipio",
                  icon: LandPlot,
                },
              ].map(({ href, label, icon: Icon }) => (
                <li
                  key={href}
                  className={`hover:text-[#BC955B] transition-colors duration-200 font-medium ${
                    activePage.includes(href) ? "text-[#BC955B]" : ""
                  }`}
                >
                  <a href={href} className="flex items-center">
                    <Icon className="h-4 w-4 mr-1" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <button className="p-2 rounded-full hover:bg-[#BC955B] transition-colors duration-200">
            <Search className="h-5 w-5" />
          </button>
        </div>

        {/* Botón de menú móvil */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-[#BC955B] transition-colors duration-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Menú para móviles */}
      {isOpen && (
        <div className="md:hidden bg-[#691B32] text-white py-4 px-6 space-y-4">
          <nav>
            <ul className="space-y-4">
              {[
                { href: "/inicio", label: "Inicio", icon: Home },
                { href: "/gabinete", label: "Gobierno Municipal", icon: Users },
                {
                  href: "/tramites",
                  label: "Trámites y Servicios",
                  icon: Briefcase,
                },
                {
                  href: "/municipio",
                  label: "Turismo y Municipio",
                  icon: LandPlot,
                },
              ].map(({ href, label, icon: Icon }) => (
                <li
                  key={href}
                  className={`hover:text-[#BC955B] transition-colors duration-200 font-medium ${
                    activePage.includes(href) ? "text-[#BC955B]" : ""
                  }`}
                >
                  <a href={href} className="flex items-center">
                    <Icon className="h-4 w-4 mr-2" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
