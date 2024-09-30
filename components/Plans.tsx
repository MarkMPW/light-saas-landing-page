import React from "react";
import Check from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
import { TPlaning } from "@/interface/PlaningType";

const Plans = ({
  title,
  popular,
  price,
  buttonText,
  inverse,
  features,
}: TPlaning) => {
  return (
    <div className="max-w-[320px]">
      <div className={`${inverse ? 'bg-black text-white border-[#EAEAEA]' : 'bg-white'} card border`}>
        <div className="text-lg leading-7 tracking-tighter">
          <div className="flex justify-between items-center">
            <p className={twMerge("text-black/50 font-bold",inverse && 'text-white/60' )}>{title}</p>
            {popular && (
              <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                <p className="bg-[linear-gradient(to_right,#DD7DFF,#E1CD86,#8BCB92,#71C2EF,#3BFFFF,#DD7DFF)] bg-clip-text text-transparent font-medium text-sm">
                  Most Popular
                </p>
              </div>
            )}
          </div>

          <h2 className="font-bold text-4xl mt-[30px]">
            ${price}
            <span className={twMerge("text-black/50 text-base", inverse && 'text-white/60')}> /month</span>
          </h2>
          <button className={twMerge("btn btn-primary w-full flex justify-center mt-[30px] font-medium text-base", inverse && 'bg-white text-black')}>
            {buttonText}
          </button>
        </div>
        <div className="mt-[34px] text-sm leading-5">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-6 items-end mt-[22px]">
              <Check className="w-6 h-6" />
              <p>{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;
