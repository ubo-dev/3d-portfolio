import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const CV = () => {

  return (
    <div className="w-full h-200 flex justify-center items-center">
        <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className="w-full max-w-3xl bg-black-100 p-10 rounded-2xl flex justify-center"
        >
            <a
            href="/umutBilalOkurCV.pdf"
            download
            className="bg-tertiary py-4 px-20 rounded-xl text-white font-bold shadow-md shadow-primary text-lg transition-all hover:scale-105"
            >
            Get My CV!
            </a>
        </motion.div>
    </div>

  );
};

export default SectionWrapper(CV, "cv");
