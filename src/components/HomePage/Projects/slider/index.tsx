"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

import SlideOne from "./slides/SlideOne";
import SlideTwo from "./slides/SlideTwo";
import SlideThree from "./slides/SlideThree";
import fitfood from "../../../../../public/images/my-fit-food.png";
import stndrd from "../../../../../public/images/stndrd.png";
import foundation from "../../../../../public/images/1890-foundation.png";

import SlideResubale from "./slides/SlideResubale";
// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import FitFoodContribution from "../ProjectsContribution/my-fit-food";
import FitFoodAbout from "../AboutProjects/my-fit-food";

export default function ProjectsSlider() {
  return (
    <div className="">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        initialSlide={1}
        speed={1000}
        // autoplay={{
        //     delay: 3000,
        //     disableOnInteraction: false,
        //   }}
        //   loop={true}
        coverflowEffect={{
          rotate: 90,
          //   stretch: 100,
          depth: 100,
          //   modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="projects-swiper">
          <SlideResubale
            projectName="My Fit Food"
            href="https://www.myfitfoods.com/"
            projectSummary="Transform your meal planning with My Fit Food. Enjoy a seamless
          experience through tailored meal options and personalized dietary
          filters, all supported by easy-to-use tools and smooth e-commerce
          integration."
            ImageSrc={fitfood}
            ProjectsContributionTitle="This is My Fit Food Project Contribution Title"
            aboutProject="This is About Fit Food Project"
          />
        </SwiperSlide>
        <SwiperSlide>
          <SlideResubale
            projectName="STNDRD"
            href="https://www.stndrd.app/"
            projectSummary="Elevate your fitness journey with STNDRD by Chris Bumstead. Experience
          premium training programs, top-quality apparel, and expert guidance
          that empowers you to achieve your bodybuilding goals with style and
          precision."
            ImageSrc={stndrd}
            ProjectsContributionTitle="This is Standrd Project Contribution Title"
            aboutProject="This is about Standrd Project"
          />
          {/* <div className="flex gap-10">
            <FitFoodContribution />
            <FitFoodAbout />
          </div> */}
        </SwiperSlide>
        <SwiperSlide>
          <SlideResubale
            projectName="1890 Foundation"
            href="https://www.1890foundation.org/"
            projectSummary=" Support and empower the next generation with 1890 Foundation.
          Championing historically Black colleges and universities, this
          platform provides vital resources, scholarships, and opportunities to
          enhance educational outcomes and foster success for students across
          the nation."
            ImageSrc={foundation}
            ProjectsContributionTitle="This is 1890 Project Contribution Title"
            aboutProject="This is about 1890 Project"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
