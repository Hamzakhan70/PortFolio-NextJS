"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import gsap from "gsap";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GiCometSpark } from "react-icons/gi";

import LinkButton from "../UI/LinkButton";
import useDisclosure from "@/hooks/useDisclosure";
import Drawer from "../UI/Drawer";

import hiresvg from "../../../public/images/hire.svg";

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
            href="#contact-me"
            className=" bg-transparent border-none text-white hover:bg-transparent"
          >
            Contact
          </LinkButton>
        </div>
        <div className="flex gap-2">
          <Link href="http://github.com/Hamzakhan70">
            <FaGithub className="text-[30px] text-white hover:mt-[-5px] duration-200" />
          </Link>
          <Link href="http://www.linkedin.com/in/hamza-khan-87064319b">
            <FaLinkedin className="text-[30px] text-white hover:mt-[-5px] duration-200" />
          </Link>
          <Link href="mailto:Hamzaarifkhan70@gmail.com">
            <MdEmail className="text-[30px] text-white hover:mt-[-5px] duration-200" />
          </Link>
        </div>
      </div>
      <div className="hidden w-full xl:flex items-center justify-between ">
        {/* <GiCometSpark className="text-center  text-[40px] text-white " /> */}

        <div className="flex items-center  w-full">
          <div className="pl-4" onClick={onOpen}>
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

          <div className="fixed bottom-4 right-4 flex items-center justify-center overflow-hidden mob:absolute mob:bottom-auto mob:left-auto mob:right-0 mob:top-0 ">
            <div className="relative mob:flex h-auto w-[200px] items-center justify-center mob:w-[130px] hidden">
              <Image src={hiresvg} alt="hire" className="animate-spin" />
              <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-solid p-0 text-[16px] font-semibold text-light shadow-md  mob:h-[2.7rem] mob:w-[2.7rem] mob:text-[10px]">
                <LinkButton
                  href="mailto:Hamzaarifkhan70@gmail.com"
                  className="w-[80px] h-[80px] mob:w-[50px] mob:h-[50px] p-0 hover:text-white flex justify-center items-center text-[17px] mob:text-[10px] rounded-full"
                >
                  Hire Me
                </LinkButton>
              </div>

              <LinkButton
                href="mailto:Hamzaarifkhan70@gmail.com"
                className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-solid border-dark bg-dark p-0 text-[16px] font-semibold text-light shadow-md  dark:bg-light dark:text-dark  mob:h-[2.7rem] mob:w-[2.7rem] mob:text-[10px]"
              >
                Hire Me
              </LinkButton>
            </div>
          </div>
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
