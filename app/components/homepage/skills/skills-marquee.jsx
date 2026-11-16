'use client';

// react-fast-marquee touches `document` on import, so it must live in a client component.
import Marquee from 'react-fast-marquee';

export default function SkillsMarquee({ children }) {
  return (
    <Marquee gradient={false} speed={60} pauseOnHover={true} pauseOnClick={true} delay={0} play={true} direction="left">
      {children}
    </Marquee>
  );
}
