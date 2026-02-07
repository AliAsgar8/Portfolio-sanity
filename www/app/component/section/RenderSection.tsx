import { PageSection } from "@/app/src/type/sanity";
import Hero from "./Hero";
import Skills from "./Skills";
import About from "./About";
import Experience from "./Experience";

interface PageSectionProps {
  section: PageSection;
}

export default function RenderSection({ section }: PageSectionProps) {
  switch (section._type) {
    case "hero":
      console.log("HERO", section);
      return <Hero title={section.title} content={section.hero} />;

    case "about":
      console.log("ABOUT", section);
      return (
        <About
          content={section.about}
          image={section.image}
          card={section.aboutCard}
        />
      );
      
      case "experienceSection":
        return (
          <Experience
            items={section.experiences}
          />
        );
    // case "skillsSection":
    //   console.log("SKILLS:", section.skills); // DEBUG
    //   return <Skills title={section.title} skills={section.skills} />;


    // case "projectsSection":
    //   return (
    //     <Projects
    //       title={section.title}
    //       projects={section.projects}
    //     />
    //   );

    default:
      return null;
  }
}
