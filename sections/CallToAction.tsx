'use client'

import React, { useRef } from "react";
import Image from "next/image";

import ArrowRight from "@/assets/arrow-right.svg";
import star from "@/assets/star.png";
import spring from "@/assets/spring.png";
import { motion, useScroll, useTransform } from "framer-motion";

const CallToAction = () => {
  const ref = useRef(null)
  const { scrollYProgress  } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] overflow-hidden">
      <div className="container">
        <div className="text-center max-w-[540px] mx-auto relative">
          <h1 className="title">Sign up for free today</h1>
          <p className="description mt-5">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <motion.img
            src={star.src}
            alt="star"
            width={360}
            height={360}
            className="absolute -top-[120px] -left-[350px] hidden md:flex"
            style={{
              translateY
            }}
          />
          <motion.img
            src={spring.src}
            alt="spring"
            width={363}
            height={363}
            className="absolute -top-[19px] -right-[331px] hidden md:flex"
            style={{
              translateY
            }}
          />
        </div>
        <div className="flex mt-12 justify-center">
          <button className="btn btn-primary font-medium">Get for free</button>
          <button className="btn btn-text gap-1 font-medium">
            Learn More <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
