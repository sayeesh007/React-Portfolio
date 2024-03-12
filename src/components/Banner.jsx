import { FaGithub, FaLinkedin, FaInstagram, FaClipboard } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Banner = () => {
  return (
    <section
      className="section max-h-[100vh] lg:max-h-[70vh] flex items-center lg:gap-x-12"
      id="banner"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-center">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[1] lg:text-[75px] py-5 lg:py-1"
            >
              SAYEESH <span className="hidden lg:inline-block">NAIK</span>
            </motion.h1>
            <div className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="text-white mr-4"
              >
                I am a
              </motion.div>
              <motion.div
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                <TypeAnimation
                  sequence={[
                    "Web Developer",
                    2000,
                    "UI-Ux Designer",
                    2000,
                    "Js Developer",
                    2000,
                    "React Developer",
                    2000,
                    "Frontend Dev",
                    2000,
                    // "FullStack Developer",
                    // 2000,
                  ]}
                  speed={50}
                  className="text-accent"
                  wrapper="span"
                  repeat={Infinity}
                />
              </motion.div>
            </div>
            <motion.p
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8"
            >
              Experienced Software Engineer Specializing in JavaScript and
              React.js
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mx-auto mb-5 flex lg:flex-row gap-3 lg:justify-start justify-center items-center"
            >
                <a href="https://www.linkedin.com/in/sayeesh-naik-8537061a5/" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-sm lg:btn-lg flex justify-center items-center">
                Linkedin <FaLinkedin />
              </button>
                </a>
                <a href="https://drive.google.com/file/d/1OjSDq3lbULQUSczdRcGSpGxcUtO9bL-e/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-sm lg:btn-lg flex justify-center items-center">
                Resume <FaClipboard />
              </button>
                </a>
            </motion.div>
            
            <motion.div
              variants={fadeIn("left", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex justify-center gap-7 items-center translate-x-2 py-5 lg:py-0"
            >
              <a href="https://github.com/sayeesh007" target="_blank">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/sayeesh007/" target="_blank">
                <FaInstagram />
              </a>
            </motion.div>
          </div>
          {/* <div className="rounded-full mx-auto max-w-[400px]">
          <img src={cool} alt="" />
        
        </div> */}
        </div>
      </div>
    </section>
  );
};

export default Banner;
