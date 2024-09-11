"use client";

import React, { useState } from "react";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import Text from "@/components/UI/Text";

const HomeAbout: React.FC = () => {
  const [clientsCounter, setClientsCounter] = useState(false);

  return (
    <div className="flex justify-center h-full min-h-[79vh] items-center">
      <div>
        <Text as="h1" className="text-center">
          About
        </Text>

        <Text className="text-[20px] font-bold py-4">BIOGRAPHY</Text>
        <Text className="max-w-[1200px]">
          Hello ! This is Faheem. I&apos;m a full stack web developer with a passion
          for crafting stunning, functional, and user-centric digital journeys.
          With a solid 1-year journey in the field, I have always looking for
          innovative ways to bring clients&apos; visions to life. <br /> <br />I
          believe that design is about more than just making things look pretty;
          it&apos;s about solving problems and creating intuitive, enjoyable
          experiences for users. Whether crafting websites, managing technical
          aspects, or developing digital projects, I focus on delivering
          solutions that are well-designed, functional, and user-friendly.{" "}
          <br /> <br />
          Excited about contributing my skills and enthusiasm, I&apos;m ready
          to take on new challenges and bring fresh ideas to the your project.
        </Text>
        <div className="flex justify-between items-center mt-6">
          <Text as="h1">
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

          {/* projects */}
          <Text as="h1">
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

          {/* experience */}

          <Text as="h1">
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
          <Text className="text-[20px] font-medium"> Satisfied Clients</Text>
          <Text className="text-[20px] mr-12 font-medium"> Projects</Text>
          <Text className="text-[20px] font-medium"> Experience</Text>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
