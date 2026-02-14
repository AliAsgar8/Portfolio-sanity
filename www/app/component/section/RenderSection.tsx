import { PageSection } from "@/app/src/type/sanity";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import ProjectCard from "./ProjectCard";

interface PageSectionProps {
  section: PageSection;
}

export default function RenderSection({ section }: PageSectionProps) {
  // console.log("section in RenderSection:", section); // DEBUG
  switch (section._type) {
    case "hero":
      // console.log("HERO", section);
      return <Hero title={section.title} content={section.hero} />;

    case "about":
      console.log("ABOUT", section);
      return (
        <About
          aboutContent={section.aboutContent}
          content={section.about}
          image={section.image}
          skill={section.skill}
          card={section.aboutCard}
        />
      );

    case "experienceSection":
      return <Experience items={section.experiences} />;
    // case "skillsSection":
    //   console.log("SKILLS:", section.skills); // DEBUG
    //   return <Skills title={section.title} skills={section.skills} />;

    case "projectsSection":
      return (
        <ProjectCard
          projects={section.projects} // Assuming you want to use experiences here, adjust if needed
        />
      );

    default:
      return null;
  }
}
