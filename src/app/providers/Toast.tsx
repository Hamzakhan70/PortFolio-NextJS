"use client";

import React, { Children } from "react";

import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import { Toaster } from "sonner";

interface props {
  children: React.ReactNode;
}

const ToastProvider = ({ children }: props) => {
  return (
    <>
      {children}
      <Toaster position="top-center" richColors />
    </>
  );
};

export default ToastProvider;
