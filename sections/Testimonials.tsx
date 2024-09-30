import React from "react";
import { testimonials } from "@/constants/testimonials";
import TestimonialsColumn from "@/components/TestimonialsColumn";

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex flex-col justify-center items-center">
            <p className="tag">Version 2.0 is here</p>
            <h2 className="mt-5 title">What our users say</h2>
            <p className="mt-5 description text-center">
              From intuitive design to powerful features, our app has become an
              essential tool for users around the world.
            </p>
          </div>
        </div>

        <div className='flex gap-6 justify-center'>
          <TestimonialsColumn testimonials={firstColumn}/>
          <TestimonialsColumn testimonials={secondColumn} className='hidden md:block'/>
          <TestimonialsColumn testimonials={thirdColumn} className='hidden lg:block'/>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
