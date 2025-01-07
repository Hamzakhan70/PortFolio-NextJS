"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Text from "@/components/UI/Text";

const Experience = () => {
  const mainContainer = useRef(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const leftExpandingDivRef = useRef(null);
  const rightExpandingDivRef = useRef(null);

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const horizontalScrollAnimation = () => {
      const container = mainContainer.current;
      const scrollContainer = scrollContainerRef.current;

      if (!container || !scrollContainer) return;

      const scrollAbleChildren = scrollContainer?.children.length;

      let timeline = gsap
        .timeline({
          scrollTrigger: {
            trigger: container,
            start: "+=100",
            end: "bottom bottom",
            scrub: 0.5,
            onUpdate: (trigger) => {
              setScrollProgress(trigger.progress);
            },
          },
        })
        .to(scrollContainer, {
          xPercent: -100 * (scrollAbleChildren - 1),
          ease: "none",
        });

      // Panel 1 animation (scale down)
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".panel1",
            start: "top left",
            end: "right left",
            scrub: true,
            // markers:true
            containerAnimation: timeline,
          },
        })
        .to("#workCard1", {
          scale: 0.5,
          opacity: 0.5,
        });

      // Panel 2 animation (enter and exit)
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".panel2",
            start: "left right",
            end: "right left",
            scrub: true,
            // markers:true
            containerAnimation: timeline,
          },
        })
        .from("#workCard2", {
          scale: 0,
          opacity: 0,
        })
        .to("#workCard2", {
          scale: 0.5,
          opacity: 0.5,
        });

      // Expanding divs for left and right
      gsap.to(leftExpandingDivRef.current, {
        width: "100%",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          // markers:true
        },
      });

      gsap.to(rightExpandingDivRef.current, {
        width: "100%",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          // markers:true
        },
      });
    };

    const firstCardAnimation = () => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".panel1",
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
            // markers: true
          },
        })
        .from("#workCard1", {
          scale: 0,
          opacity: 0,
        });
    };

    const ctx = gsap.context(() => {
      firstCardAnimation();
      horizontalScrollAnimation();
    }, mainContainer);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={mainContainer}
      className="relative block h-[400vh] mob:h-fit w-full"
    >
      {/* desktop animation */}
      <div className="sticky top-0 h-[100vh] overflow-hidden mob:hidden">
        <Text
          as="h1"
          className="absolute top-[70px] w-full text-center mt-16 text-7xl font-bold mob:text-[40px] mob:leading-[48px]"
        >
          Experience
        </Text>

        <div className="absolute top-[50%] -z-10 h-[100px] w-full skew-y-6 bg-dark/30"></div>

        {/* Expanding divs */}
        <div
          ref={leftExpandingDivRef}
          className="absolute left-0 top-0 h-[8px] bg-dark/30 mt-10 w-0"
        ></div>
        <div
          ref={rightExpandingDivRef}
          className="absolute right-0 bottom-0 h-[8px] mb-10 bg-dark/30 w-0"
        ></div>

        <div className="flex h-full w-full mob:px-5" ref={scrollContainerRef}>
          <div className="panel1 flex w-full shrink-0 items-center justify-center">
            <div
              id="workCard1"
              className="bg-[#161A1D] rounded-[10px] max-w-[765px] mx-auto border border-white p-6"
            >
              <Text className="text-[30px] font-semibold mob:text-[22px]">
                Junior Web Developer{" "}
                <span className="text-[#33BECF]">
                  <Link href="https://www.linkedin.com/company/s93partner/">
                    @S93 Partner
                  </Link>
                </span>
              </Text>
              <Text className="text-[16px] font-semibold text-[#B8B9B9] mt-1">
                January (2024) - Present
              </Text>
              <Text>
                As a Junior Web Developer, I focused on developing responsive,
                dynamic web applications and collaborating with senior
                developers to implement new features. I contributed to enhancing
                backend functionality through the design and implementation of
                RESTful APIs. Additionally, I collaborated closely with
                cross-functional teams such as UX/UI and QA to ensure
                high-quality, user-centric web solutions.
              </Text>
            </div>
          </div>

          <div className="panel2 flex w-full shrink-0 items-center justify-center">
            <div
              id="workCard2"
              className="bg-[#161A1D] rounded-[10px] max-w-[765px] mx-auto border border-white p-6"
            >
              <Text className="text-[30px] font-semibold mob:text-[23px]">
                Trainee Software Engineer{" "}
                <span className="text-[#33BECF]">
                  <Link href="https://www.linkedin.com/company/seebizpk/posts/?feedView=all">
                    @Seebiz Pvt. Ltd.
                  </Link>
                </span>
              </Text>
              <Text className="text-[19px] mob:text-[16px] font-semibold text-[#B8B9B9] mt-1">
                June (2023) - January (2024)
              </Text>
              <Text>
                Completed a rigorous 8-month software development training,
                mastering HTML, CSS, and JavaScript fundamentals, and advancing
                to proficient levels in React and Node.js. Developed a strong
                foundation in full-stack web development
              </Text>
            </div>
          </div>
        </div>
      </div>

      {/* desktop animation */}

      {/* mobile cards */}
      <div className="hidden mob:block">
        <Text
          as="h1"
          className="top-[70px] w-full text-center mt-16 text-7xl font-bold mob:text-[40px] mob:leading-[48px]"
        >
          Experience
        </Text>
        <div className=" flex w-full  items-center my-10 px-5 justify-center">
          <div
            id="workCard1"
            className="bg-[#161A1D] rounded-[10px] max-w-[765px] mx-auto border border-white p-6"
          >
            <Text className="text-[30px] font-semibold mob:text-[22px]">
              Junior Web Developer{" "}
              <span className="text-[#33BECF]">
                <Link href="/">@studio 93 Partner</Link>
              </span>
            </Text>
            <Text className="text-[16px] font-semibold text-[#B8B9B9] mt-1">
              January (2024) - Present
            </Text>
          </div>
        </div>
        <div className=" flex w-full items-center justify-center my-10 mob:mt-[50px] px-5">
          <div className="bg-[#161A1D] rounded-[10px] max-w-[765px] mx-auto border border-white p-6">
            <Text className="text-[30px] font-semibold mob:text-[23px]">
              Trainee Software Engineer{" "}
              <span className="text-[#33BECF]">
                <Link href="/">@Seebiz Pvt. Ltd.</Link>
              </span>
            </Text>
            <Text className="text-[19px] mob:text-[16px] font-semibold text-[#B8B9B9] mt-1">
              June (2023) - December (2023)
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
