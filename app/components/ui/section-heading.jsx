// Shared heading for every section: small numbered eyebrow, big title, optional intro.
export default function SectionHeading({ index, eyebrow, title, children }) {
  return (
    <header className="mb-10 lg:mb-14 max-w-2xl">
      <p className="mb-3 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-[#16f2b3]">
        <span className="text-gray-500">{index}</span>
        <span className="h-px w-8 bg-[#16f2b3]/60" />
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-sm leading-relaxed text-gray-400 sm:text-base">{children}</p>}
    </header>
  );
}
