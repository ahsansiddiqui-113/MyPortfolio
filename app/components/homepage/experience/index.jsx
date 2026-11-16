// @flow strict

import { experiences } from "@/utils/data/experience";
import SectionHeading from "../../ui/section-heading";

function Experience() {
  return (
    <section id="experience" className="relative py-16 lg:py-24">
      <SectionHeading index="02" eyebrow="Experience" title="Where I've built things">
        From mission-critical healthcare systems to a fintech platform used on iOS, Android and web.
      </SectionHeading>

      <ol className="relative ml-3 border-l border-white/10 sm:ml-4">
        {experiences.map((exp, i) => (
          <li key={exp.id} className="relative pb-10 pl-7 last:pb-0 sm:pl-10">
            <span
              className={`absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full border-2 border-[#06070d] ${i === 0 ? 'bg-[#16f2b3] shadow-[0_0_0_4px_rgba(22,242,179,0.18)]' : 'bg-gray-500'}`}
              aria-hidden="true"
            />
            <div className="glass glass-hover rounded-2xl p-5 sm:p-6">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                  <p className="text-sm font-medium text-[#16f2b3]">{exp.company}</p>
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400">
                  {exp.duration.replace(/[()]/g, '')}
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-gray-400">
                {exp.highlights?.map((h, j) => (
                  <li key={j} className="flex gap-2.5">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#16f2b3]" aria-hidden="true" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Experience;
