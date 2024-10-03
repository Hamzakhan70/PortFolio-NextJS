"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Text from "@/components/UI/Text";

const Experience = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const headingRef = useRef(null);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
  
    gsap.registerPlugin(ScrollTrigger);
  
    // Pin the heading when the animation starts
    const headingPin = ScrollTrigger.create({
      trigger: triggerRef.current,
      start: "top 50%",
      end: "2000 bottom",
      scrub: true,
      pin: headingRef.current,
      pinSpacing: false, 
      markers: true, 
    });
  
    // Horizontal scroll animation starts after pinning the heading
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-100vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 50%",
          end: "2000 bottom",
          scrub: 0.6,
          pin: true,
          markers: true,
          onEnter: () => setIsFixed(true),
          onLeave: () => setIsFixed(false),
          onEnterBack: () => setIsFixed(true),
          onLeaveBack: () => setIsFixed(false),
        },
      }
    );
  
    return () => {
      pin.kill();
      headingPin.kill();
    };
  }, []);
  

  return (
    <div className="w-full h-full min-h-[100vh] flex items-center justify-center">
      <div className="w-full h-full relative">
        <div className="fixed top-[50%] -z-10 h-[100px] w-full skew-y-6 bg-dark/30"></div>

        {/* Placeholder for heading to maintain layout */}
        <div className="h-[80px]"></div>

        {/* Heading Experience */}
        <Text
          as="h1"
          ref={headingRef}
          className={`text-center mb-16 ${
            isFixed ? "fixed top-[300px] w-full" : "relative bottom-[0px]"
          }`}
        >
          Experience
        </Text>

        <section className="overflow-hidden relative">
          <div ref={triggerRef}>
            <div ref={sectionRef} className="w-[200vw] flex relative">
              <div className="w-screen flex justify-center items-center">
                <div className="w-screen h-full mx-auto">
                  <div className="bg-[#161A1D] rounded-[10px] max-w-[765px] mx-auto border border-white p-6">
                    <Text className="text-[24px] font-semibold">
                      Junior Web Developer{" "}
                      <span className="text-[#33BECF]">
                        {" "}
                        <Link href="/">@studio 93 Partner</Link>
                      </span>
                    </Text>
                    <Text className="text-[16px] font-semibold text-[#B8B9B9] mt-1">
                      January (2024) - Present{" "}
                    </Text>
                  </div>
                </div>
              </div>
              <div className="w-screen h-full mx-auto">
                <div className="bg-[#161A1D] rounded-[10px] max-w-[765px] mx-auto border border-white p-6">
                  <Text className="text-[24px] font-semibold">
                    Trainee Software Engineer{" "}
                    <span className="text-[#33BECF]">
                      {" "}
                      <Link href="/">@Seebiz Pvt. Ltd.</Link>
                    </span>
                  </Text>
                  <Text className="text-[16px] font-semibold text-[#B8B9B9] mt-1">
                    June (2023) - December (2023){" "}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience;
