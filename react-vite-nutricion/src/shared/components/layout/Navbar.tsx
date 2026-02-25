export default function Navbar({ collapsed, setCollapsed }) {
  return (
   <header
  className="
    h-16
    flex items-center justify-between
    px-6
    bg-white/80
    backdrop-blur
    border-b border-blue-100
  "
>
  {/* Toggle */}
  <button
    onClick={() => setCollapsed(!collapsed)}
    className="
      text-[#00008B]
      text-xl
      p-2
      rounded-lg
      transition
      hover:bg-blue-50
    "
  >
    ☰
  </button>

  {/* Title */}
  <h1 className="font-semibold text-slate-700 tracking-wide">
    Rich Develop
  </h1>

  {/* Avatar */}
  <img
    src="/img/feliz.png"
    alt="Usuario"
    className="
      w-9 h-9
      rounded-full
      ring-2 ring-[#00008B]
      ring-offset-2
      ring-offset-white
    "
  />
</header>

  );
}
