"use client";

import React, { useEffect } from "react";
import Link from "next/link";

import gsap from "gsap";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GiCometSpark } from "react-icons/gi";

import LinkButton from "../UI/LinkButton";
import useDisclosure from "@/hooks/useDisclosure";
import Drawer from "../UI/Drawer";

const Navbar = () => {
  const { onClose, onOpen, isOpen } = useDisclosure();
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="w-full max-w-[1100px] flex justify-between items-center mob:hidden">
        <div>
          <LinkButton
            href="#home-hero"
            className=" bg-transparent border-none text-white hover:bg-transparent"
          >
            Home
          </LinkButton>
          <LinkButton
            href="#about-section"
            className=" bg-transparent border-none text-white hover:bg-transparent"
          >
            About
          </LinkButton>
          <LinkButton
            href="mailto:fahimjsdeveloper@gmail.com"
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
          <Link href="mailto:fahimjsdeveloper@gmail.com">
            <MdEmail className="text-[30px] text-white hover:mt-[-5px] duration-200" />
          </Link>
        </div>
      </div>
      <div className="hidden w-full xl:flex items-center justify-between ">
        {/* <GiCometSpark className="text-center  text-[40px] text-white " /> */}

        <div className="  " onClick={onOpen}>
          <button
            // onClick={toggleMenu}
            type="button"
            className="inline-flex items-center w-10 h-10 justify-center text-sm  text-white rounded-lg  "
            aria-controls="navbar-default"
            aria-expanded={isOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div className="relative z-40">
          <Drawer isOpen={isOpen} onClose={onClose}>
            <div className="flex items-center h-[95%] w-full ">
              <ul className="font-normal  w-full  mob:left-0 mob:w-full z-50 flex flex-col py-4 md:p-0 mt-4 gap-[0px]  rtl:space-x-reverse md:mt-0 ">
                <a
                  href="/"
                  className="block  text-[20px] text-[#FFFFFF] font-montserrat font-medium leading-[25.5px]   "
                >
                  <li className="flex justify-center py-[15px] list-items">
                    Home
                  </li>
                </a>
                <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr>

                <a
                  href="/#about"
                  className="block  text-[20px] font-medium leading-[25.5px] text-[#FFFFFF] font-montserrat  "
                >
                  <li className="flex justify-center py-[15px] list-items">
                    About
                  </li>
                </a>
                <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr>

                <a
                  href="/#contact"
                  className="block  text-[20px]  font-medium leading-[25.5px] text-[#FFFFFF] font-montserrat  "
                >
                  <li className="flex justify-center py-[15px] list-items">
                    Contact
                  </li>
                </a>
                <hr className="h-px  bg-[#C0C0C0] border-0 dark:bg-[#C0C0C0]"></hr>
              </ul>
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
