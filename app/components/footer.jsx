// @flow strict
import Link from 'next/link';
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            © {new Date().getFullYear()} Portfolio of<Link target="_blank" href="https://www.linkedin.com/in/ahsan-siddiqui1903" className="text-[#16f2b3]">Muhammad Ahsan Siddiqui</Link>
          </p>
          <div className="flex items-center gap-5">
            <Link
              target="_blank"
              href="https://github.com/ahsansiddiqui-113"
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
            >
              <FaGithub />
              <span>GitHub</span>
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/ahsan-siddiqui1903"
              className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Footer;