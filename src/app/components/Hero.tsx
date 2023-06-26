'use client'

import Image from 'next/image';
import CustomButton from './CustomButton';

const Hero = () => {
    const handleScroll = () { title, containerStyles, handleClick}: CustommButtonProps)  {

    
  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero_title'>
                Find, book, or rent a car - quilcly and easily!
            </h1>

            <p className='hero_subtitle'>
                Streamline your car rental experience with our effortless booking process
            </p>

            <CustomButton 
            title="Explore cars"
            containerStyles="bg-primary-blue text-white rounded-full mt-10"
            handleClick={handleScroll}
            />
        </div>
    </div>
  )
}

export default Hero