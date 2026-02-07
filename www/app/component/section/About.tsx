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
import { AboutCard } from "@/app/src/type/sanity";

type AboutProps = {
  image: string;
  content: PortableTextBlock[];
  card: AboutCard[];
};

export default function About({ content, image, card }: AboutProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end start"],
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
    [0.15, 0.45],
    ["20%", "70%"],
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
      <motion.section
        id="about"
        ref={containerRef}
        className="relative bg-neutral-900 overflow-hidden"
      >
        {/* SVG */}
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
          <motion.div
            // style={{ width: imageWidth }}
            className="flex justify-center overflow-hidden rounded-xl mt-20"
          >
            <div className="h-200 w-435 border-2 border-black"></div>
            {/* <Image
              src={image}
              width={1000}
              height={800}
              alt="Portfolio Image"
              priority
              className="object-cover sm:h-[70vh]"
            /> */}
          </motion.div>

          {/* TEXT */}
          <div className="container grid grid-cols-12 pt-10">
            <div className="grid col-span-6 gap-y-5">
              <PortableText value={content} components={components} />
            </div>
          </div>

          {/* CONTINUOUS TEXT */}
        </motion.div>
      </motion.section>
      <SkillCard card={card} />
    </>
  );
}
