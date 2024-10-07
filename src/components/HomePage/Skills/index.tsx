"use client"

import React, {useState} from 'react'
import Image from 'next/image'

import Text from '@/components/UI/Text'

import html from "../../../../public/images/html.svg"
import css from "../../../../public/images/css.svg"
import chakraui from "../../../../public/images/Chakra-ui.png"
import js from "../../../../public/images/javascript.svg"
import react from "../../../../public/images/react.svg"
import nextjs from "../../../../public/images/nextjs.svg"
import tailwindcss from "../../../../public/images/tailwindcss.svg"
import reactQuery from "../../../../public/images/react-query.png"
import Node from "../../../../public/images/nodejs.f4675121.svg"
import firebase from "../../../../public/images/firebase.svg"
import express from "../../../../public/images/expressjs.svg"

const Skills = () => {
const [hoverSkill, sethoverSkill] = useState<number | null>(null)

    const skillsArray = [html, css, chakraui, tailwindcss, js, react, nextjs, reactQuery, Node, firebase, express]
    const skillsNameArray = ["HTML", "CSS", "Chakra UI", "Tailwind CSS", "JavaScript", "React", "Next JS", "React Query", "Node JS", "Firebase", "Express"]
  return (
    <div className="w-full h-full min-h-[76vh] flex items-center justify-center">
      <div className="w-full h-full relative">
      <Text as="h1" className='text-center'>Development Skills</Text>
      <div className='w-full flex justify-center items-center mt-[100px]'>
      <div className='flex w-full max-w-[560px] justify-center items-center flex-wrap gap-[50px]'>
        {skillsArray.map((skill,index)=>(
            <div key={index} className='w-[96px] h-[96px] relative'
            onMouseEnter={()=>sethoverSkill(index)}
            onMouseLeave={()=>sethoverSkill(null)}
            >
                <Image src={skill} alt={skill.name} className= {`rounded-full w-full h-full pb-1 duration-500 mx-auto ${hoverSkill === index ? 'box-shadow duration-500' : ''}`} />
                <div className={`w-full text-center mt-3 ${hoverSkill === index ? 'opacity-100 duration-500' : 'opacity-0'}`}>
                <Text className='text-[14px] font-bold text-white'>{skillsNameArray[index]}</Text>
                </div>
            </div>
        ))}
      </div>
      </div>
        </div>
        </div>
  )
}

export default Skills