import React, { useState } from "react";
import Link from "next/link";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

import Text from "../UI/Text";

function Footer() {
  return (
    <div
      className="flex justify-center items-center p-10 mob:px-7 border-t-2"
      id="contact-me"
    >
      <div className="w-full max-w-[1100px] mob:max-w-full flex flex-col gap-[20px] justify-center items-center">
        <div className="flex justify-between items-center mob:flex-col mob:items-start w-full mob:justify-center mob:gap-0">
          <div className="">
            <div className="flex gap-3 items-center mb-5">
              <Link href="https://github.com/Hamzakhan70">
                <FaGithub className="text-[40px] text-white" />
              </Link>
              <Link href="https://github.com/Hamzakhan70">
                <Text>github.com/Hamzakhan70</Text>
              </Link>
            </div>
            <div className="flex gap-3 items-center mb-5">
              <Link href="https://www.linkedin.com/in/fahim-ul-hassan-3871452a0/">
                <FaLinkedin className="text-[40px] text-white" />
              </Link>
              <Link href="https://www.linkedin.com/in/hamza-khan-87064319b">
                <Text>linkedin.com/in/Hamza</Text>
              </Link>
            </div>
          </div>
          <div className="">
            <div className="flex gap-3 items-center mb-5">
              <Link href="https://github.com/Hamzakhan70">
                <MdEmail className="text-[40px] text-white" />
              </Link>

              <a href="mailto: Hamzaarifkhan70@gmail.com">
                <Text>Hamzaarifkhan70@gmail.com</Text>
              </a>
            </div>
            <div className="flex gap-3 items-center mb-5">
              <Link href="tel:03056761558">
                <IoCall className="text-[40px] text-white" />
              </Link>
              <Link href="tel:03056761558">
                <Text>+92-305-6761558</Text>
              </Link>
            </div>
          </div>
        </div>
        <Text className="text-[22px] text-white mob:text-center mob:text-[15px]">
          Copyright © Hamza Arif Khan
        </Text>
      </div>
    </div>
  );
}

export default Footer;
