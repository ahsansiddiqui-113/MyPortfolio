// @flow strict

import { skillCategories } from "@/utils/data/skills";
import SectionHeading from "../../ui/section-heading";

function Skills() {
  return (
    <section id="skills" className="relative py-16 lg:py-24">
      <SectionHeading index="03" eyebrow="Skills" title="Tools I build with">
        A full-stack toolkit across mobile, backend, web, data and cloud, picked for shipping reliable products.
      </SectionHeading>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat) => (
          <div key={cat.title} className="glass glass-hover rounded-2xl p-5 sm:p-6">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#16f2b3]">{cat.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <li
                    key={skill.name}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-gray-200 transition-colors hover:border-white/30"
                  >
                    <Icon size={16} style={{ color: skill.color }} aria-hidden="true" />
                    {skill.name}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
