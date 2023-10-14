import React from 'react'
import Image from 'next/image'

// import image
import maskImage from '../../assets/why/mask.png'
import border from '../../assets/why/border.png'
import productOne from '../../assets/why/image_one.png'
import productTwo from '../../assets/why/image_two.png'
import productThree from '../../assets/why/image_three.png'
import whySimpleImage from '../../assets/why/why_simple.png'

const WhyChooseUs = () => {
  return (
    <div className="container items-center my-20 mx-auto flex justify-between">
      <div className="w-[35%]">
        <Image src={maskImage} alt="mask" width={300} height={300} />
        <Image src={border} alt="mask" width={300} height={300} />
        <h1 className="text-2xl font-semibold mt-4 text-primaryText">
          {' '}
          Our Mill maintenance
          <br /> equipment is right for you
        </h1>
      </div>
      <div className="flex flex-col items-end w-[70%] gap-4">
        {/* <div className="w-full">
          <Image src={productOne} alt="mask" width={'100%'} />
        </div>
        <div className="flex w-full gap-4">
          <Image src={productTwo} alt="mask" width={'50%'} />
          <Image src={productThree} alt="mask" width={'50%'} />
        </div> */}

        <Image
          src={whySimpleImage}
          alt="mask"
          width={'100%'}
          height={'100%'}
          objectFit="cover"
        />
      </div>
    </div>
  )
}

export default WhyChooseUs
