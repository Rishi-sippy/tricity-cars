function StatCard({ title, value, glow }: { title: string; value: number | string; glow: 'cyan' | 'emerald' | 'violet' | 'orange' }) {
  const glowMap = {
    cyan: 'shadow-cyan-500/30',
    emerald: 'shadow-emerald-500/30',
    violet: 'shadow-violet-500/30',
    orange: 'shadow-orange-500/30'
  }

  return (
    <div className={`relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-xl ${glowMap[glow]}`}>
      <p className="text-slate-400 text-sm">{title}</p>
      <p className="mt-2 text-3xl font-bold">{value}</p>

      {/* Neon glow */}
      <div className={`absolute inset-0 rounded-2xl blur-xl opacity-20 bg-${glow}-500`} />
    </div>
  )
}
export default StatCard
