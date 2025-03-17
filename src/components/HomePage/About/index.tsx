"use client";

import React, { useState } from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import Text from "@/components/UI/Text";

const HomeAbout: React.FC = () => {
  const [clientsCounter, setClientsCounter] = useState(false);

  return (
    <div
      className="flex justify-center h-full min-h-[79vh] mob:min-h-fit mob:mb-24 items-center px-5"
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-easing="ease-in-sine"
    >
      <div>
        <Text
          as="h1"
          className="text-center mob:text-[40px] mob:leading-[48px]"
        >
          About
        </Text>

        <Text className="text-[20px] mob:text-[20px] mob:leading-5 mob:text-center font-bold py-4">
          BIOGRAPHY
        </Text>
        <Text className="max-w-[1200px] mob:text-center mob:text-[16px] mob:leading-5">
          Hello ! This is Hamza!. I&apos;m a full stack web developer with a
          passion for crafting stunning, functional, and user-centric digital
          journeys. With a solid 1-year journey in the field, I have always
          looking for innovative ways to bring clients&apos; visions to life.{" "}
          <br /> <br />I believe that design is about more than just making
          things look pretty; it&apos;s about solving problems and creating
          intuitive, enjoyable experiences for users. Whether crafting websites,
          managing technical aspects, or developing digital projects, I focus on
          delivering solutions that are well-designed, functional, and
          user-friendly. <br /> <br />
          Excited about contributing my skills and enthusiasm, I&apos;m ready to
          take on new challenges and bring fresh ideas to the your project.
        </Text>
        <div className="flex justify-between items-center mt-6">
          <Text as="h1" className="mob:text-[40px] mob:leading-[48px]">
            <CountUp start={clientsCounter ? undefined : 0} end={4}>
              {({ countUpRef }) => {
                return (
                  <ReactVisibilitySensor
                    active={!clientsCounter}
                    onChange={(isVisible: boolean) => {
                      if (isVisible) {
                        setClientsCounter(true);
                      }
                    }}
                    delayedCall
                  >
                    <span ref={countUpRef} />
                  </ReactVisibilitySensor>
                );
              }}
            </CountUp>{" "}
            + <br />
          </Text>

          <Text as="h1" className="mob:text-[40px] mob:leading-[48px]">
            <CountUp start={clientsCounter ? undefined : 0} end={3}>
              {({ countUpRef }) => {
                return (
                  <ReactVisibilitySensor
                    active={!clientsCounter}
                    onChange={(isVisible: boolean) => {
                      if (isVisible) {
                        setClientsCounter(true);
                      }
                    }}
                    delayedCall
                  >
                    <span ref={countUpRef} />
                  </ReactVisibilitySensor>
                );
              }}
            </CountUp>{" "}
            + <br />
          </Text>

          <Text as="h1" className="mob:text-[40px] mob:leading-[48px]">
            <CountUp start={clientsCounter ? undefined : 0} end={1}>
              {({ countUpRef }) => {
                return (
                  <ReactVisibilitySensor
                    active={!clientsCounter}
                    onChange={(isVisible: boolean) => {
                      if (isVisible) {
                        setClientsCounter(true);
                      }
                    }}
                    delayedCall
                  >
                    <span ref={countUpRef} />
                  </ReactVisibilitySensor>
                );
              }}
            </CountUp>{" "}
            + <br />
          </Text>
        </div>

        <div className="flex justify-between mb-6">
          <Text className="text-[20px] font-medium mob:text-[15px] mob:leading-5">
            {" "}
            Satisfied Clients
          </Text>
          <Text className="text-[20px] mr-12 font-medium mob:text-[15px] mob:leading-5">
            {" "}
            Projects
          </Text>
          <Text className="text-[20px] font-medium mob:text-[15px] mob:leading-5">
            {" "}
            Experience
          </Text>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
