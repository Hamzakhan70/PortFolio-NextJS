"use client";

import React, { useState } from "react";
import Image from "next/image";

import Text from "@/components/UI/Text";

import html from "../../../../public/images/html.svg";
import css from "../../../../public/images/css.svg";
import chakraui from "../../../../public/images/Chakra-ui.png";
import js from "../../../../public/images/javascript.svg";
import react from "../../../../public/images/react.svg";
import nextjs from "../../../../public/images/nextjs.svg";
import tailwindcss from "../../../../public/images/tailwindcss.svg";
import reactQuery from "../../../../public/images/react-query.png";
import Node from "../../../../public/images/nodejs.f4675121.svg";
import firebase from "../../../../public/images/firebase.svg";
import express from "../../../../public/images/expressjs.svg";
import Shadcn from "../../../../public/images/shadecn.png";
import MongoDB from "../../../../public/images/mongodb.png";
import SQL from "../../../../public/images/sql.png";
import Bootstrap from "../../../../public/images/bootstrap.jpg";
import Python from "../../../../public/images/python.png";
import Nest from "../../../../public/images/nest.png";

const Skills = () => {
  const [hoverSkill, sethoverSkill] = useState<number | null>(null);

  const skillsArray = [
    html,
    css,
    chakraui,
    Bootstrap,
    tailwindcss,
Shadcn,
    js,
    react,
    nextjs,
    reactQuery,
    Node,
    Nest,
    firebase,
    MongoDB,
    SQL,
    express,
    Python
  ];
  const skillsNameArray = [
    "HTML",
    "CSS",
    "Chakra UI",
    "Bootstrap",
    "Tailwind CSS",
    "Shadcn",
    "JavaScript",
    "React",
    "Next JS",
    "React Query",
    "Node JS",
    "Nest JS",
    "Firebase",
    "MongoDB",
    "SQL",
    "Express",
    "Python"
  ];

  const getAnimationDirection = (index: number) => {
    return index % 2 === 0 ? "fade-left" : "fade-right";
  };

  return (
    <div className="w-full h-full flex items-center justify-center mob:min-h-fit mob:mt-24">
      <div className="w-full h-full relative">
        <Text
          as="h1"
          className="text-center mob:text-[40px] mob:leading-[48px]"
        >
          Development Skills
        </Text>
        <div className="w-full flex justify-center items-center mt-[100px] mob:mt-12">
          <div className="flex w-full max-w-[560px] justify-center items-center flex-wrap gap-[50px] mob:gap-10 mob:px-5">
            {skillsArray.map((skill, index) => (
              <div
                key={index}
                className="w-[96px] h-[96px] mob:w-[85px] mob:h-[85px] relative"
                onMouseEnter={() => sethoverSkill(index)}
                onMouseLeave={() => sethoverSkill(null)}
                data-aos={getAnimationDirection(index)}
                data-aos-duration="1000"
                data-aos-easing="ease-in-sine"
              >
                <Image
                  src={skill}
                  alt="skill"
                  className={`rounded-full w-full h-full pb-1 duration-500 mx-auto ${
                    hoverSkill === index ? "box-shadow duration-500" : ""
                  }`}
                />
                <div
                  className={`w-full text-center mt-3 ${
                    hoverSkill === index
                      ? "opacity-100 duration-500"
                      : "opacity-0"
                  }`}
                >
                  <Text className="text-[14px] font-bold text-white">
                    {skillsNameArray[index]}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
