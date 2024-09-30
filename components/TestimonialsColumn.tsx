import React from 'react'
import Image from 'next/image'
import { testimonials } from '@/constants/testimonials'
import { twMerge } from 'tailwind-merge'

const TestimonialsColumn = (props: { className?: string, testimonials: typeof testimonials }) => {
  return (
    <div className={twMerge('[mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]', props.className)}>
    {props.testimonials.map(({ text, imageSrc, name, username }, index) => (
      <div key={index} className='card max-w-[320px] mt-6 border'>
        <p>{text}</p>
        <div className='flex items-center mt-5 gap-2'>
          <Image 
            src={imageSrc}
            alt={imageSrc}
            width={40}
            height={40}
          />
          <div className=''>
            <p className='font-medium'>{name}</p>
            <p>{username}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
  )
}

export default TestimonialsColumn
