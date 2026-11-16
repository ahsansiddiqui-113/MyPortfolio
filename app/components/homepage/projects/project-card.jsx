// @flow strict

import * as React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const STATUS_STYLES = {
  'Live': 'border-emerald-400/40 bg-emerald-400/10 text-emerald-300',
  'In progress': 'border-amber-400/40 bg-amber-400/10 text-amber-300',
  'Source': 'border-violet-400/40 bg-violet-400/10 text-violet-300',
};

function ProjectCard({ project }) {
  const statusStyle = STATUS_STYLES[project.status] || STATUS_STYLES.Source;

  return (
    <article className="from-[#0d1224] border-[#1b2c68a0] relative flex h-full flex-col overflow-hidden rounded-lg border bg-gradient-to-r to-[#0a0d37] transition-all duration-300 hover:border-violet-500/60 hover:-translate-y-1">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>

      <div className="flex flex-1 flex-col p-5 lg:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg lg:text-xl font-semibold text-white">{project.name}</h3>
          <span className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs ${statusStyle}`}>
            {project.status === 'Live' && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />}
            {project.status === 'Source' ? 'Open source' : project.status}
          </span>
        </div>

        <p className="mt-1 text-sm text-[#16f2b3]">{project.tagline}</p>
        <p className="mt-3 text-sm leading-relaxed text-gray-300">{project.description}</p>

        {project.highlights?.length > 0 && (
          <ul className="mt-3 list-disc space-y-1 pl-4 text-xs text-gray-400">
            {project.highlights.map((h, i) => <li key={i}>{h}</li>)}
          </ul>
        )}

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tools.map((tool) => (
            <span key={tool} className="rounded-md border border-[#1f223c] bg-[#11152c] px-2 py-0.5 text-xs text-amber-300">
              {tool}
            </span>
          ))}
        </div>

        <p className="mt-4 text-xs text-gray-400">
          <span className="text-gray-500">Role: </span>{project.role}
        </p>

        <div className="mt-auto flex flex-wrap gap-3 pt-5">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white transition-all hover:gap-3 hover:text-white"
            >
              Live site <FaExternalLinkAlt size={11} />
            </a>
          )}
          {project.code && (
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-violet-500/60 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-violet-600/20 hover:text-white"
            >
              <FaGithub size={13} /> Code
            </a>
          )}
          {!project.live && !project.code && (
            <span className="text-xs text-gray-500">Private / client work</span>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
