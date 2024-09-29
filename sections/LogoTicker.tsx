import React from 'react'

import LogoAcme from '@/assets/logo-acme.png'
import LogoApex from '@/assets/logo-apex.png'
import LogoCelestial from '@/assets/logo-celestial.png'
import LogoEcho from '@/assets/logo-echo.png'
import LogoPulse from '@/assets/logo-pulse.png'
import LogoQuantum from '@/assets/logo-quantum.png'
import Image from 'next/image'

const LogoTicker = () => {
  return (
    <div className='py-8 md:py-12 bg-white'>
      <div className='container'>
        <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
          <div className='flex gap-14 flex-none'>
            <Image src={LogoAcme} alt='Logo Acme' className='logo-ticker-image'/>
            <Image src={LogoApex} alt='Logo Apex' className='logo-ticker-image'/>
            <Image src={LogoCelestial} alt='Logo Celestial' className='logo-ticker-image'/>
            <Image src={LogoPulse} alt='Logo Pulse' className='logo-ticker-image'/>
            <Image src={LogoEcho} alt='Logo Echo' className='logo-ticker-image'/>
            <Image src={LogoQuantum} alt='Logo Qyantum' className='logo-ticker-image'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogoTicker
