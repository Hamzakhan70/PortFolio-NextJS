import React from 'react'

import Text from '@/components/UI/Text'

import ProjectsSlider from './slider'

const Projects = () => {
  return (

    <div className='w-full h-full min-h-[100vh] flex items-center justify-center'>
    <div className='w-full h-full'>
        <Text as="h1" className='text-center'>Blueprints of Creativity</Text>
        <ProjectsSlider />
    </div>
    </div>
  )
}

export default Projects