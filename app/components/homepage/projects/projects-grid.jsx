'use client';

import { projectFilters, projectsData } from '@/utils/data/projects-data';
import { useMemo, useState } from 'react';
import ProjectCard from './project-card';

function matches(project, filter) {
  if (filter === 'All') return true;
  if (filter === 'Live') return project.status === 'Live';
  return project.category.includes(filter);
}

export default function ProjectsGrid() {
  const [filter, setFilter] = useState('All');
  const visible = useMemo(() => projectsData.filter((p) => matches(p, filter)), [filter]);
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
            onClick={() => setFilter(f)}
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
    </>
  );
}
