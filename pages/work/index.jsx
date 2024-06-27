import { motion } from "framer-motion";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider";
import { fadeIn } from "../../variants";
import { BsArrowRight } from "react-icons/bs";

const Work = () => {
  const handleRedirect = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="h-full py-28 flex items-center relative">
      <Circles />
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 text-gray-100 text-center mb-8"
        >
          My <span className="text-accent">Work</span>
        </motion.h2>
        <div className="flex flex-col xl:flex-row gap-x-8 justify-center">
          {/* First column */}
          <div className="flex-1">
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-6 max-w-[400px] mx-auto lg:mx-0 text-gray-300 leading-relaxed"
            >
              My journey in web and app development has been dynamic and enriching. I specialize in a wide array of technologies including <span className="font-bold">ReactJS, Angular, Next.js, Node.js, Express, MongoDB, Firebase</span>, and more. Over the years, I've successfully delivered over 100 projects across various domains, collaborating closely with clients to bring their ideas to life.
            </motion.p>
          </div>
          <div className="border-l border-gray-700 mx-4 xl:hidden"></div>
          {/* Divider for mobile view */}
          <div className="border-t border-gray-700 my-4 xl:border-none xl:my-0"></div>

          {/* Second column */}
          <div className="flex-1">
            <motion.p
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-6 max-w-[400px] mx-auto lg:mx-0 text-gray-300 leading-relaxed"
            >
              On <span className="font-bold text-accent">Fiverr</span>, I have successfully completed over <span className="font-bold">100 projects</span> with more than <span className="font-bold">60 clients</span>, and direct orders have added a new dimension to my experience.
              <br />
              <br />
              <span className="font-bold text-accent">Press the button My Work to see my portfolio work!</span>
            </motion.p>
          </div>
          <div className="border-l border-gray-700 mx-4 xl:hidden"></div>
          {/* Divider for mobile view */}
          <div className="border-t border-gray-700 my-4 xl:border-none xl:my-0"></div>

          {/* Third column */}
          <div className="flex-1">
            <motion.p
              variants={fadeIn("up", 0.8)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-6 max-w-[400px] mx-auto lg:mx-0 text-gray-300 leading-relaxed"
            >
              Recently, I've delved into the exciting field of AI, working with <span className="font-bold">PyTorch, TensorFlow, Keras, Scikit-learn</span>, and <span className="font-bold">OpenAI</span>. I've also expanded my DevOps skills with <span className="font-bold">Kubernetes, Docker, Jenkins</span>, and <span className="font-bold">GitHub Actions</span>.
            </motion.p>
            <motion.p
              variants={fadeIn("up", 1.0)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0 text-gray-300 leading-relaxed"
            >
              {/* Recently, I built a website for <span className="font-bold">Ensemble-AI</span> and am now working on creating my own website. */}
            </motion.p>
          </div>
        </div>

        {/* Slider */}
        {/* <motion.div
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full xl:max-w-[65%]"
        >
          <WorkSlider />
        </motion.div> */}

        {/* Floating Button for Mobile View */}
        <div className="flex justify-center mt-8 xl:hidden">
          <button
            type="button"
            className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
            onClick={() => handleRedirect("https://www.fiverr.com/users/mahadsheikh08/portfolio")}
          >
            <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
              My Work
            </span>
            <BsArrowRight
              className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
              aria-hidden
            />
          </button>
        </div>
      </div>
      <Bulb />

      {/* Floating Button for Desktop View */}
      <button
        type="button"
        className="hidden xl:flex fixed bottom-10 right-10 btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 items-center justify-center overflow-hidden hover:border-accent group"
        onClick={() => handleRedirect("https://www.fiverr.com/users/mahadsheikh08/portfolio")}
      >
        <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
          My Work
        </span>
        <BsArrowRight
          className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
          aria-hidden
        />
      </button>
    </div>
  );
};

export default Work;
