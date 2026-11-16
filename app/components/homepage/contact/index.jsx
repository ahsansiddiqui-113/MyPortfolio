// @flow strict
import { personalData } from '@/utils/data/personal-data';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaStackOverflow } from 'react-icons/fa';
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import SectionHeading from '../../ui/section-heading';
import ContactForm from './contact-form';

const details = [
  { Icon: MdAlternateEmail, label: 'Email', value: personalData.email, href: `mailto:${personalData.email}` },
  { Icon: IoMdCall, label: 'Phone', value: personalData.phone, href: `tel:${personalData.phone}` },
  { Icon: CiLocationOn, label: 'Location', value: personalData.address },
];

const socials = [
  { Icon: IoLogoGithub, label: 'GitHub', href: personalData.github },
  { Icon: BiLogoLinkedin, label: 'LinkedIn', href: personalData.linkedIn },
  { Icon: FaStackOverflow, label: 'Stack Overflow', href: personalData.stackOverflow },
];

function ContactSection() {
  return (
    <section id="contact" className="relative py-16 lg:py-24">
      <SectionHeading index="07" eyebrow="Contact" title="Let's work together">
        Have a project, a role or a question? Send a message and I will get back to you.
      </SectionHeading>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <ContactForm />

        <div className="flex flex-col gap-4">
          {details.map(({ Icon, label, value, href }) => {
            const body = (
              <>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#16f2b3]/10 text-[#16f2b3]">
                  <Icon size={20} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-gray-500">{label}</span>
                  <span className="block truncate text-sm text-white sm:text-base">{value}</span>
                </span>
              </>
            );
            return href ? (
              <a key={label} href={href} className="glass glass-hover flex items-center gap-4 rounded-2xl p-4 no-underline">{body}</a>
            ) : (
              <div key={label} className="glass flex items-center gap-4 rounded-2xl p-4">{body}</div>
            );
          })}

          <div className="mt-2 flex items-center gap-3">
            {socials.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="glass glass-hover flex h-12 w-12 items-center justify-center rounded-full text-gray-300 hover:text-[#16f2b3]"
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
