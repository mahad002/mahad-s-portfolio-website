import {
  RxCode,
  RxMobile,
  RxArrowTopRight,
} from "react-icons/rx";
import { FaUserCog, FaCogs } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa6";
import { LuTestTube2, LuBrain } from "react-icons/lu";
import { GiArtificialIntelligence } from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [
  {
    Icon: CgWebsite,
    title: "Web Development",
    description: "Craft visually appealing and highly functional websites for various purposes.",
  },
  {
    Icon: RxCode,
    title: "Data Analysis",
    description: "Unlock insights from data to drive informed decision-making.",
  },
  {
    Icon: RxMobile,
    title: "Mobile Development",
    description: "Build innovative mobile apps for iOS and Android platforms.",
  },
  {
    Icon: FaCogs,
    title: "DevOps",
    description: "Streamline development processes and enhance collaboration.",
  },
  {
    Icon: LuTestTube2,
    title: "Testing",
    description: "Ensure software quality and reliability through rigorous testing.",
  },
  {
    Icon: FaNetworkWired,
    title: "Networking",
    description: "Design and optimize network infrastructure for maximum efficiency.",
  },
  {
    Icon: FaUserCog,
    title: "Software Engineering",
    description: "Design scalable and robust software solutions to meet business needs.",
  },
  {
    Icon: GiArtificialIntelligence,
    title: "AI Models",
    description: "Develop cutting-edge AI models to solve complex problems.",
  },
  {
    Icon: LuBrain,
    title: "LLMs",
    description: "Implement and deploy advanced machine learning models for various applications.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[340px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-[rgba(65,47,123,0.15)] h-full rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/* icon */}
            <div className="text-4xl text-accent mb-4">
              <item.Icon aria-hidden />
            </div>

            {/* title & description */}
            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>

            {/* arrow */}
            <div className="text-3xl">
              <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
