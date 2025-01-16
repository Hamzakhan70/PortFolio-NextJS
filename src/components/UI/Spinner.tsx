import React from "react";

import { PiSpinnerLight } from "react-icons/pi";

const Spinner = () => {
  return (
    <div className="text-white flex jutify-center items-center">
      <PiSpinnerLight className="animate-spin-loader font-bold text-[30px] text-white w-full mx-auto" />
    </div>
  );
};

export default Spinner;
