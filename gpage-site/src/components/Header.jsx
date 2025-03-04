import React from "react";
import {
  Building,
  Briefcase,
  Home,
  LandPlot,
  Menu,
  Search,
  Users,
} from "lucide-react";

const Header = () => {
  return (
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
                <a href="/" className="flex items-center">
                  <Home className="h-4 w-4 mr-1" />
                  Inicio
                </a>
              </li>
              <li className="hover:text-[#BC955B] transition-colors duration-200 font-medium">
                <a href="/gabinete" className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  Gobierno Municipal
                </a>
              </li>
              <li className="hover:text-[#BC955B] transition-colors duration-200 font-medium">
                <a href="/tramites" className="flex items-center">
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
  );
};

export default Header;
