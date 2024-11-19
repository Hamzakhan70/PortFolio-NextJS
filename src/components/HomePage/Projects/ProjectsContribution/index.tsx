import React from "react";

import Button from "@/components/UI/Button";
import Text from "@/components/UI/Text";
import MyModal from "@/components/UI/Modal";
import useDisclosure from "@/hooks/useDisclosure";

interface ProjectsContributionProps {
  title: string;
}

const ProjectContribution: React.FC<ProjectsContributionProps> = ({
  title,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button className=" text-[18px] mt-4 text-[#34C4CA]" onClick={onOpen}>
        My Contribution
      </Button>
      <MyModal
        title="Project Contributions"
        isOpen={isOpen}
        closeModal={onClose}
      >
        <h1>Test</h1>
        <Text className="text-white text-[30px] font-semibold">{title}</Text>
      </MyModal>
    </>
  );
};

export default ProjectContribution;
