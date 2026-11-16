// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative mt-8 border-t border-white/5">
      <div className="mx-auto flex max-w-[78rem] flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-gray-500 sm:px-8 md:flex-row">
        <p>
          &copy; {new Date().getFullYear()} {personalData.name}. Built with Next.js and Tailwind CSS.
        </p>
        <div className="flex items-center gap-5">
          <Link target="_blank" href={personalData.github} className="flex items-center gap-2 hover:text-[#16f2b3]">
            <FaGithub /> GitHub
          </Link>
          <Link target="_blank" href={personalData.linkedIn} className="flex items-center gap-2 hover:text-[#16f2b3]">
            <FaLinkedin /> LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
