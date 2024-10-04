import HomePageHero from "@/components/HomePage/Hero";
import HomeAbout from "@/components/HomePage/About";
import Projects from "@/components/HomePage/Projects";
import Experience from "@/components/HomePage/Experience";
import Skills from "@/components/HomePage/Skills";
import Education from "@/components/HomePage/Education";
import Test from "@/components/HomePage/Education/Test";

export default function Home() {
  return (
   <>
   <HomePageHero />
   <HomeAbout />
   <Projects />
   <Experience />
   <Skills />
   <Education />
   {/* <Test /> */}
   </>
  );
}
