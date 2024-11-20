import React from "react";

import Text from "@/components/UI/Text";

import ProjectsSlider from "./slider";

const Projects = () => {
  return (
    <div className="w-full h-full min-h-[100vh] mob:min-h-max flex items-center justify-center px-5">
      <div className="w-full h-full">
        <Text
          as="h1"
          className="text-center mob:text-[32px] mob:leading-[38px]"
        >
          Blueprints of Creativity
        </Text>
        <ProjectsSlider />
      </div>
    </div>
  );
};

export default Projects;
