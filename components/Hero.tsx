"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
const textVariants: {
  initial: {};
  animate: {};
  scrollButton: {};
} = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildern: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const sliderVariants: {} = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-100%",
    transition: {
      delay: 2,
      repeat: Infinity,
      duration: 30,
      repeatType: "reverse",
    },
  },
};

export default function Hero() {
  return (
    <div
      id="hero"
      className="z-10 px-4  bg-gradient-to-b from-[#0c0c1d] to-[#111132] relative flex items-center justify-center flex-col sm:flex-row gap-y-6 w-full max-w-full h-screen overflow-hidden "
    >
      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="flex-1 flex items-center justify-center flex-col gap-6"
      >
        <motion.h3
          variants={textVariants}
          className="text-yellow-500 text-xl sm:text-3xl opacity-70 tracking-[5px] font-bold"
        >
          SARATH KUMAR
        </motion.h3>
        <motion.h1
          variants={textVariants}
          className="text-4xl sm:text-6xl md:text-7xl font-bold text-center"
        >
          Web Developer <br />
          and UI designer
        </motion.h1>
        <motion.div variants={textVariants} className="space-x-7">
          <Button variant="default" asChild className=" border-1">
            <Link href="#projects" className="text-gray-800">
              See the Latest Works
            </Link>
          </Button>
          <Button variant="ghost" className="text-white border-1">
            <Link href="#contact">Contact Me</Link>
          </Button>
        </motion.div>
        <motion.div variants={textVariants} animate="scrollButton">
          <Link href="#about">
            <Image
              src="/scroll.png"
              height={38}
              width={38}
              alt="scroll-image"
              className="mt-4"
            />
          </Link>
        </motion.div>
      </motion.div>

      <div className="flex-1 flex items-center justify-center">
        <Image src="/s1.jpg" alt="sarath photo" height={300} width={300} />
      </div>
      <motion.p
        variants={sliderVariants}
        initial="initial"
        animate="animate"
        className="-z-10 absolute font-bold width-[50%] text-[50vh] -bottom-[120px] whitespace-nowrap text-[#ffffff09]"
      >
        Unconventional{" "}
        <span className="text-yellow-600 opacity-10">thinker!</span>
      </motion.p>
    </div>
  );
}
