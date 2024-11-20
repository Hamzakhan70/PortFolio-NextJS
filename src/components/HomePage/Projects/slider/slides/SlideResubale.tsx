import React, { FC } from "react";
import Image from "next/image";

import Text from "@/components/UI/Text";
import LinkButton from "@/components/UI/LinkButton";
import FitFoodContribution from "../../ProjectsContribution/my-fit-food";
import FitFoodAbout from "../../AboutProjects/my-fit-food";

import fitfood from "../../../../../../public/images/my-fit-food.png";
import ProjectContribution from "../../ProjectsContribution";
import ProjectAbout from "../../AboutProjects";

interface SlidesResubaleProps {
  projectName: string;
  href: string;
  projectSummary: string;
  ProjectsContributionTitle: string;
  ImageSrc: any;
  aboutProject: string;
}

const SlideResubale: FC<SlidesResubaleProps> = ({
  projectName,
  href,
  projectSummary,
  ProjectsContributionTitle,
  ImageSrc,
  aboutProject,
}) => {
  return (
    <div className=" border border-1 w-full flex items-center px-5 py-10 mob:flex-col-reverse justify-center rounded-[12px]">
      <div className="w-[50%] mob:w-full">
        <Text className="text-[#34C4CA] text-[20px]">Showcase Spotlight: </Text>
        <Text
          as="h1"
          className="mob:text-[32px] mob:leading-[38px] mob:text-semibold mob:my-4 mob:text-center"
        >
          {projectName}
        </Text>
        <LinkButton
          href={href}
          className="mob:mx-auto mob:p-2 mob:w-full text-[18px] text-[#34C4CA]"
        >
          Visit Project
        </LinkButton>
        <Text className="mt-4 mob:text-[15px] mob:text-center">
          {projectSummary}
        </Text>
        <div className="flex gap-10 mob:flex-col mob:gap-2">
          <ProjectContribution title={ProjectsContributionTitle} />
          <ProjectAbout title={aboutProject} />
          {/* <FitFoodContribution /> */}
          {/* <FitFoodAbout /> */}
        </div>
      </div>
      <div className="w-[50%] mob:w-full mob:mb-10 h-full border border-white py-5 px-2 rounded-[8px]">
        <Image
          src={ImageSrc}
          alt="Fit-food"
          className="w-full h-full rounded-[4px]"
        />
      </div>
    </div>
  );
};

export default SlideResubale;
