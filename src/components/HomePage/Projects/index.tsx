import React from 'react'

import Text from '@/components/UI/Text'

import ProjectsSlider from './slider'

const Projects = () => {
  return (
    <div>
        <Text as="h1" className='text-center'>Blueprints of Creativity</Text>
        <ProjectsSlider />
    </div>
  )
}

export default Projects