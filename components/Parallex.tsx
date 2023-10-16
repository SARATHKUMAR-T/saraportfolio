"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Parallex({ type }: { type: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const ytext = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  return (
    <motion.div
      className="w-full h-screen relative flex items-center justify-center overflow-hidden"
      ref={ref}
      style={{
        background:
          type === "service"
            ? "linear-gradient(180deg,#111132,#0c0c1d)"
            : "linear-gradinet(180deg,#11132,#505064)",
      }}
    >
      <motion.h1
        style={{ y: ytext }}
        className="text-4xl font-bold sm:text-8xl "
      >
        {type === "services" ? "Who Am I?" : "What I Do?"}
      </motion.h1>
      <motion.div className="absolute w-full h-full  bg-bottom bg-cover bg-[url('/assets/m1.png')] z-30 "></motion.div>
      <motion.div
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/assets/planets.png" : "/assets/sun.png"
          })`,
        }}
        className="absolute w-full h-full  bg-bottom bg-cover bg-[url('/assets/planets.png')] z-20 "
      ></motion.div>
      <motion.div
        style={{ x: yBg }}
        className="absolute w-full h-full  bg-bottom bg-cover bg-[url('/assets/stars.png')] z-10 "
      ></motion.div>
    </motion.div>
  );
}
