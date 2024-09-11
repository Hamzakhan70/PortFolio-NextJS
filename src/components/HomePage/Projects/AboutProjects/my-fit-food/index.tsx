import React from 'react'

import Button from '@/components/UI/Button'
import MyModal from '@/components/UI/Modal'
import useDisclosure from '@/hooks/useDisclosure'

const FitFoodAbout = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
   <Button
          className=" text-[18px] bg-transparent border-none mt-4 hover:pb-3 duration-75 text-[#34C4CA]" 
          onClick={onOpen}
        >
          About the Project
        </Button>
        <MyModal title="Project Case Study" isOpen={isOpen} closeModal={onClose}>
       
        <h1>test</h1>
        </MyModal>
   </>
  )
}

export default FitFoodAbout