export default function Card({ title, value, icon }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-white p-6 shadow hover:shadow-lg transition">
      
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00008B]/10 to-blue-300/10 opacity-0 hover:opacity-100 transition" />

      <div className="relative">
        <div className="flex items-center justify-between">
          <p className="text-sm text-slate-500">{title}</p>
          <span className="text-2xl text-[#00008B]">{icon}</span>
        </div>

        <h2 className="text-3xl font-bold mt-2 text-slate-800">
          {value}
        </h2>
      </div>
    </div>
  );
}
