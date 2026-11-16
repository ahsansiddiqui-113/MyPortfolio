import { personalData } from '@/utils/data/personal-data';
import { fallbackRepos, projectsData, repoBlurbs } from '@/utils/data/projects-data';
import { FaGithub, FaRegStar } from 'react-icons/fa';

const LANG_COLORS = {
  JavaScript: '#f7df1e', TypeScript: '#3178c6', Dart: '#40c4ff', Java: '#f89820', Python: '#ffd43b',
  PHP: '#8993be', HTML: '#e34f26', CSS: '#1572b6', 'C++': '#f34b7d', 'C#': '#9b4f96', C: '#a8b9cc',
  Kotlin: '#a97bff', 'Jupyter Notebook': '#f37626',
};

const HIDDEN = new Set([personalData.githubUsername, 'MyPortfolio']);
const FEATURED = new Set(projectsData.map((p) => p.repo).filter(Boolean));

async function getRepos() {
  try {
    const headers = { Accept: 'application/vnd.github+json', 'User-Agent': 'portfolio' };
    if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    const res = await fetch(
      `https://api.github.com/users/${personalData.githubUsername}/repos?per_page=100&sort=pushed`,
      { headers, next: { revalidate: 3600 } }
    );
    if (!res.ok) throw new Error(`GitHub API ${res.status}`);
    const data = await res.json();
    const repos = data
      .filter((r) => !r.fork && !r.archived)
      .map((r) => ({
        name: r.name,
        description: r.description || repoBlurbs[r.name] || (r.language ? `${r.language} project` : 'Project'),
        language: r.language,
        url: r.html_url,
        pushed: r.pushed_at,
        stars: r.stargazers_count,
      }));
    return { repos, total: data.length, live: true };
  } catch (e) {
    return { repos: fallbackRepos, total: fallbackRepos.length + FEATURED.size, live: false };
  }
}

export default async function GithubRepos() {
  const { repos, total } = await getRepos();
  const list = repos.filter((r) => !HIDDEN.has(r.name) && !FEATURED.has(r.name));

  return (
    <div id="repositories" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">More on GitHub</span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-gray-300 lg:text-base">
        Everything else I have built and practised on, pulled live from my GitHub profile: web apps, Flutter and React Native apps, backend services and computer-science fundamentals.
      </p>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((repo) => (
          <a
            key={repo.name}
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-lg border border-[#1f223c] bg-[#11152c] p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-500"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="flex min-w-0 items-center gap-2 text-sm font-medium text-white">
                <FaGithub className="shrink-0 text-gray-400 group-hover:text-[#16f2b3]" />
                <span className="truncate">{repo.name}</span>
              </span>
              {repo.stars > 0 && (
                <span className="flex items-center gap-1 text-xs text-amber-300"><FaRegStar /> {repo.stars}</span>
              )}
            </div>
            <p className="mt-2 flex-1 text-xs text-gray-400">{repo.description}</p>
            <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
              {repo.language ? (
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full" style={{ background: LANG_COLORS[repo.language] || '#8b98a5' }} />
                  {repo.language}
                </span>
              ) : <span />}
              {repo.pushed && <span>{new Date(repo.pushed).getFullYear()}</span>}
            </div>
          </a>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <a
          href={personalData.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white transition-all hover:gap-3 hover:text-white md:text-sm"
        >
          <FaGithub size={16} /> View all {total}+ repositories
        </a>
      </div>
    </div>
  );
}
