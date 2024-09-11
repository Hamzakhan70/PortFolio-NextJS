"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { GiCometSpark } from "react-icons/gi";
import Text from "@/components/UI/Text";
import Button from "@/components/UI/Button";
import LinkButton from "@/components/UI/LinkButton";

const HomePageHero = () => {
  const firstheadingRef = useRef(null);
  const thirdheadingRef = useRef(null);
  const fourthheadingRef = useRef(null);

  useEffect(() => {
    if (
      firstheadingRef.current &&
      thirdheadingRef.current &&
      fourthheadingRef.current
    ) {
      const firstHeadingsSplit = new SplitType(firstheadingRef.current, {
        types: "chars",
      });
      const thirdHeadingsSplit = new SplitType(thirdheadingRef.current, {
        types: "chars",
      });
      const fourthHeadingsSplit = new SplitType(fourthheadingRef.current, {
        types: "chars",
      });
      const tl = gsap.timeline({ repeat: -1 });

      tl.set(firstheadingRef.current, { visibility: "visible" });

      tl.from(firstHeadingsSplit.chars, {
        opacity: 0,
        x: 50,
        stagger: 0.1,
        duration: 0.4,
        ease: "power2.inOut",
      })
        .to(firstHeadingsSplit.chars, {
          opacity: 0,
          x: -50,
          duration: 0.5,
          ease: "power2.inOut",
          delay: 1,
          onComplete: () => {
            gsap.set(firstheadingRef.current, { visibility: "hidden" });
            gsap.set(thirdheadingRef.current, { visibility: "visible" });
          },
        })
        .from(thirdHeadingsSplit.chars, {
          opacity: 0,
          x: 50,
          stagger: 0.1,
          duration: 0.4,
          ease: "power2.inOut",
        })
        .to(thirdHeadingsSplit.chars, {
          opacity: 0,
          x: -50,
          duration: 0.4,
          ease: "power2.inOut",
          delay: 1,
          onComplete: () => {
            gsap.set(thirdheadingRef.current, { visibility: "hidden" });
            gsap.set(fourthheadingRef.current, { visibility: "visible" });
          },
        })
        .from(fourthHeadingsSplit.chars, {
          opacity: 0,
          x: 50,
          stagger: 0.1,
          duration: 0.4,
          ease: "power2.inOut",
        })
        .to(fourthHeadingsSplit.chars, {
          opacity: 0,
          x: -50,
          duration: 0.4,
          ease: "power2.inOut",
          delay: 1,
          onComplete: () => {
            gsap.set(fourthheadingRef.current, { visibility: "hidden" });
            gsap.set(firstheadingRef.current, { visibility: "visible" });
          },
        });
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-full min-h-[100vh] relative mx-auto">
      <GiCometSpark className="text-center animate-spin text-[60px] text-white mb-10" />

      {/* Heading Container */}
      <div className="relative h-[130px] w-full flex justify-center items-center">
        <Text
          as="h1"
          ref={firstheadingRef}
          className="leading-[90px] absolute text-center"
          Style={{ visibility: "hidden" }}
        >
          Hey 👋! This is <br />
          Faheem
        </Text>
        <Text
          as="h1"
          ref={thirdheadingRef}
          className="leading-[90px] text-center absolute"
          Style={{ visibility: "hidden" }}
        >
          Lover of Full-Stack <br /> Craft ✨|
        </Text>
        <Text
          as="h1"
          ref={fourthheadingRef}
          className="leading-[90px] text-center absolute"
          Style={{ visibility: "hidden" }}
        >
          Turning your Ideas <br /> into Digital Reality 💡|
        </Text>
      </div>

      <Text className="max-w-[700px] text-[20px] mt-6 leading-[30px]">
        Explore a world where creativity meets technology. Crafted by a
        full-stack developer, this space showcases innovative digital solutions
        that transform ideas into seamless and captivating experiences.
      </Text>

      <div className="flex gap-4 items-center mt-9">
        <LinkButton href="/" className="text-[18px]">
          Resume
        </LinkButton>
        <LinkButton
          href="mailto:faheemulhassanaziz@gmail.com"
          className=" bg-transparent text-[20px] mt-2 px-0 py-0 hover:opacity-[0.7] underline border-none text-white hover:bg-transparent"
        >
          Contact
        </LinkButton>
      </div>
    </div>
  );
};

export default HomePageHero;
