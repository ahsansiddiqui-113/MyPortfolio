import { stats } from '@/utils/data/personal-data';

export default function Stats() {
  return (
    <section aria-label="Highlights" className="relative">
      <div className="glass grid grid-cols-2 divide-white/5 rounded-2xl lg:grid-cols-4 lg:divide-x">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`px-5 py-6 text-center ${i < 2 ? 'border-b border-white/5 lg:border-b-0' : ''} ${i % 2 === 0 ? 'border-r border-white/5 lg:border-r-0' : ''}`}
          >
            <p className="text-gradient text-3xl font-extrabold sm:text-4xl">{s.value}</p>
            <p className="mt-1 text-xs text-gray-400 sm:text-sm">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
