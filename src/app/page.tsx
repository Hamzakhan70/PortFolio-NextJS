import Image from "next/image";

import HomePageHero from "@/components/HomePage/Hero";
import HomeAbout from "@/components/HomePage/About";
import Projects from "@/components/HomePage/Projects";
import Experience from "@/components/HomePage/Experience";
import Skills from "@/components/HomePage/Skills";
import Education from "@/components/HomePage/Education";

import LinkButton from "@/components/UI/LinkButton";

import hiresvg from "../../public/images/hire.svg"

export default function Home() {
  return (
   <>
   <div id="home-hero">
   <HomePageHero />
   </div>

   <div id="about-section">
   <HomeAbout />
   </div>
   <Projects />
   <Experience />
   <Skills />
   <Education />
   <div className="fixed bottom-9 right-0 z-50">
  <div className="relative flex justify-center items-center">
    <Image src={hiresvg} alt="hirevsg" className="animate-spin"></Image>
    <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center ">
      <LinkButton href="mailto:fahimjsdeveloper@gmail.com" className="w-[80px] h-[80px] p-0 hover:text-white flex justify-center items-center text-[17px] rounded-full">
          Hire Me
      </LinkButton>
     
    </div>
  </div>
</div>
   {/* <Test /> */}
   </>
  );
}
