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
    <div className="container items-center my-20 mx-auto flex justify-around">
      <div className="flex justify-between w-full">
        <div className="w-[90%]">
          <Image src={maskImage} alt="mask" width={300} height={300} />
          <Image src={border} alt="mask" width={300} height={300} />
          <h1 className="text-xl font-medium mt-4 text-primaryText text-justify">
            {' '}
            Our mill maintence solutions are designed to save cost with
            Equipment Maintenance, Energy Conservation & Fire Safety. They are
            ideal for Multi Industrial uses such as Textie Industry, Cement
            Industry, Steel Industry, Automotive Industry & Power Plants /
            Chemical Plants. These equipments are also usable in Shopping Malls,
            Residential & Hospitality Sector, Software Parks etc.
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-start w-full gap-4">
        <div className="w-[70%] ">
          <Image
            src={whySimpleImage}
            alt="mask"
            width={'100%'}
            height={'100%'}
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
