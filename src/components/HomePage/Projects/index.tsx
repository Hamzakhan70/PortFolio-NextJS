import React from "react";

import Text from "@/components/UI/Text";

import ProjectsSlider from "./slider";

const Projects = () => {
  return (
    <div
      className="w-full h-full min-h-[90vh] mob:min-h-max flex items-center justify-center px-5"
      data-aos="fade-up"
    >
      <div className="w-full h-full">
        <Text
          as="h1"
          className="text-center mob:text-[40px] mob:leading-[48px]"
        >
          Blueprints of Creativity
        </Text>
        <ProjectsSlider />
      </div>
    </div>
  );
};

export default Projects;
