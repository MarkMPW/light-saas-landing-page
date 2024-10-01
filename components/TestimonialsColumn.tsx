"use client";

import React from "react";
import Image from "next/image";
import { testimonials } from "@/constants/testimonials";
import { motion } from "framer-motion";

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        className="flex flex-col gap-5 pb-6"
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(
              ({ text, imageSrc, name, username }, index) => (
                <div key={index} className="card max-w-[320px] border">
                  <p>{text}</p>
                  <div className="flex items-center mt-5 gap-2">
                    <Image
                      src={imageSrc}
                      alt={imageSrc}
                      width={40}
                      height={40}
                    />
                    <div className="">
                      <p className="font-medium">{name}</p>
                      <p>{username}</p>
                    </div>
                  </div>
                </div>
              )
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default TestimonialsColumn;
