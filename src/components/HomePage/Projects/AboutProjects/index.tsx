import React from "react";

import Button from "@/components/UI/Button";
import Text from "@/components/UI/Text";
import MyModal from "@/components/UI/Modal";
import useDisclosure from "@/hooks/useDisclosure";

interface ProjectAboutProps {
  title: string;
}

const ProjectAbout: React.FC<ProjectAboutProps> = ({ title }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        className=" text-[18px] bg-transparent border-none mt-4 mob:mt-0 hover:pb-3 duration-75 text-[#34C4CA]"
        onClick={onOpen}
      >
        About the Project
      </Button>
      <MyModal title="Project Case Study" isOpen={isOpen} closeModal={onClose}>
        <Text className="text-white text-[20px] font-semibold">{title}</Text>
      </MyModal>
    </>
  );
};

export default ProjectAbout;
