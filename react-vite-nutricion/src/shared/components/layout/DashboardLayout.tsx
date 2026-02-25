import { useState } from "react";
import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../components/../layout/Navbar";

export default function DashboardLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex bg-slate-50">
      
      <Sidebar collapsed={collapsed} />

      <div className="flex-1 min-h-screen transition-all duration-300">
        <Navbar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />

        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
