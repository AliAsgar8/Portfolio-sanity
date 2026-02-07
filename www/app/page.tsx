// import Header from "@/app/component/layout/Header";
// import Hero from "@/app/component/section/Hero";
// import About from "@/app/component/section/About";

// export default function Home() {
//   return (
//     <>
//       <Hero />
//       <About />
//     </>
//   );
// }

import RenderSection from "./component/section/RenderSection";
import Header from "./component/layout/Header";
import { getPage } from "@/lib/sanity.fetch";
import { PageSection } from "./src/type/sanity";
import About from "./component/section/About";
import Experience from "./component/section/Experience";
import SmoothScrollProvider from "@/lib/smoothScroll";
import Project from "./component/section/Project";
import ProjectCard from "./component/section/ProjectCard";

export default async function HomePage() {
  // const page = await client.fetch(PAGE_QUERY, {
  //   slug: "/",
  // });
  const page = await getPage();

  console.log("page", page); // ← DEBUG HERE

  return (
    <SmoothScrollProvider>
      <Header />
      {page.sections?.map((section: PageSection, i: number) => (
        <RenderSection key={i} section={section} />
      ))}
      <ProjectCard />
      <div className="h-screen flex justify-center text-5xl items-center bg-green-200">
        This is contact page
      </div>
    </SmoothScrollProvider>
  );
}
