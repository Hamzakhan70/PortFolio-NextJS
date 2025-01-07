import React, { FC } from "react";
import Image from "next/image";

import Text from "@/components/UI/Text";
import LinkButton from "@/components/UI/LinkButton";
import ProjectContribution from "../../ProjectsContribution";
import ProjectAbout from "../../AboutProjects";

interface SlidesResubaleProps {
  projectName: string;
  href: string;
  projectSummary: string;
  ProjectsContributionTitle: string;
  ImageSrc: any;
  aboutProject: string;
  aboutContent: string[];
  projectsContributionContent: string[];
}

const SlideResubale: FC<SlidesResubaleProps> = ({
  projectName,
  href,
  projectSummary,
  ProjectsContributionTitle,
  ImageSrc,
  aboutProject,
  aboutContent,
  projectsContributionContent,
}) => {
  return (
    <div className="border border-1 w-full flex items-center px-5 py-10 mob:flex-col-reverse justify-center rounded-[12px]">
      <div className="w-[50%] mob:w-full">
        <Text className="text-[#34C4CA] text-[20px] mob:font-medium">
          Showcase Spotlight:{" "}
        </Text>
        <Text
          as="h1"
          className="mob:text-[40px] mob:leading-[48px] mob:text-semibold mob:my-4 mob:text-center"
        >
          {projectName}
        </Text>
        <LinkButton
          href={href}
          className="mob:mx-auto mob:p-2 mob:w-full text-[18px] text-[#34C4CA]"
        >
          Visit Project
        </LinkButton>
        <Text className="mt-4 mob:text-[15px] mob:text-center mob:font-medium">
          {projectSummary}
        </Text>
        <div className="flex gap-10 mob:flex-col mob:gap-2">
          <ProjectContribution
            title={ProjectsContributionTitle}
            content={projectsContributionContent}
          />
          <ProjectAbout title={aboutProject} content={aboutContent} />
        </div>
      </div>
      <div className="w-[50%] mob:w-full mob:mb-10 h-full border border-white py-5 px-2 rounded-[8px]">
        <Image
          src={ImageSrc}
          alt="Project image"
          className="w-full h-full rounded-[4px]"
        />
      </div>
    </div>
  );
};

export default SlideResubale;
