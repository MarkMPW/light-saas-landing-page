import React from "react";
import Plans from "@/components/Plans";
import { pricingTicker } from "@/constants/pricingTickers";

const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="text-center">
            <h1 className="bg-gradient-to-t from-[#001E7F] to-black bg-clip-text text-transparent md:text-[54px] md:leading-[62px] tracking-tighter font-bold text-[30px]">
              Pricing
            </h1>
            <p className="text-[#010D3E] leading-[30px] tracking-tight text-[22px] mt-4">
              Free forever. Upgrade for unlimited tasks, better security, and
              exclusive features.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end gap-6 justify-center items-center mt-10">
          {pricingTicker.map((plan, index) => (
            <Plans 
              key={index}
              title={plan.title}
              price={plan.price}
              buttonText={plan.buttonText}
              popular={plan.popular}
              inverse={plan.inverse}
              features={plan.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
