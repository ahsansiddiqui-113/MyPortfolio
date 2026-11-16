import SectionHeading from '../../ui/section-heading';
import ProjectsGrid from './projects-grid';

const Projects = () => {
  return (
    <section id="projects" className="relative py-16 lg:py-24">
      <SectionHeading index="04" eyebrow="Projects" title="Things I've shipped">
        Live fintech apps and websites, desktop and mobile software, and tools I made for myself. Filter by what interests you.
      </SectionHeading>
      <ProjectsGrid />
    </section>
  );
};

export default Projects;
