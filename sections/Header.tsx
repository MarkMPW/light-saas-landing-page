import React from "react";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from '@/assets/menu.svg'

const Header = () => {
  return (
    <header className='sticky top-0 backdrop-blur-sm z-10'>
      <div className="flex justify-center items-center bg-black text-white gap-4 py-3">
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and boost your productivity.
        </p>
        <div className="inline-flex items-center gap-1">
          <a href="testLink">Get started for free</a>
          <ArrowRight className="w-4 h-4 inline-flex" />
        </div>
      </div>

      <div className='py-5'>
        <div className='container'>
          <div className=' flex justify-between items-center'>
            <Image src={Logo} alt="logo" width={40} height={40}/>
            <MenuIcon className='w-5 h-5 md:hidden'/>
            <ul className='items-center gap-6 text-black/60 hidden md:flex '>
              <li>About</li>
              <li>Feature</li>
              <li>Customers</li>
              <li>Updates</li>
              <li>Help</li>
              <button className='px-4 py-2 bg-black text-white rounded-lg tracking-tight font-medium'>Get for free</button>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
