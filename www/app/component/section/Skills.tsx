"use client";

import { Skill, SkillsSection } from "@/app/src/type/sanity";

type SkillsProps = Pick<SkillsSection, "title" | "skills">;

export default function Skills({ title, skills }: SkillsProps) {
  if (!skills?.length) return null;

  return (
    <section>
      <h2>{title}</h2>

      <ul>
        {skills.map((skill: Skill) => (
          <li key={skill._id}>{skill.title}</li>
        ))}
      </ul>
    </section>
  );
}
