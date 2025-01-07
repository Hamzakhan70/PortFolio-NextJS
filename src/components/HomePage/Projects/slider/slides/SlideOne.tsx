import React from "react";
import Image from "next/image";

import Text from "@/components/UI/Text";
import LinkButton from "@/components/UI/LinkButton";
import FitFoodContribution from "../../ProjectsContribution/my-fit-food";
import FitFoodAbout from "../../AboutProjects/my-fit-food";

import fitfood from "../../../../../../public/images/my-fit-food.png";

const SlideOne = () => {
  return (
    <div className=" border border-1 w-full flex items-center px-5 py-10 mob:flex-col justify-center rounded-[12px]">
      <div className="w-[50%] mob:w-full">
        <Text className="text-[#34C4CA] text-[20px]">Showcase Spotlight: </Text>
        <Text as="h1">My Fit Food</Text>
        <LinkButton
          href="https://www.myfitfoods.com/"
          className=" text-[18px] text-[#34C4CA]"
        >
          Visit Project
        </LinkButton>
        <Text className="mt-4">
          Transform your meal planning with My Fit Food. Enjoy a seamless
          experience through tailored meal options and personalized dietary
          filters, all supported by easy-to-use tools and smooth e-commerce
          integration.
        </Text>
        <div className="flex gap-10">
          <FitFoodContribution />
          <FitFoodAbout />
        </div>
      </div>
      <div className="w-[50%] h-full border border-white py-5 px-2 rounded-[8px]">
        <Image
          src={fitfood}
          alt="Fit-food"
          className="w-full h-full rounded-[4px]"
        />
      </div>
    </div>
  );
};

export default SlideOne;
