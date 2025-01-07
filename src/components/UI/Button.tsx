import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const button = cva(
  [
    "px-8",
    "py-2",
    "rounded-[8px]",
    "font-semibold",
    "text-[14px]",
    "leading-[36px]",
    "font-poppins",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-[#FFFFFF] text-black font-semibold text-[16px] hover:text-white hover:bg-[#1B1B1B] duration-500 border-2 border-white",
        ],
      },
      size: {
        small: ["py-3", "px-3"],
        medium: [""],
      },
    },
    compoundVariants: [{ variant: "primary", size: "medium" }],
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  ...props
}) => (
  <button
    className={cn(button({ variant, size, className }))}
    {...props}
  ></button>
);

export default Button;
