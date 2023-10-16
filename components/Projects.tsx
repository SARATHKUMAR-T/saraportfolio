"use client";
import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";

const items = [
  {
    id: "1",
    title: "Globill",
    img: "/assets/globill.png",

    dsec: "Globill is an inventory app",
  },
  {
    id: "1",
    title: "Globill",
    img: "/assets/globill.png",

    dsec: "Globill is an inventory app",
  },
  {
    id: "1",
    title: "Globill",
    img: "/assets/globill.png",
    dsec: "Globill is an inventory app",
  },
  {
    id: "1",
    title: "Globill",
    img: "/assets/globill.png",
    dsec: "Globill is an inventory app",
  },
];

const Single = ({ item }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-400, 400]);

  return (
    <section className="min-h-screen scroll-snap-y">
      <div className="max-w-5xl w-full h-screen mx-auto flex flex-col sm:flex-row items-center justify-center gap-[50px] overflow-hidden">
        <div ref={ref}>
          <Image
            src={item.img}
            alt={item.dsec}
            width={500}
            height={500}
            className="flex-1"
          />
        </div>
        <motion.div className="flex-1 flex flex-col gap-[30px] " style={{ y }}>
          <h2 className="text-[72px] font-bold">{item.title}</h2>
          <p className="text-gray-300 text-[20px]">{item.dsec}</p>
          <div className="space-x-3">
            <Button className="w-[200px]">See demo</Button>
            <Button className="w-[200px]">Git hub</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default function Projects() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div ref={ref} className="relative">
      <div className="sticky top-0 left-0 pt-[50px] text-center text-yellow-400 text-6xl font-bold">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="h-[10px] bg-white rounded-full mt-2"
        />
      </div>
      {items.map(items => (
        <Single item={items} key={items.id} />
      ))}
    </div>
  );
}
