"use client";

import { AboutCard } from "@/app/src/type/sanity";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useLayoutEffect, useState, useEffect } from "react";

type SkillCardProps = {
  card: AboutCard[];
};

export default function SkillCard({ card }: SkillCardProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [scrollDistance, setScrollDistance] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(0);
  const [enableHorizontal, setEnableHorizontal] = useState(false);

  // 🔥 Measure width properly
  useLayoutEffect(() => {
    const measure = () => {
      if (!containerRef.current) return;

      const totalWidth = containerRef.current.scrollWidth;
      const screenWidth = window.innerWidth;

      const distance = totalWidth - screenWidth;

      if (distance > 0) {
        setEnableHorizontal(true);
        setScrollDistance(distance);
        setSectionHeight(distance + window.innerHeight);
      } else {
        setEnableHorizontal(false);
        setScrollDistance(0);
        setSectionHeight(0);
      }
    };

    // Small delay to ensure layout rendered
    const timeout = setTimeout(measure, 1000);

    window.addEventListener("resize", measure);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", measure);
    };
  }, [card]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full"
      style={{
        height: enableHorizontal ? `${sectionHeight}px` : "auto",
      }}
    >
      <div
        className={
          enableHorizontal
            ? "sticky top-0 h-screen overflow-hidden flex items-center"
            : "relative"
        }
      >
        <motion.div
          ref={containerRef}
          style={enableHorizontal ? { x } : {}}
          className="flex gap-10 px-20"
        >
          {card.map((item, index) => (
            <div
              key={index}
              className="min-w-[400px] shrink-0 h-[500px] bg-neutral-900 text-white rounded-3xl flex items-center justify-center text-3xl"
            >
              {item.title}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
