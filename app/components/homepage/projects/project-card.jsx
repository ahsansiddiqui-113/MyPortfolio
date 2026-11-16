// @flow strict

import Image from 'next/image';
import * as React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const STATUS_STYLES = {
  'Live': 'border-emerald-400/40 bg-emerald-400/15 text-emerald-300',
  'In progress': 'border-amber-400/40 bg-amber-400/15 text-amber-300',
  'Source': 'border-white/20 bg-white/10 text-gray-200',
};

// Projects without a screenshot get a generated gradient cover.
const COVERS = [
  'from-[#16f2b3]/25 via-[#38bdf8]/15 to-[#0b0d16]',
  'from-[#8b5cf6]/30 via-[#ec4899]/15 to-[#0b0d16]',
  'from-[#38bdf8]/25 via-[#8b5cf6]/15 to-[#0b0d16]',
  'from-[#f59e0b]/25 via-[#ef4444]/10 to-[#0b0d16]',
];

function Cover({ project }) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={`${project.name} preview`}
        width={1280}
        height={800}
        className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
      />
    );
  }
  const initials = project.name.split(/\s+/).map((w) => w[0]).join('').slice(0, 3).toUpperCase();
  return (
    <div className={`flex aspect-[16/10] w-full flex-col items-center justify-center bg-gradient-to-br ${COVERS[project.id % COVERS.length]}`}>
      <span className="text-5xl font-extrabold tracking-tight text-white/90">{initials}</span>
      <span className="mt-2 text-xs uppercase tracking-[0.25em] text-white/50">{project.tools.slice(0, 3).join(' · ')}</span>
    </div>
  );
}

function ProjectCard({ project }) {
  const statusStyle = STATUS_STYLES[project.status] || STATUS_STYLES.Source;

  return (
    <article className="group glass glass-hover flex h-full flex-col overflow-hidden rounded-2xl hover:-translate-y-1">
      <div className="relative overflow-hidden border-b border-white/5">
        <Cover project={project} />
        <span className={`absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs backdrop-blur ${statusStyle}`}>
          {project.status === 'Live' && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />}
          {project.status === 'Source' ? 'Open source' : project.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-semibold text-white">{project.name}</h3>
        <p className="mt-1 text-sm font-medium text-[#16f2b3]">{project.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-gray-400">{project.description}</p>

        {project.highlights?.length > 0 && (
          <ul className="mt-4 space-y-1.5 text-xs leading-relaxed text-gray-400">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#16f2b3]" aria-hidden="true" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tools.map((tool) => (
            <span key={tool} className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-xs text-gray-300">
              {tool}
            </span>
          ))}
        </div>

        <p className="mt-4 text-xs text-gray-500">
          <span className="text-gray-600">Role:</span> {project.role}
        </p>

        <div className="mt-auto flex flex-wrap gap-3 pt-5">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs no-underline"
            >
              Live site <FaExternalLinkAlt size={11} />
            </a>
          )}
          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs no-underline"
            >
              <FaGithub size={13} /> Code
            </a>
          )}
          {!project.live && !project.code && (
            <span className="text-xs text-gray-600">Private / client work</span>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
