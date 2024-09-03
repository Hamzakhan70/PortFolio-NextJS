import React from "react";
import Link from "next/link";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import LinkButton from "../UI/LinkButton";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="w-full max-w-[1100px] flex justify-between items-center">
        <div>
          <LinkButton
            href="/"
            className=" bg-transparent border-none text-white hover:bg-transparent"
          >
            Home
          </LinkButton>
          <LinkButton
            href="/about"
            className=" bg-transparent border-none text-white hover:bg-transparent"
          >
            About
          </LinkButton>
          <LinkButton
            href="/contact"
            className=" bg-transparent border-none text-white hover:bg-transparent"
          >
            Contact
          </LinkButton>
        </div>
        <div className="flex gap-2">
          <Link href="https://github.com/faheem-ul">
            <FaGithub className="text-[30px] text-white hover:mt-[-5px] duration-200" />
          </Link>
          <Link href="https://www.linkedin.com/in/fahim-ul-hassan-3871452a0/">
            <FaLinkedin className="text-[30px] text-white hover:mt-[-5px] duration-200" />
          </Link>
          <Link href="mailto:faheemulhassanaziz@gmail.com">
            <MdEmail className="text-[30px] text-white hover:mt-[-5px] duration-200" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
