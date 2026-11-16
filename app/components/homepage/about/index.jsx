import { personalData } from "@/utils/data/personal-data";
import { FaMobileAlt, FaServer } from "react-icons/fa";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import SectionHeading from "../../ui/section-heading";

const focus = [
  {
    Icon: FaMobileAlt,
    title: 'Mobile apps',
    text: 'Cross-platform Flutter and React Native apps with clean architecture (GetX, Bloc, Provider) and Firebase.',
  },
  {
    Icon: FaServer,
    title: 'Backend & data',
    text: 'Node.js, Java / Spring Boot, PHP and Django APIs on PostgreSQL, MySQL and Oracle, with secure auth and payments.',
  },
  {
    Icon: HiOutlineGlobeAlt,
    title: 'Web products',
    text: 'React and Next.js front ends, Dockerised deployments and live products used by real customers.',
  },
];

function AboutSection() {
  return (
    <section id="about" className="relative py-16 lg:py-24">
      <SectionHeading index="01" eyebrow="About" title="Engineer, builder, product-minded" />
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div>
          <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
            {personalData.description}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {focus.map(({ Icon, title, text }) => (
            <div key={title} className="glass glass-hover flex gap-4 rounded-2xl p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#16f2b3]/10 text-[#16f2b3]">
                <Icon size={20} />
              </span>
              <div>
                <h3 className="font-semibold text-white">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-gray-400">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
