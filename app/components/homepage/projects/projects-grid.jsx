'use client';

import { projectFilters, projectsData } from '@/utils/data/projects-data';
import { useMemo, useState } from 'react';
import ProjectCard from './project-card';

const INITIAL_COUNT = 13; // enough to show every live project before "Show all"
const STATUS_ORDER = { 'Live': 0, 'In progress': 1, 'Source': 2 };

function matches(project, filter) {
  if (filter === 'All') return true;
  if (filter === 'Live') return project.status === 'Live';
  return project.category.includes(filter);
}

// Live products first, then everything else in the order they are listed in the data file.
const sorted = [...projectsData].sort(
  (a, b) => (STATUS_ORDER[a.status] ?? 3) - (STATUS_ORDER[b.status] ?? 3) || a.id - b.id
);

export default function ProjectsGrid() {
  const [filter, setFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const matched = useMemo(() => sorted.filter((p) => matches(p, filter)), [filter]);
  const visible = showAll ? matched : matched.slice(0, INITIAL_COUNT);
  const available = useMemo(
    () => projectFilters.filter((f) => projectsData.some((p) => matches(p, f))),
    []
  );

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
        {available.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={filter === f}
            onClick={() => { setFilter(f); setShowAll(false); }}
            className={`rounded-full border px-4 py-1.5 text-sm transition-all duration-200 ${
              filter === f
                ? 'border-transparent bg-white text-[#06070d] font-medium'
                : 'border-white/10 bg-white/[0.03] text-gray-400 hover:border-white/30 hover:text-white'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {matched.length > INITIAL_COUNT && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="btn-ghost rounded-full px-6 py-3 text-sm"
          >
            {showAll ? 'Show fewer projects' : `Show all ${matched.length} projects`}
          </button>
        </div>
      )}
    </>
  );
}
