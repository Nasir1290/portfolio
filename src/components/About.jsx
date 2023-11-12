import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction.</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[#c9b3f6] text-[17px] max-w-3xl leading-[30px]"
      >
        {/* I am an enthusiastic software developer with a strong foundation in
        computer fundamentals. I have worked on projects addressing real-world
        challenges . I like understanding the underlying intricacies and
        architectures. Committed and diligent, I have been actively involved in
        projects and continuous learning throughout my college journey. I am
        looking for an opportunity to work in a challenging environment to prove
        my skills and utilize my knowledge and intelligence in the growth of the
        organization. */}
        Hello guys!! I am <b> Nasir Mollah </b> from <b>Bangladesh</b>. Currently I'm a &nbsp;
        <b>Diploma student of CST</b> (Computer Science & Technology). I'm a passionate
        web developer with a keen eye for detail, and a drive to create elegant,
        efficient, and user-friendly web app. With over <b>2+</b> years of experience
        in web development, I've honed my skills in a variety of technologies,
        including <b>ReactJs, NextJs, Nodejs,ExpressJs,Firebase, Javascript es6+,Redux
        and MongoDb</b>. Now I am learning NextJs.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
