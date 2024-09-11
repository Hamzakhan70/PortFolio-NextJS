import React from "react";
import Image from "next/image";

import Text from "@/components/UI/Text";
import LinkButton from "@/components/UI/LinkButton";
import FitFoodContribution from "../../ProjectsContribution/my-fit-food";
import FitFoodAbout from "../../AboutProjects/my-fit-food";

import foundation from "../../../../../../public/images/1890-foundation.png";

const SlideThree = () => {
  return (
    <div className=" border border-1 w-full flex items-center px-5 py-10 justify-center rounded-[12px]">
      <div className="w-[50%]">
        <Text className="text-[#34C4CA] text-[20px]">Showcase Spotlight: </Text>
        <Text as="h1">1890 Foundation</Text>
        <LinkButton
          href="https://www.1890foundation.org/"
          className=" text-[18px] text-[#34C4CA]"
        >
          Visit Project
        </LinkButton>
        <Text className="mt-4">
          Support and empower the next generation with 1890 Foundation.
          Championing historically Black colleges and universities, this
          platform provides vital resources, scholarships, and opportunities to
          enhance educational outcomes and foster success for students across
          the nation.
        </Text>
        <div className="flex gap-10">
          <FitFoodContribution />
          <FitFoodAbout />
        </div>
      </div>
      <div className="w-[50%] h-full border border-white py-5 px-2 rounded-[8px]">
        <Image
          src={foundation}
          alt="1890 Foundation"
          className="w-full h-full rounded-[4px]"
        />
      </div>
    </div>
  );
};

export default SlideThree;
