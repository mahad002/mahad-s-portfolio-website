import { motion } from "framer-motion";
import 'react-tooltip/dist/react-tooltip.css'

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";


import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="h-full xl:pt-0 pt-20">
      {/* text */}
      <div className="w-full h-full"> {/*bg-gradient-to-r from-primary/10 via-black/30 to-black/10 */}
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Transforming Ideas <br /> Into{" "}
            <span className="text-accent">Digital Reality</span>
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            A Highly Motivated Software Engineer, who loves Tech! <br/><br/>
            &nbsp;&nbsp;&nbsp;Passionate and innovative problem solver. <br/>
            &nbsp;&nbsp;&nbsp;Quick learner, team player, and creative thinker. <br/>
            &nbsp;&nbsp;&nbsp;Committed to quality and positive impact. <br/>
            &nbsp;&nbsp;&nbsp;2+ years of experience in diverse projects. <br/><br/>

            {/* My Skills:<br/>
            &nbsp;&nbsp;&nbsp;Proficient in Flutter, ReactJS, Angular, NextJS, Node/Express, HTML, <br/>
            &nbsp;&nbsp;&nbsp;CSS, JavaScript, SQL, and MySQL, Firebase, Supabase, Postgres, <br/>
            &nbsp;&nbsp;&nbsp;Odoo, Java, Python, C/C++, Docker, Kubernetes, GitHub Actions, <br/>
            &nbsp;&nbsp;&nbsp;Jenkins, Cypress, Selenium, JUnit, Figma.<br/><br/> */}
            
            Thank you!
        </motion.p>


          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1280px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"
          aria-hidden
        />

        {/* particles */}
        <ParticlesContainer />

        {/* avatar */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
