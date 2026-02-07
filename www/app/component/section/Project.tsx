"use client";

import { useRef } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "motion/react";

type ProjectProps = {
  i: number;
  title: string;
  image: string;
  description: string;
  color: string;
  skills: string[];
};

const Project = ({ i, title, image, description, skills }: ProjectProps) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);
  return (
    <motion.div
      ref={container}
      className="h-screen flex justify-center items-center sticky top-0"
    >
      <motion.div
        style={{
          // backgroundColor: color,
          top: `calc(${i * 25}px`,
        }}
        className="grid grid-cols-12 relative px-10 rounded-3xl w-375 h-180 bg-white border border-gray-200 shadow-[6px_6px_12px_rgba(0,0,0,0.15),-6px_-6px_12px_rgba(255,255,255,0.8)] "
      >
        <div className="grid col-span-6">
          <h3 className="text-3xl font-bold">{title}</h3>
          <p>{description}</p>

          {/* <ul className="inline-flex gap-x-3 ">
            {skills.map((item, index) => (
              <li
                key={index}
                className="border-2 border-[#a1a1a1] rounded-full"
              >
                {item}
              </li>
            ))}
          </ul> */}
        </div>
        <motion.div
          // style={{ scale }}
          className="grid col-span-6"
        >
          {/* <Image src={image} alt={title} width={1000} height={200} /> */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Project;
