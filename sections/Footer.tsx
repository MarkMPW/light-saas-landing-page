import React from "react";
import Image from "next/image";

import Logo from "@/assets/logosaas.png";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialX from "@/assets/social-x.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] py-10">
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:blur before:absolute">
            <Image
              src={Logo}
              alt="Logo"
              width={40}
              height={40}
              className="relative"
            />
          </div>

          <ul className="mt-6 text-center flex flex-col gap-6 md:flex-row text-sm">
            <li>About</li>
            <li>Features</li>
            <li>Customers</li>
            <li>Pricing</li>
            <li>Help</li>
            <li>Careers</li>
          </ul>
          <div className="flex gap-4 mt-6">
            <SocialInsta />
            <SocialLinkedIn />
            <SocialPin />
            <SocialX />
            <SocialYoutube />
          </div>

          <p className="text-sm mt-6">
            © 2024 Ohaiyoo Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
