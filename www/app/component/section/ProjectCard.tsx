"use client";
import { projectData } from "@/lib/projectData";
import Project from "./Project";
import { motion } from "motion/react";

const ProjectCard = () => {
  return (
    <div>
      {projectData.map((item, i) => {
        return (
          <Project
            key={i}
            i={i}
            title={item.title}
            image={item.image}
            description={item.description}
            skills={item.skills}
          />
        );
      })}
    </div>
  );
};

export default ProjectCard;
