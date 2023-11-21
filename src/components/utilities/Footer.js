import Link from "next/link";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="flex flex-col  gap-2  w-full py-10 px-4 lg:px-32">
      <hr className="h-[2px] my-2 bg-gradient-to-l from-primary1 to-primary2 border-0 " />
      <div className="flex flex-col lg:flex-row justify-center gap-8 font-semibold text-white">
        <div className="flex gap-4 items-center">
          <span>ihsanasfarih@gmail.com</span>
          <Link
            className="flex gap-1 items-center hover:underline"
            target="_blank"
            href={`https://www.linkedin.com/in/ihsan-asfari-hanifan/`}
          >
            <span>Linkedin</span>
            <AiFillLinkedin />
          </Link>
          <Link
            className="flex gap-1 items-center hover:underline"
            target="_blank"
            href={`https://github.com/Ihsanasfari?tab=repositories`}
          >
            <span>Github</span>
            <AiFillGithub />
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <span>build with</span>
          <div className="flex items-center gap-4 text-primary1">
            <Link
              className="hover:underline hover:underline-offset-2 decoration-primary5"
              target="_blank"
              href={"https://nextjs.org/"}
            >
              Next.js
            </Link>
            <Link
              className="hover:underline hover:underline-offset-2 decoration-primary5"
              target="_blank"
              href={"https://tailwindcss.com/"}
            >
              Tailwind CSS
            </Link>
          </div>
        </div>
        <div className="flex gap-2">
          <span>deployed to</span>

          <Link
            className="hover:underline hover:underline-offset-2 text-primary1 decoration-primary5"
            target="_blank"
            href={"https://vercel.com/"}
          >
            Vercel
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
