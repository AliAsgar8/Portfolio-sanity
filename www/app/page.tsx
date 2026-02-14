import RenderSection from "./component/section/RenderSection";
import Header from "./component/layout/Header";
import { getHeader, getPage } from "@/lib/sanity.fetch";
import { PageSection } from "./src/type/sanity";
import SmoothScrollProvider from "@/app/component/smoothScroll";
import ContactSection from "./component/section/Contact";
import AboutSection from "./component/section/AboutSection";

export default async function HomePage() {
  const page = await getPage();
  const headerData = await getHeader();
  console.log("headerData", headerData);

  return (
    <SmoothScrollProvider>
      <Header logo={headerData.logoUrl} navigation={headerData.navigation} />
      {page.sections?.map((section: PageSection, i: number) => (
        <RenderSection key={i} section={section} />
      ))}
      {/* <div className="h-screen "></div> */}
      {/* <AboutSection /> */}
      <ContactSection />
    </SmoothScrollProvider>
  );
}
