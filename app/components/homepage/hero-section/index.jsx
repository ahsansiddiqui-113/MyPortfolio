// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaStackOverflow } from "react-icons/fa";
import { HiArrowRight, HiDownload } from "react-icons/hi";
import { MdAlternateEmail } from "react-icons/md";

const social = [
  { href: personalData.github, label: 'GitHub', Icon: BsGithub },
  { href: personalData.linkedIn, label: 'LinkedIn', Icon: BsLinkedin },
  { href: personalData.stackOverflow, label: 'Stack Overflow', Icon: FaStackOverflow },
  { href: `mailto:${personalData.email}`, label: 'Email', Icon: MdAlternateEmail },
];

function HeroSection() {
  return (
    <section className="relative grid items-center gap-12 pb-12 pt-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pb-20 lg:pt-16">
      <div className="order-2 lg:order-1">
        <p className="fade-up glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-gray-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#16f2b3] opacity-70"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#16f2b3]"></span>
          </span>
          Open to opportunities &middot; {personalData.address}
        </p>

        <h1 className="fade-up fade-up-2 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.6rem]">
          Hi, I&apos;m {personalData.name.split(' ').slice(0, 2).join(' ')}{' '}
          <span className="text-gradient">{personalData.name.split(' ').slice(2).join(' ')}</span>
        </h1>

        <p className="fade-up fade-up-2 mt-4 text-lg font-medium text-[#16f2b3] sm:text-xl">
          {personalData.designation}
        </p>

        <p className="fade-up fade-up-3 mt-5 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg">
          {personalData.tagline}
        </p>

        <p className="fade-up fade-up-3 mt-4 text-sm text-gray-500">
          Currently building{' '}
          <Link href="https://www.wealthnx.ai" target="_blank" rel="noopener noreferrer" className="text-white underline decoration-[#16f2b3]/50 underline-offset-4 hover:decoration-[#16f2b3]">WealthNX AI</Link>
          {' '}at{' '}
          <Link href="https://inexor.ai" target="_blank" rel="noopener noreferrer" className="text-white underline decoration-[#16f2b3]/50 underline-offset-4 hover:decoration-[#16f2b3]">INEXOR</Link>.
        </p>

        <div className="fade-up fade-up-3 mt-8 flex flex-wrap items-center gap-3">
          <Link href="#projects" className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm no-underline">
            View my work <HiArrowRight size={16} />
          </Link>
          <Link href="#contact" className="btn-ghost inline-flex items-center rounded-full px-6 py-3 text-sm no-underline">
            Contact me
          </Link>
          <a href={personalData.resume} target="_blank" rel="noopener noreferrer" className="btn-ghost inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm no-underline">
            Resume <HiDownload size={16} />
          </a>
        </div>

        <div className="fade-up fade-up-3 mt-8 flex items-center gap-3">
          {social.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              className="glass glass-hover flex h-11 w-11 items-center justify-center rounded-full text-gray-300 hover:text-[#16f2b3]"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      <div className="order-1 flex justify-center lg:order-2">
        <div className="relative w-full max-w-[15rem] sm:max-w-[22rem]">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#16f2b3]/30 via-[#38bdf8]/20 to-[#8b5cf6]/30 blur-2xl" aria-hidden="true"></div>
          <div className="relative rounded-[1.75rem] bg-gradient-to-br from-[#16f2b3]/60 via-white/10 to-[#8b5cf6]/60 p-[1.5px]">
            <div className="overflow-hidden rounded-[1.7rem] bg-[#0b0d16]">
              <Image
                src={personalData.profile}
                width={960}
                height={1280}
                priority
                alt="Muhammad Ahsan Siddiqui"
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>
          </div>

          <div className="glass float absolute -bottom-5 -left-3 rounded-2xl px-4 py-3 shadow-xl sm:-left-8 !bg-[#0b0d16]/90">
            <p className="text-2xl font-extrabold text-white">5+</p>
            <p className="text-xs text-gray-400">years building software</p>
          </div>
          <div className="glass float absolute -right-3 top-6 rounded-2xl px-4 py-3 shadow-xl [animation-delay:1.5s] sm:-right-8 !bg-[#0b0d16]/90">
            <p className="flex items-center gap-2 text-xs text-gray-300">
              <span className="h-2 w-2 rounded-full bg-[#16f2b3]"></span> Live: WealthNX AI
            </p>
            <p className="mt-0.5 text-xs text-gray-500">Flutter &middot; Node.js &middot; PostgreSQL</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
