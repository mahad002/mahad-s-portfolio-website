import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { RiFlutterFill, RiVuejsLine } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaFigma, FaDocker, FaJava, FaPython, 
  FaNodeJs, FaAngular, FaSketch, FaInvision, FaSwift, FaPhp, FaLaravel, FaAws, FaMicrosoft, 
  FaGoogle, } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { SiNextdotjs, SiFramer, SiAdobelightroom, SiAdobephotoshop, SiCanva, SiMysql, SiPostgresql, SiCplusplus, SiFirebase, SiSupabase, 
  SiKubernetes, SiJenkins, SiSelenium, SiCypress, SiExpress, SiTailwindcss, SiKotlin, SiRubyonrails, SiTerraform, SiMocha, 
  SiJest, SiMongodb, SiRedis, SiAmazondynamodb, SiTensorflow, SiPytorch, SiScikitlearn, SiKeras, SiOpenai, SiIbm } from "react-icons/si";
import { DiDatabase } from "react-icons/di";
import { AiOutlineGitlab } from "react-icons/ai";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

//  data
export const aboutData = [
  {
    "title": "skills",
    "info": [
      {
        "title": "Web Development",
        "icons": [
          { "name": "HTML5", "icon": FaHtml5 },
          { "name": "CSS3", "icon": FaCss3 },
          { "name": "JavaScript", "icon": FaJs },
          { "name": "Angular", "icon": FaAngular },
          { "name": "React", "icon": FaReact },
          { "name": "Next.js", "icon": SiNextdotjs },
          { "name": "WordPress", "icon": FaWordpress },
          { "name": "Vue.js", "icon": RiVuejsLine },
          { "name": "Bootstrap", "icon": FaBootstrap },
          { "name": "Tailwind CSS", "icon": SiTailwindcss }
        ]
      },
      {
        "title": "UI/UX Design",
        "icons": [
          { "name": "Figma", "icon": FaFigma },
          { "name": "Adobe Lightroom", "icon": SiAdobelightroom },
          { "name": "Adobe Photoshop", "icon": SiAdobephotoshop },
          { "name": "Canva", "icon": SiCanva },
          { "name": "Sketch", "icon": FaSketch },
          { "name": "InVision", "icon": FaInvision }
        ]
      },
      {
        "title": "Mobile Development",
        "icons": [
          { "name": "Flutter", "icon": RiFlutterFill },
          { "name": "Firebase", "icon": IoLogoFirebase },
          { "name": "React Native", "icon": FaReact },
          { "name": "Swift", "icon": FaSwift },
          { "name": "Kotlin", "icon": SiKotlin }
        ]
      },
      {
        "title": "Backend",
        "icons": [
          { "name": "Node.js", "icon": FaNodeJs },
          { "name": "Express.js", "icon": SiExpress },
          { "name": "SQL", "icon": DiDatabase },
          { "name": "MySQL", "icon": SiMysql },
          { "name": "PostgreSQL", "icon": SiPostgresql },
          { "name": "Odoo", "icon": AiOutlineGitlab },
          { "name": "Java", "icon": FaJava },
          { "name": "Python", "icon": FaPython },
          { "name": "C/C++", "icon": SiCplusplus },
          { "name": "Ruby on Rails", "icon": SiRubyonrails },
          { "name": "PHP", "icon": FaPhp },
          { "name": "Laravel", "icon": FaLaravel }
        ]
      },
      {
        "title": "DevOps",
        "icons": [
          { "name": "Docker", "icon": FaDocker },
          { "name": "Kubernetes", "icon": SiKubernetes },
          { "name": "GitHub Actions", "icon": AiOutlineGitlab },
          { "name": "Jenkins", "icon": SiJenkins },
          { "name": "AWS", "icon": FaAws },
          { "name": "Azure", "icon": FaMicrosoft },
          { "name": "Terraform", "icon": SiTerraform }
        ]
      },
      {
        "title": "Testing",
        "icons": [
          { "name": "Cypress", "icon": SiCypress },
          { "name": "Selenium", "icon": SiSelenium },
          { "name": "JUnit", "icon": DiDatabase },
          { "name": "Mocha", "icon": SiMocha },
          { "name": "Jest", "icon": SiJest }
        ]
      },
      {
        "title": "Databases & BaaS",
        "icons": [
          { "name": "Firebase", "icon": SiFirebase },
          { "name": "Supabase", "icon": SiSupabase },
          { "name": "MongoDB", "icon": SiMongodb },
          { "name": "Redis", "icon": SiRedis },
          { "name": "DynamoDB", "icon": SiAmazondynamodb }
        ]
      },
      {
        "title": "AI & Machine Learning",
        "icons": [
          { "name": "TensorFlow", "icon": SiTensorflow },
          { "name": "PyTorch", "icon": SiPytorch },
          { "name": "Scikit-Learn", "icon": SiScikitlearn },
          { "name": "Keras", "icon": SiKeras },
          { "name": "OpenAI", "icon": SiOpenai }
        ]
      },
      {
        "title": "Cloud Computing",
        "icons": [
          { "name": "AWS", "icon": FaAws },
          { "name": "Google Cloud", "icon": FaGoogle },
          { "name": "Azure", "icon": FaMicrosoft },
          { "name": "IBM Cloud", "icon": SiIbm }
        ]
      }
    ]
  },
  {
    title: "awards",
    info: [
      {
        title: "National Science Bowl Islamabad Winners",
        stage: "2020",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Flutter Developer - Cognitive Healthcare International",
        stage: "2022",
      },
      {
        title: "Full Stack Developer - Cognitive Healthcare International",
        stage: "2023",
      },
      {
        title: "Full Stack Developer - DETECON Consulting",
        stage: "2023",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Full Stack Development - Code with Mosh, CHI",
        stage: "2023",
      },
      {
        title: "Mobile Development - SimpliLearn, CHI",
        stage: "2022",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full xl:py-16 py-20 text-center xl:text-left">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        {/* <Avatar /> */}
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center mt-7">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Believe <span className="text-accent">practical</span> build
            to prove.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            1 year ago, I began freelancing as a developer. Since then, I've
            done remote work for agencies, consulted for startups, and
            collaborated on digital products for business and consumer use.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience.
                </div>
              </div>

              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={120} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients.
                </div>
              </div>

              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={200} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects.
                </div>
              </div>

              {/* awards */}
              {/* <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={0} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning awards.
                </div>
              </div> */}
            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px] xl:mb-0 mb-48"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <button
                key={itemI}
                onClick={() => setIndex(itemI)}
              >
                <span className="block"></span>
              </button>
            ))}
          </div>
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <button
                key={itemI}
                onClick={() => setIndex(itemI)}
              >
                <span className="block"></span>
              </button>
            ))}
          </div>
          <div
            className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 pointer-events: none"
          >
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                <span className="block">{item.title}</span>
              </div>
            ))}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
              >
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>

                <div className="flex flex-wrap gap-x-4 justify-center">
                  {/* icons */}
                  {item.icons?.map((iconItem, iconI) => {
                    const IconComponent = iconItem.icon;
                    return (
                      <div key={iconI} className="text-xl text-white tooltip">
                        <IconComponent />
                        <span className="tooltiptext">{iconItem.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
