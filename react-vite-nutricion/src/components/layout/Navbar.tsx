export default function Navbar({ collapsed, setCollapsed }) {
  return (
    <header className="h-16 bg-white/80 backdrop-blur border-b flex items-center justify-between px-6">
      
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="text-[#00008B] text-xl"
      >
        ☰
      </button>

      <h1 className="font-semibold text-slate-700">
        Rich Develop
      </h1>

      <img
        src="https://i.pravatar.cc/40"
        className="w-9 h-9 rounded-full ring-2 ring-[#00008B]"
      />
    </header>
  );
}
