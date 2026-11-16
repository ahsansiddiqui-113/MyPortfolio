import { stats } from '@/utils/data/personal-data';

export default function Stats() {
  return (
    <section aria-label="Highlights" className="relative z-50 my-8 lg:my-12">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-lg border border-[#1b2c68a0] bg-gradient-to-r from-[#0d1224] to-[#0a0d37] px-4 py-5 text-center"
          >
            <p className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-3xl font-extrabold text-transparent lg:text-4xl">
              {s.value}
            </p>
            <p className="mt-1 text-xs text-gray-300 lg:text-sm">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
