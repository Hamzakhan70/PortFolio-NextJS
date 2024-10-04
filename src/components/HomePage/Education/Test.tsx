// app/page.tsx
"use client"; // for client-side only

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function Test() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("progress", {
      value: 100,
      ease: "none",
      scrollTrigger: {
        trigger: "#mySection",
        scrub: 0.3,
      },
    });
  }, []);

  return (
    <div className="relative">
      <progress
        max="100"
        value="0"
        className="fixed top-0 left-0 w-full h-[15px] appearance-none bg-transparent"
      ></progress>
      
      <div className="container">
        <section className="min-h-screen flex items-center justify-center">
          <p className="text-center text-xl sm:text-[max(18px,min(90px,10vw))] font-marker">
            Scroll to add some color to your life!🎨
          </p>
        </section>

        <section
          id="mySection"
          className="min-h-screen flex items-center justify-center"
        >
          <p className="text-center text-xl sm:text-[max(18px,min(90px,10vw))] font-marker">
            Youre doing great, keep going😘
          </p>
        </section>

        <section className="min-h-screen flex items-center justify-center">
          <p className="text-center text-xl sm:text-[max(18px,min(90px,10vw))] font-marker">
            Keep scrolling just a little more 🏃‍♀️
          </p>
        </section>

        <section className="min-h-screen flex items-center justify-center">
          <p className="text-center text-xl sm:text-[max(18px,min(90px,10vw))] font-marker">
            Here you go!<br />Did you like it?🌈
          </p>
        </section>
      </div>
    </div>
  );
}

