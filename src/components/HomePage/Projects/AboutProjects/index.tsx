import React from "react";
import Button from "@/components/UI/Button";
import MyModal from "@/components/UI/Modal";
import useDisclosure from "@/hooks/useDisclosure";

interface ProjectAboutProps {
  title: string;
  content: string[];
}

const ProjectAbout: React.FC<ProjectAboutProps> = ({ title, content }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const renderContent = () => {
    let isChallengesSection = false;

    return content.map((item, index) => {
      if (
        item.startsWith("Challenges:") ||
        item.startsWith("Scope and Solution:") ||
        item.startsWith("Key Features:") ||
        item.startsWith("Implementation Details:")
      ) {
        isChallengesSection = true;

        return (
          <li key={index} className="mb-2 font-poppins">
            <span className="font-bold text-[20px] text-[#34C4CA]">{item}</span>
          </li>
        );
      }

      if (isChallengesSection && !item.includes(":")) {
        const [boldText, ...rest] = item.split(";");
        return (
          <ul
            key={index}
            className="list-decimal pl-8 mob:pl-0 font-poppins mb-3"
          >
            <span className="font-bold text-[18px]">{boldText}:</span>{" "}
            {rest.join(":")}
          </ul>
        );
      }

      isChallengesSection = false;
      const [boldText, ...rest] = item.split(":");
      return (
        <li key={index} className="mb-4 font-poppins">
          <span className="font-bold text-[20px] text-[#34C4CA]">
            {boldText}:
          </span>{" "}
          {rest.join(":")}
        </li>
      );
    });
  };

  return (
    <>
      <Button
        className="text-[18px] bg-transparent border-none mt-4 mob:mt-0 hover:pb-3 duration-75 text-[#34C4CA]"
        onClick={onOpen}
      >
        About the Project
      </Button>
      <MyModal title="Project Case Study" isOpen={isOpen} closeModal={onClose}>
        <ul className="list-disc text-left pl-5 pb-8 mt-9 text-white text-[18px] mob:text-[15px]">
          {renderContent()}
        </ul>
      </MyModal>
    </>
  );
};

export default ProjectAbout;
