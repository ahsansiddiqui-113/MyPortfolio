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
      <div className="flex flex-wrap justify-center gap-2 mb-10" role="tablist" aria-label="Filter projects">
        {available.map((f) => (
          <button
            key={f}
            role="tab"
            aria-selected={filter === f}
            onClick={() => setFilter(f)}
            className={`rounded-full border px-4 py-1.5 text-sm transition-all duration-200 ${
              filter === f
                ? 'border-transparent bg-gradient-to-r from-pink-500 to-violet-600 text-white'
                : 'border-[#1f223c] bg-[#11152c] text-gray-300 hover:border-violet-500'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}
