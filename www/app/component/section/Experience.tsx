"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import ScrollNeonLine from "@/lib/scrollNeonLine";
import type { Experience } from "@/app/src/type/sanity";

type ExperienceProps = {
  items: Experience[];
};

export default function Experience({ items }: ExperienceProps) {
  console.log("items", items);

  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end end"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["#ffffff", "#1e1e1e"],
  );

  const textColor = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["#838383", "#a1a1a1"],
  );

  return (
    <>
      <motion.div
        style={{ backgroundColor }}
        ref={sectionRef}
        className="relative pb-20  px-5 md:px-20 transition-all duration-500"
      >
        <svg
          viewBox="0 0 272 529"
          fill="none"
          className="absolute right-0  top-0 h-full "
        >
          <motion.path
            d="M270.594 14.9586C270.594 14.9586 189.594 20.9586 136.594 49.9587C83.594 78.9588 64.5938 118.958 70.5939 154.959C76.5939 190.959 97.5938 256.959 51.5939 279.959C5.59406 302.959 11.5938 317.959 23.594 332.959C35.5943 347.959 133.594 363.959 125.594 418.959C117.594 473.959 45.5938 528.959 31.5938 509.959"
            stroke="#E3FF54"
            strokeWidth="8"
            fill="none"
            pathLength={1}
            style={{ pathLength }}
          />
        </svg>
        <h1 className="text-white text-5xl max-w-5xl mx-auto text-center font-serif pt-20 ">
          Explore my journey and the technologies that define my craft.
        </h1>
        <ScrollNeonLine targetRef={sectionRef} />
        <motion.div
          style={{ color: textColor }}
          className="grid grid-cols-12 gap-y-10 md:gap-y-0 h-screen  md:h-[200vh]"
        >
          {items.map((value, index) => (
            <div
              key={index}
              className="grid col-span-12 md:col-span-6 md:pl-20"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-serif text-white">
                  {value.company}
                </h2>
                <h3 className="text-2xl">{value.role}</h3>
                <p className="text-md md:text-lg">{value.description}</p>
                <p>{value.duration}</p>
              </div>
            </div>
          ))}

          {/* <div className="grid justify-start col-span-12  md:col-end-8 md:max-w-3xl">
            <div>
              <h1 className="text-4xl md:text-5xl">
                Lorem ipsum dolor sit amet.
              </h1>
              <p className="text-md md:text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
                laborum neque consequatur consectetur placeat ipsum commodi
                blanditiis, impedit asperiores quidem. Similique dignissimos
                delectus ipsa dolorem iusto velit doloremque, odio officia.
              </p>
            </div>
          </div>
          <div className="grid col-span-12 md:col-start-7 md:pl-20">
            <div>
              <h1 className="text-4xl md:text-5xl">
                Lorem ipsum dolor sit amet.
              </h1>
              <p className="text-md md:text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
                laborum neque consequatur consectetur placeat ipsum commodi
                blanditiis, impedit asperiores quidem. Similique dignissimos
                delectus ipsa dolorem iusto velit doloremque, odio officia.
              </p>
            </div>
          </div> */}
        </motion.div>
      </motion.div>
    </>
  );
}
