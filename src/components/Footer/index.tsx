import React from "react";
import Link from "next/link";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import Text from "../UI/Text";
import Button from "../UI/Button";

function Footer() {
  return (
    <div className="flex justify-center items-center p-10 border-t-2">
      <div className="w-full max-w-[1100px] flex flex-col gap-[20px] justify-center items-center">
        <div className="flex justify-between items-center w-full mob:flex-col mob:gap-7 ">
          <div className="flex gap-4">
            <Link href="https://github.com/faheem-ul">
              <FaGithub className="text-[40px] text-white hover:mt-[-5px] duration-200" />
            </Link>
            <Link href="https://www.linkedin.com/in/fahim-ul-hassan-3871452a0/">
              <FaLinkedin className="text-[40px] text-white hover:mt-[-5px] duration-200" />
            </Link>
            <Link href="mailto:faheemulhassanaziz@gmail.com">
              <MdEmail className="text-[40px] text-white hover:mt-[-5px] duration-200" />
            </Link>
          </div>
          <div className="relative">
            <textarea
              className="bg-white w-[400px] h-[50px] rounded-[10px] mob:w-auto p-3 placeholder:font-poppins font-poppins placeholder:text-[#616161] placeholder:text-[17px] focus:outline-none"
              placeholder="Send Your Feedback"
            />
            <Button
              type="submit"
              className="absolute right-1 bottom-[9px] bg-blue-500 text-white px-4 py-2 rounded-[10px] hover:bg-blue-600"
            >
              Submit
            </Button>
          </div>
        </div>
        <Text className="text-[22px] text-white mob:text-center mob:text-[15px]">
          Copyright © Fahim Ul Hassan Aziz
        </Text>
      </div>
    </div>
  );
}

export default Footer;
