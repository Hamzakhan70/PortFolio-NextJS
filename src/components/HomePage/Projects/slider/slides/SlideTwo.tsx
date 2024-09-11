import React from "react";
import Image from "next/image";

import Text from "@/components/UI/Text";
import LinkButton from "@/components/UI/LinkButton";
import FitFoodContribution from "../../ProjectsContribution/my-fit-food";
import FitFoodAbout from "../../AboutProjects/my-fit-food";

import stndrd from "../../../../../../public/images/stndrd.png";

const SlideTwo = () => {
  return (
    <div className=" border border-1 w-full flex items-center px-5 py-10 justify-center rounded-[12px]">
      <div className="w-[50%]">
        <Text className="text-[#34C4CA] text-[20px]">Showcase Spotlight: </Text>
        <Text as="h1">STNDRD</Text>
        <LinkButton
          href="https://www.stndrd.app/"
          className=" text-[18px] text-[#34C4CA]"
        >
          Visit Project
        </LinkButton>
        <Text className="mt-4">
          Elevate your fitness journey with STNDRD by Chris Bumstead. Experience
          premium training programs, top-quality apparel, and expert guidance
          that empowers you to achieve your bodybuilding goals with style and
          precision.
        </Text>
        <div className="flex gap-10">
          <FitFoodContribution />
          <FitFoodAbout />
        </div>
      </div>
      <div className="w-[50%] h-full border border-white py-5 px-2 rounded-[8px]">
        <Image
          src={stndrd}
          alt="STNDRD"
          className="w-full h-full rounded-[4px]"
        />
      </div>
    </div>
  );
};

export default SlideTwo;
