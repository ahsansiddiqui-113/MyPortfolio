'use client';

import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'repositories', label: 'GitHub' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);

  // highlight the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-35% 0px -60% 0px' }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, []);

  return (
    <header
      className={`sticky top-0 z-[100] transition-all duration-300 ${
        scrolled || open ? 'border-b border-white/5 bg-[#06070d]/80 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-[78rem] items-center justify-between px-5 py-3.5 sm:px-8" aria-label="Main">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#16f2b3] to-[#38bdf8] text-sm font-extrabold text-[#04120d]">
            AS
          </span>
          <span className="hidden text-sm font-semibold tracking-tight text-white sm:block">
            Ahsan Siddiqui
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.id}>
              <Link
                href={`/#${l.id}`}
                className={`rounded-full px-3.5 py-2 text-sm no-underline transition-colors ${
                  active === l.id ? 'bg-white/10 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={personalData.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost hidden rounded-full px-4 py-2 text-sm sm:block"
          >
            Resume
          </a>
          <button
            className="rounded-lg p-2 text-white lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/5 px-5 pb-5 pt-2 lg:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.id}>
                <Link
                  href={`/#${l.id}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base text-gray-300 no-underline hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <a href={personalData.resume} target="_blank" rel="noopener noreferrer" className="btn-primary block rounded-full px-4 py-3 text-center text-sm">
                Download resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
