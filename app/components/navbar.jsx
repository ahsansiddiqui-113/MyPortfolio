// @flow strict
import Link from "next/link";

const links = [
  { href: '/#about', label: 'ABOUT' },
  { href: '/#experience', label: 'EXPERIENCE' },
  { href: '/#skills', label: 'SKILLS' },
  { href: '/#projects', label: 'PROJECTS' },
  { href: '/#repositories', label: 'GITHUB' },
  { href: '/#education', label: 'EDUCATION' },
  { href: '/#contact', label: 'CONTACT' },
];

function Navbar() {
  return (
    <nav className="bg-transparent" aria-label="Main">
      <div className="flex flex-col items-center justify-between gap-2 py-5 md:flex-row">
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className="text-[#16f2b3] text-2xl font-bold sm:text-3xl">
            Muhammad Ahsan Siddiqui
          </Link>
        </div>

        <ul className="flex flex-wrap items-center justify-center text-sm md:space-x-1" id="navbar-default">
          {links.map((l) => (
            <li key={l.href}>
              <Link className="block px-3 py-2 no-underline outline-none hover:no-underline" href={l.href}>
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">{l.label}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
