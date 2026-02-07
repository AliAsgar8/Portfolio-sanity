"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { AboutCard } from "@/app/src/type/sanity";

type SkillCardProps = {
  card: AboutCard[];
};
const SkillCard = ({ card }: SkillCardProps) => {
  console.log("card", card);

  const cardSectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardSectionRef,
    offset: ["start start", "end end"],
  });

  // Horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);

  return (
    /* OUTER wrapper → gives scroll space */
    <section
      ref={cardSectionRef}
      className="relative h-[300vh] bg-[rgb(231,231,231)]"
    >
      <h1 className="ml-20 text-4xl font-semibold w-3xl">
        Transforming ideas into exceptional digital experiences through
        expertise and innovation
      </h1>
      {/* STICKY container */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex px-10 md:px-20">
          {card.map((value, index) => {
            return (
              <div
                key={index}
                className={`h-120 w-120 ${index + 1 === card.length ? "border-2" : "border-t-2 border-l-2 border-b-2"} border-[rgb(156,163,175)] flex justify-center items-center shrink-0`}
              >
                <div className="pl-8 pr-3 flex flex-col gap-y-10">
                  <div className="flex">
                    <div className="h-20 w-20 bg-[#E3FF54] rounded-full"></div>
                  </div>

                  <div>
                    <h3 className="text-4xl w-1/2 font-semibold">
                      {value.title}
                    </h3>
                  </div>
                  <div className="border-t border-[rgb(156,163,175)] mr-12">
                    <p className="pt-5 text-gray-600">{value.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillCard;
