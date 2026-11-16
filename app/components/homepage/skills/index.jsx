// @flow strict

import { skillCategories, skillsData } from "@/utils/data/skills";
import SkillsMarquee from "./skills-marquee";

function SkillChip({ skill }) {
  const Icon = skill.icon;
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#1f223c] bg-[#0d1224] px-3 py-1.5 text-xs sm:text-sm text-gray-200 transition-colors duration-300 hover:border-violet-500">
      <Icon size={16} style={{ color: skill.color }} aria-hidden="true" />
      {skill.name}
    </span>
  );
}

function Skills() {
  return (
    <div id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="w-full my-12">
        <SkillsMarquee>
          {skillsData.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                key={skill.name}
              >
                <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] group-hover:border-violet-500 transition-all duration-500">
                  <div className="flex -translate-y-[1px] justify-center">
                    <div className="w-3/4">
                      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3 p-6">
                    <Icon size={36} style={{ color: skill.color }} aria-hidden="true" />
                    <p className="text-white text-sm sm:text-lg whitespace-nowrap">{skill.name}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </SkillsMarquee>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 mt-12">
        {skillCategories.map((cat) => (
          <div key={cat.title} className="rounded-lg border border-[#1b2c68a0] bg-gradient-to-r from-[#0d1224] to-[#0a0d37] p-5">
            <h3 className="text-[#16f2b3] text-sm uppercase tracking-wider mb-3">{cat.title}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => <SkillChip key={skill.name} skill={skill} />)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
