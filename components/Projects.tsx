"use client";
import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const items = [
  {
    id: "1",
    title: "Globill",
    img: "/assets/globill.png",

    dsec: " Globill allows user to manage their inventory faster and better.Users can track their sales and purchases to do effective management.",
    links: [
      { url: "https://globill.netlify.app/", label: "Live Demo" },
      {
        url: "https://github.com/SARATHKUMAR-T/inventory_backend",
        label: "Back End",
      },
      {
        url: "https://github.com/SARATHKUMAR-T/GloBill-FrontEnd",
        label: "Front End",
      },
    ],
  },

  {
    id: "2",
    title: "Globill",
    img: "/assets/globill.png",

    dsec: "Globill is an inventory app",
    links: [
      { url: "https://globill.netlify.app/", label: "Live Demo" },
      {
        url: "https://github.com/SARATHKUMAR-T/inventory_backend",
        label: "Back End",
      },
      {
        url: "https://github.com/SARATHKUMAR-T/GloBill-FrontEnd",
        label: "Front End",
      },
    ],
  },
  {
    id: "3",
    title: "Globill",
    img: "/assets/globill.png",
    dsec: "Globill is an inventory app",
    links: [
      { url: "https://globill.netlify.app/", label: "Live Demo" },
      {
        url: "https://github.com/SARATHKUMAR-T/inventory_backend",
        label: "Back End",
      },
      {
        url: "https://github.com/SARATHKUMAR-T/GloBill-FrontEnd",
        label: "Front End",
      },
    ],
  },
  {
    id: "4",
    title: "Globill",
    img: "/assets/globill.png",
    dsec: "Globill is an inventory app",
    links: [
      { url: "https://globill.netlify.app/", label: "Live Demo" },
      {
        url: "https://github.com/SARATHKUMAR-T/inventory_backend",
        label: "Back End",
      },
      {
        url: "https://github.com/SARATHKUMAR-T/GloBill-FrontEnd",
        label: "Front End",
      },
    ],
  },
];

const Single = ({
  item,
}: {
  item: {
    id: string;
    img: string;
    dsec: string;
    title: string;
    links: {
      url: string;
      label: string;
    }[];
  };
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-400, 400]);

  return (
    <section className="min-h-screen  scroll-snap-y py-10">
      <div className="max-w-5xl w-full min-h-screen mx-auto flex flex-col sm:flex-row items-center justify-center gap-[50px] overflow-hidden">
        <div ref={ref} className="w-[90%] sm:flex-1 px-4">
          <Image src={item.img} alt={item.dsec} width={500} height={500} />
        </div>
        <motion.div
          className="flex-1 px-4 flex flex-col gap-6 !transform-none !sm:transform-all "
          style={{ y }}
        >
          <h2 className=" text-5xl sm:text-6xl font-bold">{item.title}</h2>
          <p className="text-gray-300 text-[20px]">{item.dsec}</p>
          <div className="flex justify-center flex-wrap gap-3">
            {item.links?.map((links, id) => (
              <Button key={id} className="w-[200px] " asChild>
                <Link rel="noreferrer" target="_blank" href={links.url}>
                  {links.label}
                </Link>
              </Button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <motion.div ref={ref} className="relative ">
      <div className="sticky  top-10 left-0 pt-[calc(100vh-100px)] sm:pt-[50px] text-center text-yellow-400 text-4xl  font-bold">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="h-[8px] bg-yellow-400 rounded-full mt-2"
        />
      </div>
      {items.map(item => (
        <Single item={item} key={item.id} />
      ))}
    </motion.div>
  );
}
