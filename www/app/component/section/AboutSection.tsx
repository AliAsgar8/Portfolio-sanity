"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  PortableText,
  PortableTextBlock,
  PortableTextComponents,
} from "next-sanity";
import { useRef } from "react";

export default function AboutSection({
  aboutContent,
  components,
}: {
  aboutContent: PortableTextBlock[];
  components: PortableTextComponents;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1.2],
    ["ellipse(15% 5% at 50% 100%)", "ellipse(150% 120% at 50% 100%)"],
  );

  return (
    <motion.div
      ref={sectionRef}
      style={{ clipPath }}
      className="h-screen flex items-center justify-center bg-[#1e1e1e]"
    >
      <div className="text-white max-w-4xl mx-auto flex flex-col gap-y-10">
        <PortableText value={aboutContent} components={components} />
      </div>
    </motion.div>
  );
}
