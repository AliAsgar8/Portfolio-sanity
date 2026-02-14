import { skill } from './../../../../cms/schemaTypes/skill';
import { aboutCard } from "./../../../../cms/schemaTypes/aboutCard";
import { PortableTextBlock } from "@portabletext/types";

/* ===== DOCUMENTS ===== */

export interface Skill {
  _id: string;
  title: string;
  level?: string;
}

export interface Experience {
  _id: string;
  company: string;
  role: string;
  duration: string;
  description: string;
}

export interface Project {
  _id: string;
  title: string;
  description: string;
  techStack: string[];
  image: string;
}

export interface AboutCard {
  _id: string;
  title: string;
  description: string;
}

/* ===== SECTIONS ===== */

export interface HeroSection {
  _type: "hero";
  title: string;
  hero: PortableTextBlock[];
}

export interface AboutSection {
  _type: "about";
  title: string;
  image: string;
  about: PortableTextBlock[];
  aboutContent: PortableTextBlock[];
  aboutCard: AboutCard[];
  skill: Skill[];
}

export interface SkillsSection {
  _type: "skillsSection";
  title: string;
  skills: Skill[];
}

export interface ExperienceSection {
  _type: "experienceSection";
  experiences: Experience[];
}

export interface ProjectsSection {
  _type: "projectsSection";
  title: string;
  projects: Project[];
}

/* ===== UNION ===== */

export type PageSection =
  | HeroSection
  | AboutSection
  | SkillsSection
  | ExperienceSection
  | ProjectsSection;

/* ===== PAGE ===== */

export interface Page {
  title: string;
  sections: PageSection[];
}
