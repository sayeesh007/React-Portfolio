import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { RiReactjsLine, RiFlutterFill } from "react-icons/ri";
import { FaCss3, FaJava } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiMongodb } from "react-icons/si";
import { DiHtml5 } from "react-icons/di";

import { fadeIn } from "../variants";

const About = () => {
  const [ref, inview] = useInView({ threshold: 0.5 });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div>
          <h3 className="mx-auto mb-2 text-[30px] font-secondary font-semibold uppercase">
            About me
          </h3>
          <p>
            Highly skilled freelance web and app developer with 2 years of
            expertise in JavaScript, React.js, and React Native. Proven track
            record of delivering top-notch, user-focused solutions on time and
            within budget. Committed to staying updated with industry trends and
            dedicated to providing innovative digital experiences. Strong
            problem-solving abilities and a passion for creating functional,
            visually appealing applications. Ready to contribute technical
            excellence to your team or project.
          </p>
          <div className="flex flex-row gap-x-6 lg:gap-x-10 mt-10 mb-2">
            <div className="flex mx-auto gap-x-10 gap-y-6 mb-12 flex-wrap">
              <div className="flex flex-col lg:flex-row lg:gap-x-5 items-center">
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inview ? <CountUp start={0} end={1.5} duration={3} /> : null}
                </div>
                <div className="font-primary text-center text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>
              <div className="flex flex-col lg:flex-row lg:gap-x-5 items-center">
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inview ? <CountUp start={0} end={15} duration={3} /> : null}+
                </div>
                <div className="font-primary text-center text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>
              <div className="flex flex-col lg:flex-row lg:gap-x-5 items-center">
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inview ? <CountUp start={0} end={7} duration={3} /> : null}
                </div>
                <div className="font-primary text-center text-sm tracking-[2px]">
                  Satisfied <br />
                  Clients
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="my-5 text-[30px] font-secondary font-semibold uppercase">
              <p>Skills</p>
            </div>
            <div className="flex gap-x-5 flex-wrap justify-center items-center">
              <motion.div
                variants={fadeIn("up", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                <a
                  className="flex flex-col justify-center items-center"
                  
                >
                  <DiHtml5 size={40} />
                </a>
                <p className="text-gradient">HTML</p>
              </motion.div>
              <motion.div
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                <a
                  className="flex flex-col justify-center items-center"
                  
                >
                  <FaCss3 size={40} />
                </a>
                <p className="text-gradient">CSS</p>
              </motion.div>
              <motion.div
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                <a
                  className="flex flex-col justify-center items-center"
                  
                >
                  <FaJava size={40} />
                </a>
                <p className="text-gradient">JAVA</p>
              </motion.div>
              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                <a
                  className="flex flex-col justify-center items-center"
                  
                >
                  <RiReactjsLine size={40} />
                </a>
                <p className="text-gradient">REACT</p>
              </motion.div>
              <motion.div
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                <a
                  className="flex flex-col justify-center items-center"
                  
                >
                  <RiFlutterFill size={40} />
                </a>
                <p className="text-gradient">FLUTTER</p>
              </motion.div>
              <motion.div
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                <a
                  className="flex flex-col justify-center items-center"
                  
                >
                  <SiJavascript size={40} />
                </a>
                <p className="text-gradient">Javascript</p>
              </motion.div>
              <motion.div
                variants={fadeIn("up", 0.7)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                <a
                  className="flex flex-col justify-center items-center"
                  
                >
                  <SiMongodb size={40} />
                </a>
                <p className="text-gradient">MongoDb</p>
              </motion.div>
              <motion.div
                variants={fadeIn("left", 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                <a
                  className="flex flex-col justify-center items-center"
                  
                >
                  <SiTailwindcss size={40} />
                </a>
                <p className="text-gradient">Tailwind Css</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
