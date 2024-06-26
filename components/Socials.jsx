import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiGithubLine,
  RiPinterestLine,
} from "react-icons/ri";

import { SiFiverr, SiUpwork } from "react-icons/si";

export const socialData = [
  {
    name: "YouTube",
    link: "http://youtube.com/@mahad.08",
    Icon: RiYoutubeLine,
  },
  {
    name: "Instagram",
    link: "https://instagram.com/mahad.08",
    Icon: RiInstagramLine,
  },
  {
    name: "Fiverr",
    link: "https://www.fiverr.com/mahadsheikh08",
    Icon: SiFiverr,
  },
  {
    name: "Upwork",
    link: "https://www.upwork.com/freelancers/~01a9f18117e0380a9c",
    Icon: SiUpwork,
  },
  {
    name: "Github",
    link: "https://github.com/mahad002",
    Icon: RiGithubLine,
  },
  // {
  //   name: "Facebook",
  //   link: "https://facebook.com",
  //   Icon: RiFacebookLine,
  // },
  // {
  //   name: "Dribbble",
  //   link: "https://dribbble.com",
  //   Icon: RiDribbbleLine,
  // },
  // {
  //   name: "Pinterest",
  //   link: "https://pinterest.com",
  //   Icon: RiPinterestLine,
  // },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
