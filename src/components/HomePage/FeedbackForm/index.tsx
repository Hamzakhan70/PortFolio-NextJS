"use client";

import React, { useState } from "react";

import Button from "@/components/UI/Button";
import Text from "@/components/UI/Text";
import Spinner from "@/components/UI/Spinner";
import { toast } from "sonner";

function FeedbackForm() {
  const [message, setmessage] = useState("");
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [Loading, setLoading] = useState(false);

  const submitform = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    // console.log("Form submitted");
    try {
      const response = await fetch("api/feedbackForm", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ message, email, name }),
      });

      const data = await response.json();

      if (response.ok && !data.error) {
        toast.success("Thank you for the feedback. I'll get back to you soon!");
        setmessage("");
        setname("");
        setemail("");
      } else {
        throw new Error(data.error || "Failed to send email");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to send email. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      className="flex w-full justify-center items-center mb-[200px] mob:mb-[100px] mob:px-5 "
      data-aos="fade-down"
      data-aos-duration="1000"
      data-aos-easing="ease-in-sine"
    >
      <div className="relative">
        <Text className="text-[60px] mb-2 mob:text-[40px] mob:text-center mob:mb-[20px] font-bold">
          Feedback Form
        </Text>

        <Text className="text-[18px] mb-14 mob:mb-[50px]">
          I&apos;d love to hear your thoughts! Let me know how I can improve.
        </Text>
        <form action="" onSubmit={submitform}>
          <input
            type="text"
            value={name}
            required
            onChange={(e) => {
              setname(e.target.value);
            }}
            placeholder="Enter Your Full Name"
            className="bg-white w-full mb-7 h-[55px] rounded-[18px]  p-3 placeholder:font-poppins font-poppins placeholder:text-[#616161] placeholder:text-[17px] focus:outline-none"
          />{" "}
          <br />
          <input
            type="email"
            value={email}
            required
            onChange={(e) => {
              setemail(e.target.value);
            }}
            placeholder="Enter your email address"
            className="bg-white w-full mb-7 h-[55px] rounded-[18px]  p-3 placeholder:font-poppins font-poppins placeholder:text-[#616161] placeholder:text-[17px] text-black focus:outline-none"
          />{" "}
          <br />
          {/* <input
            type="email"
            placeholder="Enter your email address"
            className="bg-white w-full mb-7 h-[55px] rounded-[18px]  p-3 placeholder:font-poppins font-poppins placeholder:text-[#616161] placeholder:text-[17px] focus:outline-none"
          />{" "}
          <br /> */}
          <textarea
            className="bg-white w-full mb-3 h-[55px] rounded-[18px]  p-3 placeholder:font-poppins font-poppins placeholder:text-[#616161] placeholder:text-[17px] focus:outline-none"
            placeholder="Send Your Feedback"
            value={message}
            required
            onChange={(e) => setmessage(e.target.value)}
          />{" "}
          <br />
          <Button
            type="submit"
            disabled={Loading}
            className="text-[18px] bg-[#1B1B1B] hover:bg-black w-full h-[55px] rounded-[18px] mt-4 text-[#34C4CA] hover:text-[#34C4CA]"
          >
            {Loading ? <Spinner /> : "Submit"}
          </Button>
        </form>
      </div>
    </div>
  );
}

export default FeedbackForm;
