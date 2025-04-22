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

      // ---------------

      // Panel 3 animation
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".panel3",
            start: "left right",
            end: "right left",
            scrub: true,
            containerAnimation: timeline,
          },
        })
        .from("#workCard3", {
          scale: 0,
          opacity: 0,
        })
        .to("#workCard3", {
          scale: 0.5,
          opacity: 0.5,
        });

      // Panel 4 animation
      // gsap
      //   .timeline({
      //     scrollTrigger: {
      //       trigger: ".panel4",
      //       start: "left right",
      //       end: "right left",
      //       scrub: true,
      //       containerAnimation: timeline,
      //     },
      //   })
      //   .from("#workCard4", {
      //     scale: 0,
      //     opacity: 0,
      //   })
      //   .to("#workCard4", {
      //     scale: 0.5,
      //     opacity: 0.5,
      //   });

      // -------------
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
      <div className="sticky top-0 h-[120vh] overflow-hidden mob:hidden">
        <Text
          as="h1"
          className="absolute top-[70px] w-full text-center mt-16 text-[60px] font-bold mob:text-[40px] mob:leading-[48px]"
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
          className="absolute right-0 bottom-[180px] h-[8px] bg-dark/30 w-0"
        ></div>

        <div className="flex h-full w-full mob:px-5" ref={scrollContainerRef}>
          <div className="panel1 flex w-full shrink-0 items-center justify-center">
            <div
              id="workCard1"
              className="bg-[#161A1D] rounded-[10px] max-w-[765px] mx-auto border border-white p-6"
            >
              <Text className="text-[30px] font-semibold mob:text-[22px]">
                Junior Mern Stack Developer{" "}
                <span className="text-[#33BECF]">
                  <Link href="https://www.linkedin.com/company/s93partner/">
                    4XPORTAL
                  </Link>
                </span>
              </Text>
              <Text className="text-[20px] font-semibold text-[#B8B9B9] mt-1">
                October (2024) - Present
              </Text>
              <Text className="mt-3 text-[18px]">
                As a Junior Web Developer, my primary focus has been on
                developing responsive and dynamic web applications while
                collaborating with senior developers to implement new features.
                I have also contributed to enhancing backend functionality by
                designing and implementing RESTful APIs. Additionally, I worked
                closely with cross-functional teams, including UX/UI and QA, to
                deliver high-quality, user-centric web solutions.
              </Text>

              <ul className=" text-white list-disc text-[18px] mt-4 px-4 font-poppins">
                <li className="mb-2">
                  Designed and developed the user dashboard for the ATARIA2.0
                  and contributed to building the HXFX website.
                </li>
                <li className="mb-2">
                  Built the entire UI for over 5 websites using TypeScript,
                  React.js / Next.js, React Query, Tailwind, and GSAP for
                  animations. Ensured code reusability and maintained clean,
                  efficient code to simplify debugging and future development.
                </li>
                <li className="mb-2">
                  Worked with MongoDB for managing user data, including profile
                  images, storing and retrieving data, and implementing
                  authentication.
                </li>
                <li className="mb-2">
                  Utilized React Query for efficient data management and Zustand
                  for state management.
                </li>
              </ul>
            </div>
          </div>

          <div className="panel2 flex w-full shrink-0 items-center justify-center">
            <div
              id="workCard2"
              className="bg-[#161A1D] rounded-[10px] max-w-[765px] mx-auto border border-white p-6"
            >
              <Text className="text-[30px] font-semibold mob:text-[23px]">
                Associate Software Engineer{" "}
                <span className="text-[#33BECF]">
                  <Link href="https://www.linkedin.com/company/seebizpk/posts/?feedView=all">
                    @Ekkel.Ai
                  </Link>
                </span>
              </Text>
              <Text className="text-[20px] mob:text-[16px] font-semibold text-[#B8B9B9] mt-1">
                February (2024) - September (2024)
              </Text>
              <Text className="mt-3 text-[18px]">
                As an Associate Software Engineer, I am responsible for
                developing and maintaining web applications using React.js and
                Node.js and more specifically Nest.js. I work closely with
                cross-functional teams to gather requirements, design solutions,
                and implement features that meet user needs. My role involves
                collaborating with designers and backend developers to ensure
                seamless integration of frontend and backend components.
              </Text>
              <ul className=" text-white list-disc text-[18px] mt-4 px-4 font-poppins">
                <li className="mb-2">
                  Designed and developed the user/admin dashboard for the
                  Meta1st app and contributed to building the Meta1st website.
                </li>
                <li className="mb-2">
                  worked with MongoDB for managing user data, including profile
                  images, storing and retrieving data, and implementing
                </li>
                <li className="mb-2">
                  Developed a full-stack with nest js and MongoDB application
                  using Express.js and Mongoose, for creating, retrieving,
                  updating, and deleting data within a MongoDB database
                </li>
              </ul>
            </div>
          </div>

          {/* Panel 3 */}
          <div className="panel3 flex w-full shrink-0 items-center justify-center">
            <div
              id="workCard3"
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
              <Text className="text-[20px] mob:text-[16px] font-semibold text-[#B8B9B9] mt-1">
                June (2023) - January (2024)
              </Text>
              <Text className="mt-3 text-[18px]">
                Completed a rigorous 8-month software development training,
                mastering HTML, CSS, and JavaScript fundamentals, and advancing
                to proficient levels in React and Node.js. Developed a strong
                foundation in full-stack web development
              </Text>
              <ul className=" text-white list-disc text-[18px] mt-4 px-4 font-poppins">
                <li className="mb-2">
                  Designed and implemented a quiz web application using HTML,
                  CSS, and JavaScript. Crafted a todo web application
                </li>
                <li className="mb-2">
                  Crafted a todo web application with the help of React, and
                  CSS. Used local storage for data saving purposes
                </li>
                <li className="mb-2">
                  Developed a full-stack CRUD application using Express.js and
                  Mongoose, for creating, retrieving, updating, and deleting
                  data within a MongoDB database
                </li>
                <li className="mb-2">
                  Developed independent learning skills through continuous
                  exploration and research.
                </li>
              </ul>
            </div>
          </div>

          {/* Panel 4 */}
          {/* <div className="panel4 flex w-full shrink-0 items-center justify-center">
            <div
              id="workCard4"
              className="bg-[#161A1D] rounded-[10px] max-w-[765px] mx-auto border border-white p-6"
            >
              <Text className="text-[30px] font-semibold mob:text-[23px]">
                Open Source Contributor{" "}
                <span className="text-[#33BECF]">
                  <Link href="https://github.com/your-github"> @GitHub</Link>
                </span>
              </Text>
              <Text className="text-[20px] font-semibold text-[#B8B9B9] mt-1">
                Ongoing
              </Text>
              <Text className="mt-3 text-[18px]">
                Contributing to frontend libraries and tools in the React
                ecosystem. Improving documentation, fixing bugs, and adding
                animations/UI features.
              </Text>
            </div>
          </div> */}
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
            <Text className="mt-3 text-[16px]">
              As a Junior Web Developer, my primary focus has been on developing
              responsive and dynamic web applications while collaborating with
              senior developers to implement new features. I have also
              contributed to enhancing backend functionality by designing and
              implementing RESTful APIs. Additionally, I worked closely with
              cross-functional teams, including UX/UI and QA, to deliver
              high-quality, user-centric web solutions.
            </Text>

            <ul className=" text-white list-disc text-[16px] mt-4 px-4 font-poppins">
              <li className="mb-2">
                Designed and developed the user dashboard for the STNDRD app and
                contributed to building the STNDRD website.
              </li>
              <li className="mb-2">
                Built the entire UI for over 5 websites using TypeScript,
                Next.js, React Query, Tailwind, and GSAP for animations. Ensured
                code reusability and maintained clean, efficient code to
                simplify debugging and future development.
              </li>
              <li className="mb-2">
                Worked with Firebase for managing user data, including profile
                images, storing and retrieving data, and implementing
                authentication.
              </li>
              <li className="mb-2">
                Utilized React Query for efficient data management and Zustand
                for state management.
              </li>
            </ul>
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
            <Text className="mt-3 text-[16px]">
              Completed a rigorous 8-month software development training,
              mastering HTML, CSS, and JavaScript fundamentals, and advancing to
              proficient levels in React and Node.js. Developed a strong
              foundation in full-stack web development
            </Text>
            <ul className=" text-white list-disc text-[16px] mt-4 px-4 font-poppins">
              <li className="mb-2">
                Designed and implemented a quiz web application using HTML, CSS,
                and JavaScript. Crafted a todo web application
              </li>
              <li className="mb-2">
                Crafted a todo web application with the help of React, and CSS.
                Used local storage for data saving purposes
              </li>
              <li className="mb-2">
                Developed a full-stack CRUD application using Express.js and
                Mongoose, for creating, retrieving, updating, and deleting data
                within a MongoDB database
              </li>
              <li className="mb-2">
                Developed independent learning skills through continuous
                exploration and research.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
