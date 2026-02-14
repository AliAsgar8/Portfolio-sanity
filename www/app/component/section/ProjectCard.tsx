"use client";

import type { Project } from "@/app/src/type/sanity";
import Projects from "./Projects";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

type ProjectProps = {
  projects: Project[];
};

const ProjectCard = ({ projects }: ProjectProps) => {
  return (
    <div>
      {projects.map((item, i) => {
        return (
          <Projects
            key={i}
            i={i}
            title={item.title}
            image={item.image}
            description={item.description}
            skills={item.techStack}
          />
        );
      })}
    </div>
  );
};

export default ProjectCard;
