import ProjectsGrid from './projects-grid';

const Projects = () => {
  return (
    <div id='projects' className="relative z-50 my-12 lg:my-24">
      <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
      <div className="flex items-center justify-start relative">
        <span className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
          PROJECTS
        </span>
        <span className="w-full h-[2px] bg-[#1a1443]"></span>
      </div>

      <div className="pt-20">
        <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-gray-300 lg:text-base">
          Products I have shipped and projects I build in the open: live fintech apps and websites, desktop and mobile software, and tools I made for myself.
        </p>
        <ProjectsGrid />
      </div>
    </div>
  );
};

export default Projects;
