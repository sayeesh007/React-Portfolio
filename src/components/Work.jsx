import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from "/portfolio-img1.png";
import Img2 from "/portfolioimg.png";
import Img3 from "/portfolio-img.png";

const Work = () => {
  return (
    <section className="section" id="projects">
      <div className="container mx-auto">
        <div>
          <div>
            <div>
              <h2 className="mx-auto mb-2 text-[30px] font-secondary font-semibold uppercase">
                My latest Works
                <br />
              </h2>
              <p>
                In the last two years, I've excelled in web and mobile app
                development, with a focus on JavaScript, React.js, and React
                Native. I contributed to an e-commerce platform, optimizing
                performance and created a cross-platform ed-tech app catering to
                VTU students, aimed at swiftly providing essential materials,
                showcasing my expertise in delivering top-quality solutions.
              </p>
            </div>
            {/* all images */}
            <div className="flex flex-wrap gap-5 justify-center">
              {/* single image */}
              <motion.div
                variants={fadeIn("left", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="group relative overflow-hidden max-h-60 max-w-md border-2 border-white/50 rounded-xl"
              >
                <a href="https://github.com/sayeesh007" target="blank">

                {/* overlay */}
                <div
                  className="group-hover:bg-black/70 w-full h-full
                 absolute z-40 transition-all duration-300"
                ></div>
                {/* img */}
                <div className="group-hover:scale-125 transition-all duration-500 ">
                  <img src={Img1} alt="" className="object-cover "/>
                </div>
                {/* title */}
                <div className="absolute bottom-full left-12 group-hover:bottom-28 transition-all duration-500 z-50">
                  <span className="text-gradient mb-5"> JavaScript Projects</span>
                </div>
                {/* pretitle */}
                <div className="absolute bottom-full left-12 group-hover:bottom-20 transition-all duration-700 z-50">
                  <span className="text-xl"></span>
                </div>
                </a>
              </motion.div>
              <motion.div
                variants={fadeIn("right", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="group relative overflow-hidden max-h-60 max-w-md border-2 border-white/50 rounded-xl"
              >
                <a href="https://github.com/sayeesh007" target="blank">
                {/* overlay */}
                <div
                  className="group-hover:bg-black/70 w-full h-full
                 absolute z-40 transition-all duration-300"
                ></div>
                {/* img */}
                <div className="group-hover:scale-125 transition-all duration-500 ">
                  <img src={Img2} alt="" />
                </div>
                {/* title */}
                <div className="absolute bottom-full left-12 group-hover:bottom-28 transition-all duration-500 z-50">
                  <span className="text-gradient mb-5"> React Projects</span>
                </div>
                {/* pretitle */}
                <div className="absolute bottom-full left-12 group-hover:bottom-20 transition-all duration-700 z-50">
                  <span className="text-xl"></span>
                </div>
                </a>
              </motion.div>
              <motion.div
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="group relative overflow-hidden max-h-60 max-w-md border-2 border-white/50 rounded-xl"
              >
                <a href="https://play.google.com/store/apps/details?id=com.chronovesta.vtumaster&hl=en_IN&gl=US" target="blank">
                {/* overlay */}
                <div
                  className="group-hover:bg-black/70 w-full h-full
                 absolute z-40 transition-all duration-300"
                ></div>
                {/* img */}
                <div className="group-hover:scale-125 transition-all duration-500 ">
                  <img src={Img3} alt="" />
                </div>
                {/* title */}
                <div className="absolute bottom-full left-12 group-hover:bottom-28 transition-all duration-500 z-50">
                  <span className="text-gradient mb-5"> Flutter Project</span>
                </div>
                {/* pretitle */}
                <div className="absolute bottom-full left-12 group-hover:bottom-20 transition-all duration-700 z-50">
                  <span className="text-xl">Vtu Masters</span>
                </div>
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
