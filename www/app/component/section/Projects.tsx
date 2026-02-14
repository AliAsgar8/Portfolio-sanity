"use client";

import { useRef } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

type ProjectProps = {
  i: number;
  title: string;
  description: string;
  image: string;
  skills: string[];
};

const Projects = ({ i, title, description, image, skills }: ProjectProps) => {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  // Alternate slide direction

  const fromX = i % 2 === 0 ? -300 : 300;
  const x = useTransform(scrollYProgress, [0, 1], [fromX, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.05]);

  return (
    <motion.section
      ref={container}
      className="h-screen sticky top-0 flex items-center justify-center px-4 sm:px-6 overflow-hidden"
    >
      <motion.div
        style={{
          x,
          y,
        }}
        className="
        grid grid-cols-1 lg:grid-cols-12
        gap-8 lg:gap-10
        w-full max-w-6xl
        min-h-130 lg:h-125
        p-6 sm:p-8 lg:p-10
        bg-white/70 backdrop-blur-xl
        border border-gray-200
        rounded-2xl lg:rounded-3xl
        shadow-[0_20px_60px_rgba(0,0,0,0.15)]
      "
      >
        {/* LEFT CONTENT */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-5 lg:space-y-6">
          {/* Accent */}
          <div className="w-16 sm:w-20 h-1 bg-linear-to-r from-purple-500 to-pink-500 rounded-full" />
          {/* Title */}
          <h3
            className="
            text-2xl sm:text-3xl lg:text-4xl
            font-bold text-gray-800 leading-tight
          "
          >
            {title}
          </h3>

          {/* Description */}
          <p
            className="
            text-gray-600
            text-sm sm:text-base lg:text-lg
            leading-relaxed
            max-w-full lg:max-w-md
            line-clamp-5 sm:line-clamp-6
          "
          >
            {description}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 sm:gap-3 pt-2">
            {skills.map((skill, index) => (
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
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="lg:col-span-6 flex items-center justify-center">
          <motion.div
            style={{ scale }}
            className="
              relative
              w-full
              h-55 sm:h-65 lg:h-75
              rounded-xl lg:rounded-2xl
              overflow-hidden
              shadow-xl
            "
          >
            <Image
              src={image}
              alt={"alt"}
              fill
              className="
                object-cover
                hover:scale-110
                transition-transform
                duration-700
              "
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
