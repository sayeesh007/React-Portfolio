import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("")
  // const [email,setEmail]=useState('');
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-around gap-x-4">
          {/* text */}
          <div>
            <motion.div
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex-1"
            >
              <div>
                <h4 className="text-xl uppercase text-accent font-medium mb-2 -tracking-wide">
                  Get in Touch
                </h4>
                <h2 className="text-[45px] uppercase lg:text-[90px] leading-none mb-12">
                  Let's Work <br />
                  together
                </h2>
              </div>
            </motion.div>
          </div>
          {/* form */}
          <div className="flex-col lg:w-[35vw]">
          <motion.form
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 border rounded-2xl flex flex-col gap-6 p-6 items-start"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={e=>setEmail(e.target.value)}
              required
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="email"
              placeholder="subjest"
              value={subject}
              onChange={e=>setSubject(e.target.value)}
              required
            />
            <textarea
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              name=""
              placeholder="Your message"
              value={message}
              onChange={e=>setMessage(e.target.value)}
              required
            ></textarea>
           
          </motion.form>
          <div className="flex flex-row justify-center">
              <a href={`mailto:sayeeshgk@gmail.com?subject=${subject}?body=${message}` }  target="_blank" rel="noopener noreferrer">

              <button className="btn btn-sm lg:btn-sm my-7" >Send message </button>
              </a>
            </div>
            </div>
        </div>
      </div>
          
          
            
    </section>
  );
};

export default Contact;
