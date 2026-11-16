import {
  SiAmazonaws, SiConfluence, SiCss3, SiDart, SiDjango, SiDocker, SiDotnet, SiElectron, SiExpress,
  SiFigma, SiFirebase, SiFlutter, SiGit, SiGithubactions, SiGraphql, SiHibernate, SiHtml5, SiJavascript,
  SiJira, SiMicrosoftazure, SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiOpenjdk, SiOracle, SiPhp,
  SiPostgresql, SiPostman, SiPython, SiRailway, SiReact, SiRedis, SiRedux, SiSap, SiSpringboot, SiSqlite,
  SiStripe, SiSwagger, SiTailwindcss, SiTypescript, SiVite,
} from 'react-icons/si';

// Every skill has an icon + brand colour, so nothing renders as a broken image.
const s = (name, icon, color) => ({ name, icon, color });

export const skillCategories = [
  {
    title: 'Mobile',
    skills: [s('Flutter', SiFlutter, '#54c5f8'), s('Dart', SiDart, '#40c4ff'), s('React Native', SiReact, '#61dafb'), s('Firebase', SiFirebase, '#ffca28')],
  },
  {
    title: 'Backend',
    skills: [s('Node.js', SiNodedotjs, '#6cc24a'), s('Express', SiExpress, '#e5e7eb'), s('Java', SiOpenjdk, '#f89820'), s('Spring Boot', SiSpringboot, '#6db33f'), s('Hibernate', SiHibernate, '#a6a27b'), s('PHP', SiPhp, '#8993be'), s('Python', SiPython, '#ffd43b'), s('Django', SiDjango, '#44b78b'), s('GraphQL', SiGraphql, '#e535ab')],
  },
  {
    title: 'Frontend & Desktop',
    skills: [s('React', SiReact, '#61dafb'), s('Next.js', SiNextdotjs, '#ffffff'), s('TypeScript', SiTypescript, '#3178c6'), s('JavaScript', SiJavascript, '#f7df1e'), s('Redux', SiRedux, '#a78bfa'), s('Tailwind CSS', SiTailwindcss, '#38bdf8'), s('Vite', SiVite, '#a78bfa'), s('Electron', SiElectron, '#47848f'), s('HTML', SiHtml5, '#e34f26'), s('CSS', SiCss3, '#1572b6')],
  },
  {
    title: 'Data',
    skills: [s('PostgreSQL', SiPostgresql, '#6b9fd8'), s('MySQL', SiMysql, '#4479a1'), s('Oracle', SiOracle, '#f80000'), s('MongoDB', SiMongodb, '#47a248'), s('SQLite', SiSqlite, '#7ab7e0'), s('Redis', SiRedis, '#dc382d')],
  },
  {
    title: 'Cloud, DevOps & Payments',
    skills: [s('Docker', SiDocker, '#2496ed'), s('Railway', SiRailway, '#e5e7eb'), s('Azure', SiMicrosoftazure, '#0089d6'), s('AWS', SiAmazonaws, '#ff9900'), s('GitHub Actions', SiGithubactions, '#2088ff'), s('Git', SiGit, '#f05032'), s('Stripe', SiStripe, '#9b8cff')],
  },
  {
    title: 'Tools & Enterprise',
    skills: [s('Postman', SiPostman, '#ff6c37'), s('Swagger', SiSwagger, '#85ea2d'), s('Jira', SiJira, '#2684ff'), s('Confluence', SiConfluence, '#2684ff'), s('Figma', SiFigma, '#f24e1e'), s('SAP ABAP', SiSap, '#0faaff'), s('.NET (learning)', SiDotnet, '#8b6cf0')],
  },
];

// Flat, de-duplicated list for the scrolling marquee
export const skillsData = skillCategories.flatMap((c) => c.skills).filter(
  (skill, i, all) => all.findIndex((x) => x.name === skill.name) === i
);
