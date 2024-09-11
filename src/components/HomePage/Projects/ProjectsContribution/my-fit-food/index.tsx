

import React from 'react'

import Button from '@/components/UI/Button'
import MyModal from '@/components/UI/Modal'
import useDisclosure from '@/hooks/useDisclosure'

const FitFoodContribution = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
   <>
   <Button
          className=" text-[18px] mt-4 text-[#34C4CA]" 
          onClick={onOpen}
        >
          My Contribution
        </Button>
        <MyModal title="Project Contributions" isOpen={isOpen} closeModal={onClose}>
       
        <h1>test</h1>
        </MyModal>
   </>
  )
}

export default FitFoodContribution