import React from "react";
import Text from "@/components/UI/Text";

const Education = () => {
  return (
    <div className="w-full h-full min-h-[100vh] flex items-center mob:min-h-fit justify-center mob:mb-12">
      <div className="w-full h-full  flex justify-center items-center px-5">
        <div>
          <Text
            as="h1"
            className="text-center mb-14 mob:text-[32px] mob:leading-[38px]"
          >
            Education
          </Text>
          <div className="flex justify-center gap-[20px] items-center">
            {/* right side div */}
            <div className="">
              {/* ping animation div */}
              <div className="w-[35px] h-[35px] rounded-full border-[4px] border-white relative flex justify-center items-center">
                <div className="w-[20px] h-[20px] rounded-full bg-[#33BECF] animate-pulse absolute"></div>
              </div>
              {/* ping animation div */}
              <div className=" w-full max-w-[3px] h-[300px] ml-[10px] bg-white mob:h-[350px]"></div>
              {/* ping animation div */}
              <div className="w-[35px] h-[35px] rounded-full border-[4px] border-white relative flex justify-center items-center">
                <div className="w-[20px] h-[20px] rounded-full bg-[#33BECF] animate-pulse absolute"></div>
              </div>
              {/* ping animation div */}
            </div>
            {/* right side div */}

            {/* left side div */}
            <div>
              <div className=" mb-[100px] mob:mb-10">
                <Text
                  as="h2"
                  className=" text-[30px] mob:text-[22px] mob:leading-[30px] mob:mb-1 text-[#FFF]/90"
                >
                  Bachelor of Computer Science (BSCS)
                </Text>

                <Text className="text-[19px] mob:text-[16px] font-semibold text-[#33BECF]">
                  Government College University (GCU), Lahore --{" "}
                  <span className="text-[17px] text-[#B8B9B9] mob:text-[14px]">
                    (2019 - 2023)
                  </span>
                </Text>
                <Text className="text-[22px] mob:text-[19px] text-[#B8B9B9] my-2 font-semibold">
                  Major Courses:
                </Text>
                <ul className="list-disc ml-4">
                  <li className="font-poppins text-white text-[15px] font-medium leading-[26px]">
                    Data Structures and Algorithams (DSA)
                  </li>
                  <li className="font-poppins text-white text-[15px] font-medium leading-[26px]">
                    Object Oriented Programming (OOP){" "}
                  </li>
                  <li className="font-poppins text-white text-[15px] font-medium leading-[26px]">
                    Assembly Language
                  </li>
                  <li className="font-poppins text-white text-[15px] font-medium leading-[26px]">
                    Computer Networks
                  </li>
                </ul>
              </div>

              {/* intermediate div */}
              <Text
                as="h2"
                className=" text-[30px] mob:text-[22px] mob:leading-[30px] text-[#FFF]/90"
              >
                Intermediate in Sciences
              </Text>
              <Text className="text-[19px] mob:text-[16px] font-semibold text-[#33BECF]">
                Superior Group of College, Pattoki --{" "}
                <span className="mob:text-[14px] text-[17px] text-[#B8B9B9]">
                  (2017 - 2019)
                </span>
              </Text>
              <Text className="text-[16px]  text-[#fff] my-2 font-medium">
                Relevant courses include Mathematics, Physics, and Chemistry
              </Text>
              {/* intermediate div */}
            </div>
            {/* left side div */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
