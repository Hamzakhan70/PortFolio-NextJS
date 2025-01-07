import React from "react";

import Button from "@/components/UI/Button";
import Text from "@/components/UI/Text";
import MyModal from "@/components/UI/Modal";
import useDisclosure from "@/hooks/useDisclosure";

interface ProjectsContributionProps {
  title: string;
  content: string[];
}

const ProjectContribution: React.FC<ProjectsContributionProps> = ({
  title,
  content,
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
        <Text className=" text-[#34C4CA] text-[30px] mb-5 mob:text-[20px] font-semibold">
          {title}
        </Text>
        <ul className="list-disc text-left pl-5 pb-8 text-white text-[18px] mob:text-[15px]">
          {content.map((item, index) => {
            const [boldText, ...rest] = item.split(":");
            return (
              <li key={index} className="mb-4 font-poppins">
                <span className="font-bold text-[19px]">{boldText}:</span>
                {rest.length > 0 && <span> {rest.join(":")}</span>}
              </li>
            );
          })}
        </ul>
      </MyModal>
    </>
  );
};

export default ProjectContribution;
