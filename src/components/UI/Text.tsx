import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type ComponentAs = "h1" | "h2";

interface Props {
  children: React.ReactNode;
  className?: string;
  as?: ComponentAs;
  onclick?: any;
}

const Text = forwardRef<HTMLHeadingElement | HTMLParagraphElement, Props>(
  (props, ref) => {
    const { children, className, as, onclick } = props;
    if (as === "h1") {
      return (
        <h1
          ref={ref}
          className={cn(
            "font-poppins text-white text-[60px] font-bold leading-[96px]",
            className
          )}
          onClick={onclick}
        >
          {children}
        </h1>
      );
    }

    if (as === "h2") {
      return (
        <h2
          ref={ref}
          className={cn(
            "font-poppins text-white text-[48px] font-semibold leading-[32px]",
            className
          )}
          onClick={onclick}
        >
          {children}
        </h2>
      );
    }
    return (
      <p
        ref={ref}
        className={cn(
          "font-poppins text-white text-[18px] font-normal leading-6",
          className
        )}
        onClick={onclick}
      >
        {children}
      </p>
    );
  }
);

Text.displayName = "Text";

export default Text;
