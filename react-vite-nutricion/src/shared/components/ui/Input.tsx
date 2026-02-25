import React from "react";
import type { fusuario } from "../../types/filtros";

interface InputProps {
  label: string;
  icon: React.ReactNode;
  name: keyof fusuario;
  value: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputFiltros({
  label,
  icon,
  name,
  value,
  type = "text",
  onChange,
}: InputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-1">
        {label}
      </label>

      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
          {icon}
        </span>

        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300
                     focus:ring-2 focus:ring-[#00008B] focus:outline-none"
        />
      </div>
    </div>
  );
}
