import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar({ collapsed }) {
  const [openMenu, setOpenMenu] = useState(null);
  const location = useLocation();

  const menus = [
    {
      label: "Inicio",
      icon: "🏠",
      url: "/",
    },
    {
      label: "Paciente",
      icon: "👤",
      children: [
        { label: "Inicio", url: "/paciente-inicio" },
        { label: "Detalle", url: "/paciente-detalle" },
      ],
    },
     {
      label: "Nutriologo",
      icon: "📊",
      children: [
        { label: "Inicio", url: "/nutriologo-inicio" },
        { label: "Registro Paciente", url: "/nutriologo-registro-paciente" },
        { label: "Lista Pacientes", url: "/nutriologo-lista-paciente" },
      ],
    },
    {
      label: "Recepcionista",
      icon: "📊",
      children: [
        { label: "Inicio", url: "/recepcionista-inicio" },
        { label: "Registro Paciente", url: "/recepcionista-registro-paciente" },
        { label: "Detalle", url: "/recepcionista-detalle-paciente" },
      ],
    },
     {
      label: "Administrador",
      icon: "📊",
      children: [
        { label: "Inicio", url: "/admin-inicio" },
        { label: "Paciente", url: "/admin-registro-paciente" },
        { label: "Empleado", url: "/admin-registro-e mpleado" },
      ],
    },
  ];

  const toggleMenu = label => {
    setOpenMenu(openMenu === label ? null : label);
  };

  return (
    <aside
      className={`
        h-screen text-white
        bg-gradient-to-b from-[#00008B] to-[#1E40AF]
        transition-all duration-300 ease-in-out
        ${collapsed ? "w-20" : "w-64"}
      `}
    >
      {/* Logo */}
      <div className="h-16 flex items-center justify-center font-bold text-lg border-b border-white/20">
        {collapsed ? "DB" : "DarkBlue"}
      </div>

      {/* Menu */}
      <nav className="p-3 space-y-1">
        {menus.map(menu => {
          const isActive = menu.url && location.pathname === menu.url;

          return (
            <div key={menu.label}>
              
              {/* Parent */}
              {menu.children ? (
                <button
                  onClick={() => toggleMenu(menu.label)}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/20 transition"
                >
                  <span className="text-xl">{menu.icon}</span>

                  {!collapsed && (
                    <>
                      <span className="flex-1 text-left">
                        {menu.label}
                      </span>
                      <span
                        className={`transition-transform ${
                          openMenu === menu.label ? "rotate-90" : ""
                        }`}
                      >
                        ▶
                      </span>
                    </>
                  )}
                </button>
              ) : (
                <Link
                  to={menu.url}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg transition
                    ${isActive ? "bg-white/30" : "hover:bg-white/20"}`}
                >
                  <span className="text-xl">{menu.icon}</span>
                  {!collapsed && <span>{menu.label}</span>}
                </Link>
              )}

              {/* Submenu */}
              {!collapsed && menu.children && (
                <div
                  className={`
                    ml-9 overflow-hidden transition-all duration-300
                    ${openMenu === menu.label
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"}
                  `}
                >
                  {menu.children.map(sub => {
                    const isSubActive =
                      location.pathname === sub.url;

                    return (
                      <Link
                        key={sub.label}
                        to={sub.url}
                        className={`block px-3 py-2 rounded-lg text-sm transition
                          ${
                            isSubActive
                              ? "bg-white/30 text-white"
                              : "text-white/80 hover:text-white hover:bg-white/20"
                          }`}
                      >
                        {sub.label}
                      </Link>
                    );
                  })}
                </div>
              )}

            </div>
          );
        })}
      </nav>
    </aside>
  );
}
