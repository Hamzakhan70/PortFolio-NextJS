"use client";
import React from "react";

// import gsap from "gsap";
// import SplitType from "split-type";
import { useTypewriter } from "react-simple-typewriter";
import { GiCometSpark } from "react-icons/gi";
import Text from "@/components/UI/Text";
import Button from "@/components/UI/Button";
import LinkButton from "@/components/UI/LinkButton";

const HomePageHero = () => {
  // const firstheadingRef = useRef(null);
  // const thirdheadingRef = useRef(null);
  // const fourthheadingRef = useRef(null);

  const [text] = useTypewriter({
    words: [
      " Hey 👋! This is Faheem",
      " Lover of Full-Stack Craft ✨|",
      "Turning your Ideas into Digital Reality 💡|",
    ],
    loop: true,
    delaySpeed: 1800,
    typeSpeed: 80,
    deleteSpeed: 70,
  });

  const handleOpenPdf = () => {
    window.open("/faheem-mern-stack.pdf");
  };

  // useEffect(() => {
  //   if (
  //     firstheadingRef.current &&
  //     thirdheadingRef.current &&
  //     fourthheadingRef.current
  //   ) {
  //     const firstHeadingsSplit = new SplitType(firstheadingRef.current, {
  //       types: "chars",
  //     });
  //     const thirdHeadingsSplit = new SplitType(thirdheadingRef.current, {
  //       types: "chars",
  //     });
  //     const fourthHeadingsSplit = new SplitType(fourthheadingRef.current, {
  //       types: "chars",
  //     });
  //     const tl = gsap.timeline({ repeat: -1 });

  //     tl.set(firstheadingRef.current, { visibility: "visible" });

  //     tl.from(firstHeadingsSplit.chars, {
  //       opacity: 0,
  //       x: 50,
  //       stagger: 0.1,
  //       duration: 0.4,
  //       ease: "power2.inOut",
  //     })
  //       .to(firstHeadingsSplit.chars, {
  //         opacity: 0,
  //         x: -50,
  //         duration: 0.5,
  //         ease: "power2.inOut",
  //         delay: 1,
  //         onComplete: () => {
  //           gsap.set(firstheadingRef.current, { visibility: "hidden" });
  //           gsap.set(thirdheadingRef.current, { visibility: "visible" });
  //         },
  //       })
  //       .from(thirdHeadingsSplit.chars, {
  //         opacity: 0,
  //         x: 50,
  //         stagger: 0.1,
  //         duration: 0.4,
  //         ease: "power2.inOut",
  //       })
  //       .to(thirdHeadingsSplit.chars, {
  //         opacity: 0,
  //         x: -50,
  //         duration: 0.4,
  //         ease: "power2.inOut",
  //         delay: 1,
  //         onComplete: () => {
  //           gsap.set(thirdheadingRef.current, { visibility: "hidden" });
  //           gsap.set(fourthheadingRef.current, { visibility: "visible" });
  //         },
  //       })
  //       .from(fourthHeadingsSplit.chars, {
  //         opacity: 0,
  //         x: 50,
  //         stagger: 0.1,
  //         duration: 0.4,
  //         ease: "power2.inOut",
  //       })
  //       .to(fourthHeadingsSplit.chars, {
  //         opacity: 0,
  //         x: -50,
  //         duration: 0.4,
  //         ease: "power2.inOut",
  //         delay: 1,
  //         onComplete: () => {
  //           gsap.set(fourthheadingRef.current, { visibility: "hidden" });
  //           gsap.set(firstheadingRef.current, { visibility: "visible" });
  //         },
  //       });
  //   }
  // }, []);

  return (
    <div className="flex flex-col justify-center items-center h-full min-h-[60vh] mob:min-h-fit mob:my-[100px] relative mx-auto px-5">
      <GiCometSpark className="text-center animate-spin text-[60px] text-white mb-10 mob:hidden" />

      <Text
        as="h1"
        className="w-full max-w-[800px] text-center leading-[70px] mob:text-[40px] mob:leading-[48px]"
      >
        {text}
      </Text>

      {/* Heading Container */}
      {/* <div className="relative h-[130px] w-full flex justify-center items-center">
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
      </div> */}

      <Text className="max-w-[800px] text-[20px] mob:text-[15px] text-center mob:leading-[20px] mt-10 mob:mt-3 leading-[30px] mob:text-center">
        Explore a world where creativity meets technology. Crafted by a
        full-stack developer, this space showcases innovative digital solutions
        that transform ideas into seamless and captivating experiences.
      </Text>

      <div className="flex gap-[80px] items-center mt-9">
        <Button onClick={handleOpenPdf} className="text-[18px]">
          Resume
        </Button>
        <LinkButton
          href="mailto:fahimjsdeveloper@gmail.com"
          className=" bg-transparent text-[20px] mt-2 px-0 py-0 hover:opacity-[0.7] underline border-none text-white hover:bg-transparent"
        >
          Contact
        </LinkButton>
      </div>
    </div>
  );
};

export default HomePageHero;
