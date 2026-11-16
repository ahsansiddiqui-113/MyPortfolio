import AboutSection from "./components/homepage/about";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import GithubRepos from "./components/homepage/github";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import Stats from "./components/homepage/stats";

// Revalidate hourly so the GitHub repository list stays fresh without a redeploy.
export const revalidate = 3600;

export default function Home() {
  return (
    <>
      <HeroSection />
      <Stats />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <GithubRepos />
      <Education />
      <ContactSection />
    </>
  )
};
