import React from "react";
import Image from "next/image";

import productImage from "@/assets/product-image.png";
import pyramid from "@/assets/pyramid.png";
import tube from '@/assets/tube.png'

const ProductShowcase = () => {
  return (
    <section className="py-24 bg-gradient-to-t from-[#D2DCFF] to-white overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <p className="tag">Boost your productivity</p>
          </div>
          <h1 className="text-center mt-4 text-3xl md:text-[54px] md:leading-[60px] tracking-tighter font-bold bg-gradient-to-t from-[#001E7F] to-black bg-clip-text text-transparent">
            A more effective way to track progress
          </h1>
          <p className="text-center mt-4 leading-[30px] text-[22px]">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
        </div>
        <div className="relative mt-10">
          <Image src={productImage} alt="productImage" />
          <Image
            src={pyramid}
            alt="pyramid image"
            width={262}
            height={262}
            className="absolute -right-36 top-[-120px] hidden md:block"
          />
          <Image 
            src={tube}
            alt="tube image"
            width={248}
            height={248}
            className='absolute -left-36 bottom-24 hidden md:block'
          />
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
