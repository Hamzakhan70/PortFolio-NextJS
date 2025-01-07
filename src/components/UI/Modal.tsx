"use client";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { RxCross2 } from "react-icons/rx";
import Text from "./Text";

interface ModalProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}

const MyModal: React.FC<ModalProps> = ({
  title,
  children,
  isOpen,
  closeModal,
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[1001]" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-[#565C67]/50 mob:hidden" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto ">
          <div className="flex min-h-full w-full items-center justify-center py-4 px-6 mob:px-4 text-center mob:bg-[#565C67]/50 mob:bg-opacity-60">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-[85vw] mob:max-w-full transform overflow-hidden bg-black rounded-[5px] mob:rounded-[10px] p-6 ">
                <div className="w-full flex justify-end items-end">
                  <button
                    type="button"
                    className=" rounded-md border border-transparent hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 duration-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    <RxCross2 className="text-[#34C4CA] text-[30px] font-bold" />
                  </button>
                </div>
                <div className="flex justify-center items-center">
                  <Text className=" font-bold text-[40px] mob:text-[35px] text-[#34C4CA] mt-10 mb-5 leading-6 mob:leading-[45px]">
                    {title}
                  </Text>
                </div>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default MyModal;
