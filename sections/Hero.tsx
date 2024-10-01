"use client"

import React, { useRef } from "react";
import ArrowRight from "@/assets/arrow-right.svg";
import CogImage from "@/assets/cog.png";
import Cylinder from "@/assets/cylinder.png";
import Noodle from "@/assets/noodle.png";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress  } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

  return (
    <section ref={ref} className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <p className="tag">
              Version 2.0 is here
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mt-8 bg-gradient-to-t from-[#001E7F] to-black bg-clip-text text-transparent">
              Pathway to productivity
            </h1>
            <p className="mt-8 text-xl md:w-[478px] leading-7 text-[#010D3E] tracking-tight">
              Celebrate the joy of accomplishment with an app designed to track
              your progress, motivate your efforts, and celebrate your
              successes.
            </p>
            <div className="flex mt-[30px]">
              <button className="btn btn-primary">Get for free</button>
              <button className="btn btn-text gap-1">
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={CogImage.src}
              alt="Cog image"
              width={648}
              height={648}
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6"
              animate={{
                translateY: [-30, 30]
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut"
              }}
            />
            <motion.img
              src={Cylinder.src}
              alt="Cylinder image"
              className="hidden md:block md:absolute -top-8 -left-32"
              width={220}
              height={220}
              style={{
                translateY
              }}
            />
            <motion.img
              src={Noodle.src}
              alt="Noodle image"
              width={220}
              height={220}
              className="hidden md:block md:absolute top-[520px] left-[488px] rotate-[30deg]"
              style={{
                rotate: 30,
                translateY
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
