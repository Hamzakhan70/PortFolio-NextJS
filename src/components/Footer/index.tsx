import React from 'react'
import Link from 'next/link'

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import Text from '../UI/Text';

function Footer() {
  return (
    <div className="flex justify-center items-center p-10 border-t-2">
    <div className="w-full max-w-[1100px] flex flex-col gap-[20px] justify-center items-center">
     
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
      <Text className='text-[22px] text-white'>
      Copyright © Fahim Ul Hassan Aziz
      </Text>
    </div>
  </div>
  )
}

export default Footer