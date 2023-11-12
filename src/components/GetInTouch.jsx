import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const GetInTouch = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <b className=" mx-auto flex flex-col justify-center md:w-[40%] p-2">
        <p>📞 ➡ 01784529661</p>
        <p>🏠 ➡ Narsingdi,Dhaka</p>
        <p>&nbsp;✉ ➡ nasirmia12901290@gmail.com</p>
      </b>
    </motion.section>
  );
};

export default GetInTouch;
