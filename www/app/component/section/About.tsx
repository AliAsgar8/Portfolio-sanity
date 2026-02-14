"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import {
  PortableText,
  PortableTextBlock,
  PortableTextComponents,
} from "next-sanity";
import { useRef } from "react";
import SkillCard from "./SkillCard";
import Image from "next/image";
import { AboutCard, Skill } from "@/app/src/type/sanity";
import AboutSection from "./AboutSection";

type AboutProps = {
  image: string;
  aboutContent: PortableTextBlock[];
  content: PortableTextBlock[];
  card: AboutCard[];
  skill: Skill[];
};

export default function About({
  content,
  image,
  card,
  aboutContent,
  skill,
}: AboutProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  /* ---------------- SECTION ANIMATION ---------------- */
  const sectionScale = useSpring(
    useTransform(scrollYProgress, [0, 0.25], [0.85, 1]),
    { stiffness: 80, damping: 20 },
  );

  const sectionRadius = useSpring(
    useTransform(scrollYProgress, [0, 0.25], ["40px", "0px"]),
    { stiffness: 80, damping: 20 },
  );

  /* ---------------- IMAGE EXPAND ---------------- */
  const imageWidthValue = useTransform(
    scrollYProgress,
    [0.15, 0.35],
    ["30%", "90%"],
  );

  const imageWidth = useSpring(imageWidthValue, {
    stiffness: 60,
    damping: 25,
  });

  /* ---------------- SVG PATH ---------------- */
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const components: PortableTextComponents = {
    block: {
      h1: ({ children }) => (
        <h1 className="text-5xl font-semibold">{children}</h1>
      ),
      h2: ({ children }) => (
        <h2 className="bg-linear-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent text-4xl font-medium">
          {children}
        </h2>
      ),

      normal: ({ children }) => <p className="text-xl">{children}</p>,
    },
  };

  return (
    <>
      <AboutSection aboutContent={aboutContent} components={components} />
      <motion.section
        id="about"
        ref={containerRef}
        className="relative bg-[#1e1e1e] overflow-hidden border-t border-white"
      >
        <svg
          viewBox="0 0 272 529"
          fill="none"
          className="absolute right-0 top-0 h-full z-40"
        >
          <motion.path
            d="M270.594 14.9586C270.594 14.9586 189.594 20.9586 136.594 49.9587C83.594 78.9588 64.5938 118.958 70.5939 154.959C76.5939 190.959 97.5938 256.959 51.5939 279.959C5.59406 302.959 11.5938 317.959 23.594 332.959C35.5943 347.959 133.594 363.959 125.594 418.959C117.594 473.959 45.5938 528.959 31.5938 509.959"
            stroke="#E3FF54"
            strokeWidth="10"
            pathLength={1}
            style={{ pathLength }}
          />
        </svg>

        {/* MAIN SECTION */}
        <motion.div
          style={{ scale: sectionScale, borderRadius: sectionRadius }}
          className="bg-[rgb(231,231,231)] w-screen pb-24 relative z-20"
        >
          <div className="overflow-hidden mt-20">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 15,
                ease: "linear",
              }}
              className="flex whitespace-nowrap text-[6vw] font-bold uppercase text-neutral-500 text-xl"
            >
              <span className="pr-16">Frontend Developer • Creative UI •</span>
              <span className="pr-16">Frontend Developer • Creative UI •</span>
            </motion.div>
          </div>
          {/* IMAGE */}
          <div className="flex justify-center">
            <motion.div
              style={{ width: imageWidth }}
              className="w-full flex justify-center items-center overflow-hidden rounded-xl mt-20"
            >
              <Image
                src={image}
                width={1000}
                height={800}
                alt="Portfolio Image"
                priority
                className="object-cover sm:h-screen w-screen"
              />
            </motion.div>
          </div>
          {/* TEXT */}
          <div className="container grid grid-cols-12 pt-10">
            <div className="grid col-span-6 gap-y-5">
              <PortableText value={content} components={components} />
            </div>
          </div>

          {/* CONTINUOUS TEXT */}
          <div className="container flex flex-wrap gap-2 sm:gap-3 pt-2">
            {skill.map((item, index) => (
              <span
                key={index}
                className="
                px-3 sm:px-4 py-1.5
                text-xs sm:text-sm
                font-medium
                bg-gray-100 text-gray-700
                rounded-full border border-gray-200
                hover:bg-black hover:text-white
                transition-all duration-300
              "
              >
                {item.title}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.section>
      {/* SKILL CARD */}
      {/* <SkillCard card={card} /> */}
    </>
  );
}
