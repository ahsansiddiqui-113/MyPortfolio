// @flow strict
import { educations } from "@/utils/data/educations";
import { HiOutlineAcademicCap } from "react-icons/hi";
import SectionHeading from "../../ui/section-heading";

function Education() {
  return (
    <section id="education" className="relative py-16 lg:py-24">
      <SectionHeading index="06" eyebrow="Education" title="Academic background" />

      <div className="grid gap-4 md:grid-cols-3">
        {educations.map((edu) => (
          <div key={edu.id} className="glass glass-hover rounded-2xl p-6">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#8b5cf6]/15 text-[#a78bfa]">
              <HiOutlineAcademicCap size={22} />
            </span>
            <p className="mt-4 text-xs text-[#16f2b3]">{edu.duration}</p>
            <h3 className="mt-1 text-lg font-semibold text-white">{edu.title}</h3>
            <p className="mt-1 text-sm text-gray-400">{edu.institution}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
